import { SortFunction } from './Table/types';
import { ReportRow } from './types';

export const formatDate = (value: ReportRow['date']) => {
  const date = new Date(value);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

export const sortById: SortFunction<ReportRow> = (a, b) => {
  return a.id - b.id;
};

export const sortByDate: SortFunction<ReportRow> = (a, b) => {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
};

export const sortByDurationInMinutes: SortFunction<ReportRow> = (a, b) => {
  return a.durationInMinutes - b.durationInMinutes;
};

export const sortByDescription: SortFunction<ReportRow> = (a, b) => {
  if (a.description < b.description) {
    return -1;
  }
  if (a.description > b.description) {
    return 1;
  }
  return 0;
};
