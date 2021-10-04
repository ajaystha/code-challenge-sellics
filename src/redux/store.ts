import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { PhotoReducer } from './reducers/photoReducer';

const store: Store = createStore(
  PhotoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
