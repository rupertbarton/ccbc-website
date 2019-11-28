import React, { useEffect, useState } from 'react';
import ModifyExecComponent from './ModifyExecComponent';
import Grid from '@material-ui/core/Grid';
import { updateExecRoles } from '../../../api/users';
import LoadingSpinner from '../../common/LoadingSpinner';
import SaveButton from '../../common/SaveButton';
import PropTypes from 'prop-types';

const ModifyExecPage = props => {
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

ModifyExecPage.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.object
  ),
  fetchMembers: PropTypes.func,
  execRoles: PropTypes.arrayOf(PropTypes.objectOf({
    displayNames: PropTypes.arrayOf(PropTypes.string),
    userIds: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    order: PropTypes.number,
    isCaptain: PropTypes.bool
  })),
  fetchExec: PropTypes.func,
  isExecLoading: PropTypes.bool,
  isMembersLoading: PropTypes.bool
};

export default ModifyExecPage;