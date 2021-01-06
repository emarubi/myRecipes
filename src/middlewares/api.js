import axios from 'axios';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GET_RECIPES':
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          // on envoie une action pour sauvegarder les recettes
          // avec un second paramètre qui contient la réponse
          store.dispatch({ type: 'GET_RECIPES_SUCCESS', list: response.data });
        });
      break;
    default:
      next(action);
  }
};

export default api;
