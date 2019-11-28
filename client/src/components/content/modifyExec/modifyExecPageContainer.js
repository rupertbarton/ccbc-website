import { connect } from 'react-redux';
import ModifyExecPage from './ModifyExecPage';
import { fetchMembers, fetchExec } from '../../../api/users';

const mapDispatchToProps = dispatch => ({
  fetchMembers: () => dispatch(fetchMembers()),
  fetchExec: () => dispatch(fetchExec()),
});

const mapStateToProps = state => ({
  members: state.users.members,
  isExecLoading: state.users.isExecLoading,
  execRoles: state.users.execRoles,
  isMembersLoading: state.users.isMembersLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyExecPage);