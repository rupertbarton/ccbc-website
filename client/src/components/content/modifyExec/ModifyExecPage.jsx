import React, { useEffect, useState } from 'react';
import ModifyExecComponent from './ModifyExecComponent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { updateExecRoles } from '../../../api/users'

const useStyles = makeStyles(theme => ({
  button: {
    background: theme.background
  }
}));

const ModifyExec = props => {
  const classes = useStyles();
  const [changes, setChanges] = useState({})
  useEffect(() => {
    props.updateMembers();
    props.updateExec();
  }, []);

  const handleChange = (roleId, userIds) => {
    setChanges({
      ...changes,
      [roleId]: userIds
    })
    console.log(changes)
  }

  const execRoleSortFunction = (a, b) => (
    a.order - b.order
  )

  return (
    <>
      <Grid container spacing={2} justify="center">
        {props.execRoles.sort(execRoleSortFunction).map(execRole => (
          <ModifyExecComponent key={execRole.id}
            execRole={execRole}
            members={props.members}
            onChange={handleChange} />
        ))}
      </Grid>
      <Grid container justify="center">
        <Button variant="contained" color="primary" className={classes.button} onClick={() => updateExecRoles(changes)}>
          Save
      </Button>
      </Grid>
    </>
  );
};

export default ModifyExec;