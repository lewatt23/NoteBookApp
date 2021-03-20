import {applyMiddleware, createStore, Store} from 'redux';
import {Persistor, persistStore} from 'redux-persist';

import {epicMiddleware, rootEpic} from './rootEpic';
// rootReducer
import {persistedReducer, RootState} from './rootReducer';

const middlewares = [epicMiddleware];

// create store object
function configureStore(): {store: Store<RootState>; persistor: Persistor} {
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));

  const persistor = persistStore(store);

  epicMiddleware.run(rootEpic);

  return {persistor, store};
}

export default configureStore;
