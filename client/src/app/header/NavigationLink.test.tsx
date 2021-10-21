import NavigationLink from './NavigationLink';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';
import { render } from '@testing-library/react';
// The above is needed because this uses styled-components
// Otherwise the classes would change on each style change
// As a side-effect, the styles are included in the snapshot

// Snapshot tests validate that components don't change unexpectedly
// Sometimes useful, but consider alternatives
describe('NavigationLink', () => {
  test('Render snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <NavigationLink to="/">Home</NavigationLink>
      </MemoryRouter>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
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
