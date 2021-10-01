export type Identity = {
  name: string;
  token: string;
  permissions: string[];
};

export type Auth = {
  logIn: (username: string, password: string) => Promise<boolean>;
  logOut: () => void;
  identity: Identity | null;
};
