import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'src/reducers';

import apiMiddleware from 'src/middlewares/api';
// import authMiddleware from 'src/middlewares/auth';

// on crée le store
const store = createStore(
  rootReducer,
  composeWithDevTools( // devtools
    // branchement de middleware
    applyMiddleware(apiMiddleware),
    // applyMiddleware(authMiddleware),
  ),
);

export default store;
