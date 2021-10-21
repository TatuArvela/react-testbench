import styled from 'styled-components';

import { Row, SortingDirection } from './types';

type THProps = {
  isSortedBy: boolean;
};

const TH = styled.th<THProps>`
  border: 1px solid #202020;
  cursor: pointer;
  padding: 10px 5px;
  height: 40px;
  width: 25%;
  background: ${(props) => (props.isSortedBy ? '#99ee99' : '#ffffff')};

  &:hover {
    background: #9999ee;
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
        return <SortingIndicator>⬆</SortingIndicator>;
      case 'desc':
        return <SortingIndicator>⬇</SortingIndicator>;
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
