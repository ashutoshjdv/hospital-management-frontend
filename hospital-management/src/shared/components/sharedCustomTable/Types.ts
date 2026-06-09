export interface Column<T, K extends keyof T = keyof T> {
  key: K;

  label: string;

  className?: string;

  render?: (
    value: unknown,

    row: T,
  ) => React.ReactNode;
}

export interface DataTableProps<T> {
  columns: Column<T>[];

  data: T[];

  loading?: boolean;

  title?: string;

  toolbarActions?: React.ReactNode;

  rowActions?: (row: T) => React.ReactNode;
}
