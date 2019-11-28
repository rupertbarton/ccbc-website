import React, { useEffect, useState } from 'react';
import ModifyExecComponent from './ModifyExecComponent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { updateExecRoles } from '../../../api/users';
import LoadingSpinner from '../../common/LoadingSpinner';
import SaveButton from '../../common/SaveButton';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
    background: theme.background
  },
}));

const ModifyExec = props => {
  const classes = useStyles();
  const [changes, setChanges] = useState({});
  useEffect(() => {
    if (Object.keys(props.members).length === 0) {
    props.fetchMembers();
    }
    if (Object.keys(props.execRoles).length === 0) {
      props.fetchExec();
    }
  }, []);

  const handleChange = (roleId, userIds) => {
    setChanges({
      ...changes,
      [roleId]: userIds
    });
  };

  const execRoleSortFunction = (a, b) => (
    a.order - b.order
  );

  const submitChanges = () => {
    updateExecRoles(changes).then(() => {
      props.fetchExec();
    });
  };

  return (
    <>
      {props.isExecLoading || props.isMembersLoading ?
        <LoadingSpinner />
        :
        <>
          <Grid container
            spacing={2}
            justify="center">
            {props.execRoles.sort(execRoleSortFunction).map(execRole => (
              <ModifyExecComponent key={execRole.id}
                execRole={execRole}
                members={props.members}
                onChange={handleChange} />
            ))}
          </Grid>
          <Grid container
            justify="center">
            <SaveButton label="Save"
              onClick={submitChanges} />
          </Grid>
        </>
      }
    </>
  );
};

export default ModifyExec;