export interface Column<T, K extends keyof T = keyof T> {
  key: K;

  label: string;

  className?: string;

  onlyBigScreen?: boolean;

  position?: string;

  render?: (
    value: unknown,

    row: T,
  ) => React.ReactNode;
}

export interface DataListProps<T> {
  columns: Column<T>[];

  data: T[];

  loading?: boolean;

  title?: string;

  toolbarActions?: React.ReactNode;

  rowActions?: (row: T) => React.ReactNode;
}
