import rootReducer from '../reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [thunk];

export default initialState => {
  if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware, logger)));
  }
  else {
    return createStore(rootReducer, initialState, applyMiddleware(...middleware));
  }
};