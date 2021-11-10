import { createStore, combineReducers, applyMiddleware } from 'redux';

import activityReducer from './reducers/activityReducer';
import userLocationReducer from './reducers/useLocationReducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  activity: activityReducer,
  location: userLocationReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
