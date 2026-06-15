import type { ReactNode } from 'react';

type Column<T> = {
  header: string;
  render: (row: T) => ReactNode;
};

type TableProps<T> = {
  columns: Array<Column<T>>;
  getKey: (row: T) => string;
  rows: T[];
};

export function Table<T>({ columns, getKey, rows }: TableProps<T>) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.header}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={getKey(row)}>
              {columns.map((column) => (
                <td key={column.header}>{column.render(row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
