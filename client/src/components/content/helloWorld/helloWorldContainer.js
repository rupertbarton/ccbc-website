
import { connect } from 'react-redux';
import HelloWorld from './HelloWorld';
import { helloWorld } from '../../../actions/helloWorld';

const mapStateToProps = state => ({
  hello: state.helloWorld.hello
});

const mapDispatchToProps = dispatch => ({
  helloWorld: () => dispatch(helloWorld())
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);