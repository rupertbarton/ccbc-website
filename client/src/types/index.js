import { shape, number, string, bool, arrayOf, objectOf, elementType } from 'prop-types';

export const execRole = shape({
  displayNames: arrayOf(string),
  userIds: arrayOf(string),
  name: string,
  id: string,
  order: number,
  isCaptain: bool
});

export const member = shape({
  displayName: string,
  id: string,
  isAdmin: bool,
  isCaptain: bool,
  isMember: bool,
  roles: arrayOf(string)
});

export const page = shape({
  content: string,
  order: number
});

export const pages = objectOf(page);

export const route = shape({
  name: string,
  path: string,
  component: elementType,
  requiresMember: bool,
  requiresExec: bool,
  requiresCaptain: bool,
});

export const currentUser = shape({
  photoURL: string
});