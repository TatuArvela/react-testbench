import { useMemo, useState } from 'react';
import styled from 'styled-components';

import ColumnHeader from './ColumnHeader';
import { Column, Row } from './types';
import { formatRowValue, sortRows } from './utils';

const StyledTable = styled.table`
  border: 2px solid #101010;
  border-collapse: collapse;
  min-width: 600px;
`;

const Cell = styled.td`
  border: 1px solid #707070;
  padding: 5px;
`;

type Props<T extends Row> = {
  columns: Column<T>[];
  rows: T[];
};

const Table = <T extends Row>({ rows, columns }: Props<T>) => {
  const [sortBy, setSortBy] = useState<keyof T | null>(null);
  const [sortingDirection, setSortingDirection] = useState<'asc' | 'desc'>(
    'asc'
  );

  const changeSorting = (key: keyof T) => {
    if (key === sortBy) {
      if (sortingDirection === 'asc') {
        return setSortingDirection('desc');
      }
      setSortBy(null);
      setSortingDirection('asc');
      return;
    }
    setSortBy(key);
    setSortingDirection('asc');
  };

  const sortedRows = useMemo(
    () => sortRows(columns, rows, sortBy, sortingDirection),
    [columns, rows, sortBy, sortingDirection]
  );

  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((column) => (
            <ColumnHeader
              changeSorting={changeSorting}
              columnKey={column.columnKey}
              key={column.columnKey as string}
              label={column.label}
              sortBy={sortBy}
              sortingDirection={sortingDirection}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row) => {
          return (
            <tr key={row.id}>
              {columns.map((column) => (
                <Cell key={column.columnKey as string}>
                  {formatRowValue(column, row)}
                </Cell>
              ))}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
