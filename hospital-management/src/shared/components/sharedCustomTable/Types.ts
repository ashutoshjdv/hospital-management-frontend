export interface Column<T, K extends keyof T = keyof T> {
  key: K;

  label: string;

  className?: string;

  onlyBigScreen?: boolean;

  position?: string;

  render?: (
    value: T[K],

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

  filters?: TableFilter[];

  activeFilters?: Record<string, string>;

  onFilterChange?: (
    key: string,

    value: string,
  ) => void;

  page?: number;

  totalPages?: number;

  onPageChange?: (page: number) => void;
}

interface FilterOption {
  label: string;

  value: string;
}

export interface TableFilter {
  key: string;

  label: string;

  options: FilterOption[];
}
