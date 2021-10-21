import { sortDate, sortNumber, sortString } from './Table/sort';
import { SortFunction } from './Table/types';
import { ReportRow } from './types';

export const formatDate = (value: ReportRow['date']) => {
  const date = new Date(value);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

export const sortById: SortFunction<ReportRow> = sortNumber('id');

export const sortByDate: SortFunction<ReportRow> = sortDate('date');

export const sortByDurationInMinutes: SortFunction<ReportRow> =
  sortNumber('durationInMinutes');

export const sortByDescription: SortFunction<ReportRow> =
  sortString('description');
