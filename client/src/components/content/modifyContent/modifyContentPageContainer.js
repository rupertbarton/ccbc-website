import { connect } from 'react-redux';
import ModifyContentPage from './ModifyContentPage';
import { fetchPages } from '../../../api/pages';
import { fetchExec } from '../../../api/users';


const mapDispatchToProps = dispatch => ({
  fetchPages: () => dispatch(fetchPages()),
  fetchExec: () => dispatch(fetchExec()),
});

const mapStateToProps = state => ({
  pages: state.pages.pages,
  isPagesLoading: state.pages.isPagesLoading,
  execRoles: state.users.execRoles,
  isExecLoading: state.users.isExecLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyContentPage);