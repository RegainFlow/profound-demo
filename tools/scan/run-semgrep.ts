import { spawnSync } from 'node:child_process';

const command = process.env.SEMGREP_BIN ?? 'semgrep';
const args = ['--config', '.semgrep', '--error'];

const result = spawnSync(command, args, {
  encoding: 'utf8',
  shell: process.platform === 'win32',
  stdio: 'pipe'
});

const missingSemgrep =
  (result.error && 'code' in result.error && result.error.code === 'ENOENT') ||
  result.status === 127 ||
  /not recognized|not found/i.test(result.stderr ?? '');

if (missingSemgrep) {
  console.warn('semgrep not found; install Semgrep to run the native scan. Running offline scan fallback.');
  const fallback = spawnSync('npm', ['run', 'lint:boundaries'], {
    encoding: 'utf8',
    shell: process.platform === 'win32',
    stdio: 'inherit'
  });
  process.exit(fallback.status ?? 1);
}

if (result.stdout) {
  process.stdout.write(result.stdout);
}

if (result.stderr) {
  process.stderr.write(result.stderr);
}

process.exit(result.status ?? 1);
