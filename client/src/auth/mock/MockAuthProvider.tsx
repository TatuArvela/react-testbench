import { AuthProvider } from '../AuthContext';
import { Auth, Identity, Permission } from '../types';
import React from 'react';

type Props = {
  identity: Identity | null;
  children: React.ReactNode;
};

// This provides a simple mock auth context for testing
const MockAuthProvider = ({ identity, children }: Props) => {
  const hasPermission = (permission: Permission) =>
    identity?.permissions.includes(permission) ?? false;

  const mockAuth: Auth = {
    hasPermission,
    identity,
    logIn: () => Promise.resolve(true),
    logOut: () => undefined,
  };

  return <AuthProvider value={mockAuth}>{children}</AuthProvider>;
};

export default MockAuthProvider;
