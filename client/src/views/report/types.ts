export type ReportRow = {
  id: number;
  date: string;
  durationInMinutes: number;
  description: string;
};

export type ReportColumn = keyof ReportRow;

export type SortingDirection = 'asc' | 'desc';
