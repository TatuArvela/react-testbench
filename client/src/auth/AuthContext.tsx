import React from 'react';

import { Auth } from './types';

// @ts-ignore
export const AuthContext = React.createContext<Auth>(undefined);
AuthContext.displayName = 'AuthContext';

export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;

export function useAuthContext(): Auth {
  return React.useContext<Auth>(AuthContext);
}
