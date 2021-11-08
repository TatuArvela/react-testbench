import styled from 'styled-components';

import Table from './Table/Table';
import { Column } from './Table/types';
import { ReportRow } from './types';

const StyledReport = styled.div`
  background: black
    linear-gradient(
      170deg,
      rgba(30, 30, 30, 0.1) 0%,
      rgba(200, 200, 200, 0.1) 49.75%,
      rgba(0, 0, 0, 0) 50.25%
    );
  border: 2px solid #3a3a3a;
  border-radius: 8px;
  padding: 36px;
  color: white;
  font-family: 'Roboto', sans-serif;
`;

const Title = styled.h2`
  font-size: 64px;
  text-align: right;
  margin-bottom: -24px;
  margin-top: 24px;
  color: #2f77bc;
  font-family: 'Righteous', sans-serif;
  text-transform: uppercase;
`;

const TableContainer = styled.div`
  border-radius: 12px;
  border: 5px solid #2f77bc;
  box-shadow: 0 0 0 5px black, 0 0 0 10px #2f77bc;
  padding: 5px;
  overflow: hidden;
`;

type Props = {
  columns: Column<ReportRow>[];
  rows: ReportRow[];
};

const Report = ({ columns, rows }: Props) => {
  return (
    <StyledReport>
      <TableContainer>
        <Table columns={columns} rows={rows} />
      </TableContainer>
      <Title>Report</Title>
    </StyledReport>
  );
};

export default Report;
