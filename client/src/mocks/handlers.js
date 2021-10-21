import { rest } from 'msw';

import { REPORT_ENDPOINT } from '../views/report/getReport';

const mockReport = [
  {
    id: 0,
    date: new Date('2021-10-03'),
    durationInMinutes: 1,
    description: 'Lorem',
  },
  {
    id: 1,
    date: new Date('2021-10-04'),
    durationInMinutes: 2,
    description: 'Ipsum',
  },
  {
    id: 2,
    date: new Date('2021-10-05'),
    durationInMinutes: 3,
    description: 'Dolor',
  },
];

export const reportHandler = rest.get(REPORT_ENDPOINT, (req, res, ctx) => {
  return res(ctx.json(mockReport));
});

export const handlers = [];
