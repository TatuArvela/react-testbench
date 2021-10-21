export type SortingDirection = 'asc' | 'desc';

export type Row = {
  id: string | number;
  [key: string]: any;
};

export type Column<T> = {
  label: string;
  columnKey: keyof T;
  formatter?: (value: T[keyof T]) => string;
  sort: SortFunction<T>;
};

export type SortFunction<T> = (a: T, b: T) => number;
