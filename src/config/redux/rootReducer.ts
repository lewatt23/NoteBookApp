import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';

import {persistReducer} from 'redux-persist';
import appReducer from '../../screens/NoteBook/reducer';
import {AppActionTypes} from '../../screens/NoteBook/types';

const rootReducer = combineReducers({
  app: appReducer,
});

// Setup Persists
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['app'],
};

export type RootState = ReturnType<typeof rootReducer>;

export interface SelectorFn<V, A = undefined> {
  (state: RootState, args?: A): V;
}

export type RootActionTypes = AppActionTypes;

export const persistedReducer = persistReducer(persistConfig, rootReducer);
