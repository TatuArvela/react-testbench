import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { useAuthContext } from '../auth/AuthContext';
import Home from '../views/Home';
import Login from '../views/Login';
import Logout from '../views/Logout';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const Routes = () => {
  const { logIn, logOut } = useAuthContext();

  return (
    <Content>
      <Switch>
        <Route path="/login" exact>
          <Login logIn={logIn} />
        </Route>
        <Route path="/logout" exact>
          <Logout logOut={logOut} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Content>
  );
};

export default Routes;
