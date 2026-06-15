import { Button } from '../design-system';

type ExportButtonProps = {
  href: string;
  label: string;
  testId?: string;
};

export function ExportButton({ href, label, testId }: ExportButtonProps) {
  return (
    <Button
      aria-label={label}
      data-testid={testId}
      onClick={() => {
        window.location.assign(href);
      }}
    >
      <span aria-hidden="true">↓</span>
      {label}
    </Button>
  );
}
