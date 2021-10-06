import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { useAuthContext } from '../auth/AuthContext';
import AuthorizedRoute from '../auth/AuthorizedRoute';
import { Permission } from '../auth/types';
import Home from '../views/Home';
import Images from '../views/images/Images';
import Login from '../views/Login';
import Logout from '../views/Logout';

const Routes = () => {
  const { logIn, logOut } = useAuthContext();

  return (
    <Switch>
      <Route path="/login" exact>
        <Login logIn={logIn} />
      </Route>

      <Route path="/logout" exact>
        <Logout logOut={logOut} />
      </Route>

      <AuthorizedRoute permission={Permission.Images} path="/images" exact>
        <Images />
      </AuthorizedRoute>

      <Route exact path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
