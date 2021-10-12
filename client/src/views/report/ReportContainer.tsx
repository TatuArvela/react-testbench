import { useEffect, useMemo, useState } from 'react';

import { useAuthContext } from '../../auth/AuthContext';
import getReport from './getReport';
import Report from './Report';
import { ReportColumn, ReportRow } from './types';
import { sortRows } from './utils';

const ReportContainer = () => {
  const { identity } = useAuthContext();
  const [rows, setRows] = useState<ReportRow[]>([]);
  const [sortBy, setSortBy] = useState<ReportColumn | null>(null);
  const [sortingDirection, setSortingDirection] = useState<'asc' | 'desc'>(
    'asc'
  );

  useEffect(() => {
    if (identity) {
      getReport(identity).then((data) => setRows(data));
    }
  }, [identity]);

  const sortedRows = useMemo(
    () => sortRows(rows, sortBy, sortingDirection),
    [rows, sortBy, sortingDirection]
  );

  const changeSorting = (key: ReportColumn) => {
    if (key === sortBy) {
      if (sortingDirection === 'asc') {
        return setSortingDirection('desc');
      }
      return setSortBy(null);
    }
    setSortBy(key);
    setSortingDirection('asc');
  };

  return (
    <Report
      changeSorting={changeSorting}
      rows={sortedRows}
      sortBy={sortBy}
      sortingDirection={sortingDirection}
    />
  );
};

export default ReportContainer;
