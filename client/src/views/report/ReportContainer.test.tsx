import { render, screen } from '@testing-library/react';

import { createDummyIdentity } from '../../auth/mock/dummyIdentity';
import MockAuthProvider from '../../auth/mock/MockAuthProvider';
import { Permission } from '../../auth/types';
import { reportHandler } from '../../mocks/handlers';
import { server } from '../../mocks/server';
import ReportContainer from './ReportContainer';

// Example of using msw
// I had never used it before, seems neat
describe('ReportContainer', () => {
  test('Fetches report data and renders it', async () => {
    // You can set custom handlers for a test like this
    server.use(reportHandler);

    render(
      <MockAuthProvider identity={createDummyIdentity([Permission.Report])}>
        <ReportContainer />
      </MockAuthProvider>
    );

    await screen.findByText('Lorem');
    await screen.findByText('Ipsum');
    await screen.findByText('Dolor');
  });
});
