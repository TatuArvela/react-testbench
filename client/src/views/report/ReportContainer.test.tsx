import { render, screen } from '@testing-library/react';

import { createDummyIdentity } from '../../auth/mock/dummyIdentity';
import MockAuthProvider from '../../auth/mock/MockAuthProvider';
import { Permission } from '../../auth/types';
import { reportHandler } from '../../__mocks__/handlers';
import { server } from '../../__mocks__/server';
import ReportContainer from './ReportContainer';

// Example of using msw
// I had never used it before, seems neat
describe('ReportContainer', () => {
  test('Fetches report data and renders it', async () => {
    // You can set custom handlers for a test like this
    server.use(reportHandler); // Look at the server and handler

    render(
      // Just setting the permission to keep up appearances, but it's not considered in the handler
      <MockAuthProvider identity={createDummyIdentity([Permission.Report])}>
        <ReportContainer />
      </MockAuthProvider>
    );

    await screen.findByText('Lorem');
    await screen.findByText('Ipsum');
    await screen.findByText('Dolor');
  });
});
