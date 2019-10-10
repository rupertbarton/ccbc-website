
import { connect } from 'react-redux';
import Header from './Header';
import { facebookLogin, logout } from '../../api/auth'

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(facebookLogin()),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);