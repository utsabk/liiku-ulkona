import { createStore, combineReducers, applyMiddleware } from 'redux';

import activityTypesReducer from './reducers/activityTypesReducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  activityTypesList: activityTypesReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
