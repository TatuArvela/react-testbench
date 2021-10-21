import { Column, Row, SortingDirection } from './types';

export const formatRowValue = <T extends Row>(
  column: Column<T>,
  row: T
): string => {
  const value: any = row[column.columnKey];

  if (column.formatter) {
    return column.formatter(value);
  }

  if (typeof value === 'number') {
    return value.toString(10);
  }

  return value;
};

export const sortRows = <T extends Row>(
  columns: Column<T>[],
  rows: T[],
  sortBy: keyof T | null,
  sortingDirection: SortingDirection
) => {
  const sortFunction = columns.find(
    (column) => column.columnKey === sortBy
  )?.sort;
  if (!sortFunction) return rows;

  const sortedRows: T[] = [...rows].sort(sortFunction);

  if (sortingDirection === 'desc') {
    return sortedRows.reverse();
  }

  return sortedRows;
};
