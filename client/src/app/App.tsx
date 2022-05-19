import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { AuthProvider } from '../auth/AuthContext';
import useAuth from '../auth/useAuth';
import AppRoutes from './AppRoutes';
import GlobalStyle from './GlobalStyle';
import Header from './header/Header';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: gray;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const auth = useAuth();

  return (
    <AuthProvider value={auth}>
      <AppContainer>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Content>
            <AppRoutes />
          </Content>
        </BrowserRouter>
      </AppContainer>
    </AuthProvider>
  );
};

export default App;
