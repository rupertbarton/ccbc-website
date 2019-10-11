import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, null)(Header);