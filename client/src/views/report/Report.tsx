import styled from 'styled-components';

import Table from './Table/Table';
import { Column } from './Table/types';
import { ReportRow } from './types';

const StyledReport = styled.div`
  background: white;
  border: 2px solid #3a3a3a;
  padding: 32px;

  h2 {
    margin-top: 0;
    text-align: center;
  }
`;

type Props = {
  columns: Column<ReportRow>[];
  rows: ReportRow[];
};

const Report = ({ columns, rows }: Props) => {
  return (
    <StyledReport>
      <h2>Report</h2>
      <Table columns={columns} rows={rows} />
    </StyledReport>
  );
};

export default Report;
