export default (user, page) => {

  //If page doesn't require authentication, return true.
  if (!(page.requiresCaptain || page.requiresExec || page.requiresMember)) {
    return true
  }
  //If user isn't logged in, return false as all routes after this require being logged in.
  else if(!user) {
    return false
  }
  else if(user.isAdmin || user.isCaptain) {
    return true
  }
  else if (page.requiresCaptain && !user.isCaptain) {
    return false
  }
  else if (page.requiresExec && !user.isExec) {
    return false
  }
  else if (page.requiresMember && !user.isMember) {
    return false
  }
  else return true
}