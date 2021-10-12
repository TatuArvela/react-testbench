import styled from 'styled-components';

import ColumnHeader from './ColumnHeader';
import { ReportColumn, ReportRow, SortingDirection } from './types';
import { formatDate } from './utils';

const StyledReport = styled.div`
  background: white;
  border: 2px solid #3a3a3a;
  padding: 32px;

  h2 {
    margin-top: 0;
    text-align: center;
  }
`;

const Table = styled.table`
  border: 2px solid #101010;
  border-collapse: collapse;
  min-width: 600px;
`;

const Cell = styled.td`
  border: 1px solid #707070;
  padding: 5px;
`;

type Props = {
  rows: ReportRow[];
  changeSorting: (key: ReportColumn) => void;
  sortBy: ReportColumn | null;
  sortingDirection: SortingDirection;
};

const Report = ({ rows, ...rest }: Props) => {
  return (
    <StyledReport>
      <h2>Report</h2>
      <Table>
        <thead>
          <tr>
            <ColumnHeader {...rest} label="ID" columnKey="id" />
            <ColumnHeader {...rest} label="Date" columnKey="date" />
            <ColumnHeader
              {...rest}
              label="Duration in minutes"
              columnKey="durationInMinutes"
            />
            <ColumnHeader
              {...rest}
              label="Description"
              columnKey="description"
            />
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.id}>
                <Cell>{row.id}</Cell>
                <Cell>{formatDate(row.date)}</Cell>
                <Cell>{row.durationInMinutes}</Cell>
                <Cell>{row.description}</Cell>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </StyledReport>
  );
};

export default Report;
