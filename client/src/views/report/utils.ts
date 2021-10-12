import { ReportColumn, ReportRow, SortingDirection } from './types';

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

export const sortRows = (
  rows: ReportRow[],
  sortBy: ReportColumn | null,
  sortingDirection: SortingDirection
) => {
  let sortedRows: ReportRow[];

  switch (sortBy) {
    case 'id':
      sortedRows = rows.sort(sortById);
      break;
    case 'date':
      sortedRows = rows.sort(sortByDate);
      break;
    case 'durationInMinutes':
      sortedRows = rows.sort(sortByDurationInMinutes);
      break;
    case 'description':
      sortedRows = rows.sort(sortByDescription);
      break;
    default:
      sortedRows = rows;
      break;
  }

  if (sortingDirection === 'desc') {
    sortedRows = sortedRows.reverse();
  }

  return sortedRows;
};

const sortById = (a: ReportRow, b: ReportRow) => {
  return a.id - b.id;
};

const sortByDate = (a: ReportRow, b: ReportRow) => {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
};

const sortByDurationInMinutes = (a: ReportRow, b: ReportRow) => {
  return a.durationInMinutes - b.durationInMinutes;
};

const sortByDescription = (a: ReportRow, b: ReportRow) => {
  if (a.description < b.description) {
    return -1;
  }
  if (a.description > b.description) {
    return 1;
  }
  return 0;
};
