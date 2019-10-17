import { connect } from 'react-redux';
import ModifyContentPage from './ModifyContentPage';
import { fetchPages } from '../../../api/pages';

const mapDispatchToProps = dispatch => ({
  fetchPages: () => dispatch(fetchPages()),
});

const mapStateToProps = state => ({
  pages: state.pages.pages,
  isPagesLoading: state.pages.isPagesLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyContentPage);