import isAuthenticated from '../../util/isAuthenticated';

describe('isAuthenticated', () => {
  let page;
  let user;
  let defaultPage;
  beforeEach(() => {
    defaultPage = {
      requiresMember: false,
      requiresExec: false,
      requiresCaptain: false,
    };
    page = { ...defaultPage };
    user = {
      isMember: false,
      isExec: false,
      isCaptain: false
    };
  });
  it('Unauthenticated', () => {
    //All requirements false
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires members and exec
    page = { ...page, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires members, exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires exec
    page = { ...defaultPage, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires captain
    page = { ...defaultPage, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires members and captain
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeFalsy();
  });

  it('Member', () => {
    user = { ...user, isMember: true };

    //All requirements false
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members and exec
    page = { ...page, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires members, exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires exec
    page = { ...defaultPage, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires captain
    page = { ...defaultPage, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires members and captain
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeFalsy();
  });

  it('Exec and all below', () => {
    user = { ...user, isMember: true, isExec: true };

    //All requirements false
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members and exec
    page = { ...page, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members, exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires exec
    page = { ...defaultPage, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires captain
    page = { ...defaultPage, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires members and captain
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeFalsy();
  });

  it('Captain and all below', () => {
    user = { ...user, isMember: true, isExec: true, isCaptain: true };

    //All requirements false
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members and exec
    page = { ...page, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members, exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires exec
    page = { ...defaultPage, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires captain
    page = { ...defaultPage, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members and captain
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeTruthy();
  });

  it('Just exec', () => {
    user = { ...user, isExec: true };

    //All requirements false
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires members and exec
    page = { ...page, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires members, exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires exec
    page = { ...defaultPage, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires captain
    page = { ...defaultPage, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires members and captain
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeFalsy();
  });

  it('Just captain', () => {
    user = { ...user, isCaptain: true };

    //All requirements false
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires members and exec
    page = { ...page, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires members, exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires exec
    page = { ...defaultPage, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeFalsy();

    //Only requires captain
    page = { ...defaultPage, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members and captain
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeFalsy();
  });

  it('Admin', () => {
    user = { isAdmin: true };

    //All requirements false
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members and exec
    page = { ...page, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members, exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires exec
    page = { ...defaultPage, requiresExec: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires exec and captain
    page = { ...page, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires captain
    page = { ...defaultPage, requiresCaptain: true };
    expect(isAuthenticated(user, page)).toBeTruthy();

    //Only requires members and captain
    page = { ...page, requiresMember: true };
    expect(isAuthenticated(user, page)).toBeTruthy();
  });
});
