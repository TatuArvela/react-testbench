import { Identity } from './types';

const hasAccess = (permission: string, identity: Identity | null) =>
  identity?.permissions.includes(permission) ?? false;

export const hasImagesAccess = (identity: Identity | null) =>
  hasAccess('images', identity);

export const hasReportAccess = (identity: Identity | null) =>
  hasAccess('report', identity);
