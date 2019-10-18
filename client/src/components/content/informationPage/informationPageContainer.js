import { connect } from 'react-redux';
import InformationPage from './InformationPage';
import { fetchPage } from '../../../api/pages';
import { fetchExec } from '../../../api/users';


const mapDispatchToProps = dispatch => ({
  fetchPage: (pageName) => dispatch(fetchPage(pageName)),
  fetchExec: () => dispatch(fetchExec()),
});

const mapStateToProps = state => ({
  pages: state.pages.pages,
  isPagesLoading: state.pages.isPagesLoading,
  execRoles: state.users.execRoles,
  isExecLoading: state.users.isExecLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(InformationPage);