import { connect } from 'react-redux';
import App from './App';
import { updateCurrentUser } from '../../actions/auth';

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: user => dispatch(updateCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);