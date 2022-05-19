import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import NavigationLink from './NavigationLink';
// Check out setupTests.ts

// Snapshot tests validate that components don't change unexpectedly
// Sometimes useful, but consider alternatives
describe('NavigationLink', () => {
  test('Render snapshot', () => {
    render(
      <MemoryRouter>
        <NavigationLink to="/">Home</NavigationLink>
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toMatchInlineSnapshot(`
      .c0 {
        color: white;
        margin: 10px;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: color 0.2s,text-shadow 0.2s;
        transition: color 0.2s,text-shadow 0.2s;
      }

      .c0:hover {
        color: cyan;
        text-shadow: 0 0 1px cyan;
      }

      <a
        class="c0"
        href="/"
      >
        Home
      </a>
    `);
  });
});
