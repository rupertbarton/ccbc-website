import { connect } from 'react-redux';
import ModifyContentPage from './ModifyContentPage';
import { fetchPages } from '../../../api/pages';
import { fetchExec } from '../../../api/users';
import { updatePageToEdit } from '../../../actions/pages';

const mapDispatchToProps = dispatch => ({
  fetchPages: () => dispatch(fetchPages()),
  fetchExec: () => dispatch(fetchExec()),
  updatePageToEdit: pageName => dispatch(updatePageToEdit(pageName))
});

const mapStateToProps = state => ({
  pages: state.pages.pages,
  selectedPage: state.pages.pageToEdit,
  isPagesLoading: state.pages.isPagesLoading,
  execRoles: state.users.execRoles,
  isExecLoading: state.users.isExecLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyContentPage);