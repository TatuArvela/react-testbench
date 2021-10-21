import { Identity } from '../../auth/types';
import { ReportRow } from './types';

export const REPORT_ENDPOINT = 'http://localhost:3001/report';

const getReport = async (identity: Identity): Promise<ReportRow[]> => {
  return fetch(REPORT_ENDPOINT, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${identity.token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export default getReport;
