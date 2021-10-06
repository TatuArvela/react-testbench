import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useAuthContext } from './AuthContext';
import { Permission } from './types';

type Props = {
  permission: Permission;
} & RouteProps;

const AuthorizedRoute = ({ permission, ...rest }: Props) => {
  const { hasPermission } = useAuthContext();

  if (!hasPermission(permission)) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} />;
};

export default AuthorizedRoute;
