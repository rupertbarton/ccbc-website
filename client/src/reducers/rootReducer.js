import { combineReducers } from 'redux';
import helloWorld from './helloWorld'


const allReducers = combineReducers({
  helloWorld
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }
  return allReducers(state, action);
};

export default rootReducer;