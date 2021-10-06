export enum Permission {
  Report = 'report',
  Images = 'images',
}

export type Identity = {
  name: string;
  token: string;
  permissions: Permission[];
};

export type Auth = {
  hasPermission: (permission: Permission) => boolean;
  identity: Identity | null;
  logIn: (username: string, password: string) => Promise<boolean>;
  logOut: () => void;
};
