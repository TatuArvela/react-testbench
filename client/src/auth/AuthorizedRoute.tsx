import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from './AuthContext';
import { Permission } from './types';

type Props = {
  permission: Permission;
  children: React.ReactNode;
};

const AuthorizedRoute = ({ permission, children }: Props) => {
  const { hasPermission } = useAuthContext();

  if (!hasPermission(permission)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AuthorizedRoute;
