import { connect } from 'react-redux';
import ModifyExecPage from './ModifyExecPage';
import { updateMembers, updateExec } from '../../../actions/users';
import { fetchMembers, fetchExec } from '../../../api/users';

const mapDispatchToProps = dispatch => ({
  fetchMembers: () => fetchMembers().then(users => dispatch(updateMembers(users))),
  fetchExec: () => fetchExec().then(users => dispatch(updateExec(users))),
});

const mapStateToProps = state => ({
  members: state.users.members,
  execRoles: state.users.execRoles
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyExecPage);