import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { AuthProvider } from '../auth/AuthContext';
import useAuth from '../auth/useAuth';
import GlobalStyle from './GlobalStyle';
import Header from './header/Header';
import Routes from './Routes';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: gray;
  margin: 0;
`;

const App = () => {
  const auth = useAuth();

  return (
    <AuthProvider value={auth}>
      <AppContainer>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </AppContainer>
    </AuthProvider>
  );
};

export default App;
