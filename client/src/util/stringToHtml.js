export default (string, execRoles) => {
  string = string.replace(/\$\{(.+?)}/g, (_, partialMatch) => {
    const execRole = execRoles.find(execRole => execRole.name == partialMatch);
    if (!execRole) {
      return '<span style="color: rgb(230, 0, 0);">Error: Exec Role Not Found</span>';
    }
    const names = execRole.displayNames;
    if (!names || names.length == 0) {
      return 'the ' + execRole.name;
    } else if (names.length == 1) {
      return names[0];
    } else {
      return names.slice(0, names.length - 1).join(', ') + ' and ' + names[names.length - 1];
    }
  });

  return string;
};