import { useEffect, useState } from 'react';

import { useAuthContext } from '../../auth/AuthContext';
import getReport from './getReport';
import Report from './Report';
import { Column } from './Table/types';
import { ReportRow } from './types';
import {
  formatDate,
  sortByDate,
  sortByDescription,
  sortByDurationInMinutes,
  sortById,
} from './utils';

const columns: Column<ReportRow>[] = [
  {
    label: 'ID',
    columnKey: 'id',
    sort: sortById,
  },
  {
    label: 'Date',
    columnKey: 'date',
    formatter: (value) => formatDate(value as string), // FIXME
    sort: sortByDate,
  },
  {
    label: 'Duration in minutes',
    columnKey: 'durationInMinutes',
    sort: sortByDurationInMinutes,
  },
  {
    label: 'Description',
    columnKey: 'description',
    sort: sortByDescription,
  },
];

const ReportContainer = () => {
  const { identity } = useAuthContext();
  const [rows, setRows] = useState<ReportRow[]>([]);

  useEffect(() => {
    if (identity) {
      getReport(identity).then((data) => setRows(data));
    }
  }, [identity]);

  return <Report columns={columns} rows={rows} />;
};

export default ReportContainer;
