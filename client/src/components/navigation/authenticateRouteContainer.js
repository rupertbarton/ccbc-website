import { connect } from 'react-redux';
import AuthenticateRoute from './AuthenticateRoute';

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, null)(AuthenticateRoute);