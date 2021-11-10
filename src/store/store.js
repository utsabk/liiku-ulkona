import { createStore, combineReducers, applyMiddleware } from 'redux';

import activityReducer from './reducers/activityReducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  activity: activityReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
