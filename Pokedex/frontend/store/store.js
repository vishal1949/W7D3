import logger from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';


const configureStore = () => (
  createStore(rootReducer, applyMiddleware(thunk, logger))
)
export default configureStore;