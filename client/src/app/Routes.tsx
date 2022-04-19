import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { useAuthContext } from '../auth/AuthContext';
import AuthorizedRoute from '../auth/AuthorizedRoute';
import { Permission } from '../auth/types';
import Home from '../views/Home';
import ImagesView from '../views/images/ImagesView';
import Login from '../views/Login';
import Logout from '../views/Logout';
import ReportContainer from '../views/report/ReportContainer';

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
        <ImagesView />
      </AuthorizedRoute>

      <AuthorizedRoute permission={Permission.Report} path="/report" exact>
        <ReportContainer />
      </AuthorizedRoute>

      <Route exact path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
