import * as actions from '../actions/helloWorld';

const INITIAL_STATE = {
  hello: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.HELLO_WORLD:
      return {
        ...state,
        hello: "World"
      };

      default:
        return state;
      }
    }