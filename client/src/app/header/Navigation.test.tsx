import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { createDummyIdentity } from '../../auth/mock/dummyIdentity';
import MockAuthProvider from '../../auth/mock/MockAuthProvider';
import { Identity, Permission } from '../../auth/types';
import Navigation from './Navigation';

// Helper function to reduce boilerplate
const renderNavigation = (identity: Identity | null) => {
  return render(
    <MemoryRouter>
      <MockAuthProvider identity={identity}>
        <Navigation />
      </MockAuthProvider>
    </MemoryRouter>
  );
};

// You can make these descriptions that group tests together
describe('Navigation', () => {
  describe('Always show a "Home" link', () => {
    test('Logged out', () => {
      renderNavigation(null);

      // getByText returns a single node, or throws an error if there are 0 or >1
      // We are looking for an element with the text "Home", of which there should only be one.
      // We could also use `getByRole('link', { name: "Home" })` or `getByRole('link', { name: /home/i })`,
      // but this is more convenient in this case
      expect(screen.getByText('Home')).toBeInTheDocument();
    });

    // You can also use it() instead of test(), if the syntax makes more sense in your case
    test('Logged in', () => {
      renderNavigation(createDummyIdentity());
      expect(screen.getByText('Home')).toBeInTheDocument();
    });
  });

  describe('Regular style', () => {
    describe('Show "Images" link if the user has "images" permission', () => {
      test('No permission', () => {
        renderNavigation(null);

        // Note that this uses "queryByText". It can be used to check for elements that are not present
        expect(screen.queryByText('Images')).toBeNull();
      });

      test('Permission', () => {
        renderNavigation(createDummyIdentity([Permission.Images]));
        expect(screen.getByText('Images')).toBeInTheDocument();
      });
    });

    describe('Show "Report" link if the user has "report" permission', () => {
      test('No permission', () => {
        renderNavigation(null);
        expect(screen.queryByText('Report')).toBeNull();
      });

      test('Permission', () => {
        renderNavigation(createDummyIdentity([Permission.Report]));
        expect(screen.getByText('Report')).toBeInTheDocument();
      });
    });
  });

  // We can make the above a bit simpler like this, as the cases work the same way
  // Quite a bit shorter
  describe('.each() style', () => {
    describe.each([
      ['Images', Permission.Images],
      ['Report', Permission.Report],
    ])(
      'Show "%s" link if the user has "%s" permission',
      (title, permission) => {
        test('No permission', () => {
          renderNavigation(null);

          // Note that this uses "queryByText". It can be used to check for elements that are not present
          expect(screen.queryByText(title)).toBeNull();
        });

        test('Permission', () => {
          renderNavigation(createDummyIdentity([permission]));
          expect(screen.getByText(title)).toBeInTheDocument();
        });
      }
    );
  });

  describe('Show "Log in" link if the user is not authenticated', () => {
    test('Not authenticated', () => {
      renderNavigation(null);
      expect(screen.getByText('Log in')).toBeInTheDocument();
    });

    test('Authenticated', () => {
      renderNavigation(createDummyIdentity([]));
      expect(screen.queryByText('Log in')).toBeNull();
    });
  });

  describe('Show "Log out" link if the user is authenticated', () => {
    test('Not authenticated', () => {
      renderNavigation(null);
      expect(screen.queryByText('Log out')).toBeNull();
    });

    test('Authenticated', () => {
      renderNavigation(createDummyIdentity([]));
      expect(screen.getByText('Log out')).toBeInTheDocument();
    });
  });
});
