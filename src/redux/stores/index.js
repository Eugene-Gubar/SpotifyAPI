import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


const middleware = [
  thunk,
  logger
];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, enhancer);

window.store = store;

export default store;