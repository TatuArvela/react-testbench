import { fireEvent, render, screen } from '@testing-library/react';

import { sortNumber, sortString } from './sort';
import Table from './Table';
import { Column, Row } from './types';

type TestRow = Row & {
  id: number;
  aaa: string;
  bbb: number;
};

const rows: TestRow[] = [
  {
    aaa: 'Hello',
    bbb: 0,
    id: 0,
  },
  {
    aaa: 'World',
    bbb: 1,
    id: 1,
  },
];

// The mocks can be outside the test, too
const sortAaaMock = jest.fn(sortString('aaa'));
const sortBbbMock = jest.fn(sortNumber('bbb'));

const columns: Column<TestRow>[] = [
  {
    columnKey: 'aaa',
    label: 'AAA',
    sort: sortAaaMock,
  },
  {
    columnKey: 'bbb',
    label: 'BBB',
    sort: sortBbbMock,
  },
];

describe('Table', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Clicking a column sorts the data', async () => {
    render(<Table rows={rows} columns={columns} />);

    const aaaHeader = screen.getByText('AAA');

    // First click
    // Note that fireEvent does not need to be wrapped in act(), as it uses it internally. Convenient!
    fireEvent(aaaHeader, new MouseEvent('click', { bubbles: true }));

    expect(
      screen.getByTestId('sorting-indicator').textContent
    ).toMatchInlineSnapshot(`"⬆"`);
    expect(sortAaaMock).toHaveBeenCalledTimes(1);

    // Second click
    fireEvent(aaaHeader, new MouseEvent('click', { bubbles: true }));

    expect(
      screen.getByTestId('sorting-indicator').textContent
    ).toMatchInlineSnapshot(`"⬇"`);
    expect(sortAaaMock).toHaveBeenCalledTimes(2);
  });
});
