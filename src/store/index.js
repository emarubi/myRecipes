import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'src/reducers';

import apiMiddleware from 'src/middlewares/api';
import authMiddleware from 'src/middlewares/auth';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(apiMiddleware),
    applyMiddleware(authMiddleware),
  ),
);

export default store;
