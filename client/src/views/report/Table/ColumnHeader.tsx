import styled from 'styled-components';

import { Row, SortingDirection } from './types';

type THProps = {
  isSortedBy: boolean;
};

const TH = styled.th<THProps>`
  background: ${(props) => (props.isSortedBy ? '#dc4627' : '#bd2126')};
  border-radius: 12px;
  color: black;
  cursor: pointer;
  height: 40px;
  overflow: hidden;
  padding: 10px 5px;
  width: 25%;

  &:hover {
    background: #dda027;
  }
`;

const SortingIndicator = styled.span`
  float: right;
  position: relative;
  top: 0.2em;
  line-height: 0.8em;
  margin: 0;
`;

type Props<T extends Row> = {
  changeSorting: (key: keyof T) => void;
  columnKey: keyof T;
  label: string;
  sortBy: keyof T | null;
  sortingDirection: SortingDirection;
};

const ColumnHeader = <T extends Row>({
  changeSorting,
  columnKey,
  label,
  sortBy,
  sortingDirection,
}: Props<T>) => {
  const getSortingIndicator = (sortingDirection: SortingDirection) => {
    switch (sortingDirection) {
      case 'asc':
        return (
          <SortingIndicator data-testid="sorting-indicator">⬆</SortingIndicator>
        );
      case 'desc':
        return (
          <SortingIndicator data-testid="sorting-indicator">⬇</SortingIndicator>
        );
    }
  };

  const isSortedBy = sortBy === columnKey;

  return (
    <TH isSortedBy={isSortedBy} onClick={() => changeSorting(columnKey)}>
      {label}
      {isSortedBy && getSortingIndicator(sortingDirection)}
    </TH>
  );
};

export default ColumnHeader;
