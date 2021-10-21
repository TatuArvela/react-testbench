import { Permission } from '../types';

export const defaultDummyName = 'John MockAfee';

export const defaultDummyToken = 'MOCKMOCK';

export const createDummyIdentity = (
  permissions?: Permission[],
  name?: string,
  token?: string
) => {
  return {
    permissions: permissions ?? [],
    name: name ?? defaultDummyName,
    token: token ?? defaultDummyToken,
  };
};
