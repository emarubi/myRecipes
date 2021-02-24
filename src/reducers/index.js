import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import authReducer from './auth';

// combineReducers : on lui donne un objet
// en clé : le nom de la "tranche" de state
// en valeur : le reducer
// on peut utiliser la shorthand property
// shorthand : si clé = valeur, on écrit juste une fois
export default combineReducers({
  recipes: recipesReducer,
  auth: authReducer,
});
