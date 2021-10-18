import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  to: LinkProps['to'];
  children: React.ReactNode;
}

const StyledLink = styled(Link)`
  color: white;
  margin: 10px;
  text-decoration: none;
  transition: color 0.2s, text-shadow 0.2s;

  &:hover {
    color: cyan;
    text-shadow: 0 0 1px cyan;
  }
`;

const NavigationLink = ({ to, children }: Props) => (
  <StyledLink to={to} children={children} />
);

export default NavigationLink;
