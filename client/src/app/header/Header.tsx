import React from 'react';
import styled from 'styled-components';

import AppLogo from './AppLogo';
import Navigation from './Navigation';

const StyledHeader = styled.header`
  background-color: #282c34;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 36px;
`;

const Header = () => (
  <StyledHeader>
    <AppLogo />
    <Title>React Testbench</Title>
    <Navigation />
  </StyledHeader>
);

export default Header;
