import { createStore, combineReducers, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import activityReducer from './reducers/activityReducer';
import userReducer from './reducers/userReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favourites', 'points', 'userData'],
};

const rootReducer = combineReducers({
  activity: persistReducer(persistConfig, activityReducer),
  user: persistReducer(persistConfig, userReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
