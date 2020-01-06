import React, { useEffect, useState } from 'react';
import ModifyExecComponent from './ModifyExecComponent';
import Grid from '@material-ui/core/Grid';
import { updateExecRoles } from '../../../api/users';
import LoadingSpinner from '../../common/LoadingSpinner';
import SaveButton from '../../common/SaveButton';
import PropTypes from 'prop-types';
import { execRole, member } from '../../../types';

const ModifyExecPage = props => {
  const [changes, setChanges] = useState({});

  const { members, fetchMembers, execRoles, fetchExec } = props;
  useEffect(() => {
    if (Object.keys(members).length === 0) {
      fetchMembers();
    }
    if (Object.keys(execRoles).length === 0) {
      fetchExec();
    }
  }, [members, fetchMembers, execRoles, fetchExec]);

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
  members: PropTypes.arrayOf(member),
  fetchMembers: PropTypes.func,
  execRoles: PropTypes.arrayOf(execRole),
  fetchExec: PropTypes.func,
  isExecLoading: PropTypes.bool,
  isMembersLoading: PropTypes.bool
};

export default ModifyExecPage;