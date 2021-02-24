// state initial du morceau "recettes" de notre store
export const initialState = {
  list: [], // toutes les recettes
  favorites: [], // recettes favories d'un utilisateur loggué
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_RECIPES_SUCCESS':
      return {
        ...oldState, // on copie l'ancien state
        list: action.list, // on sauvegarde les recettes qui sont dans l'action
      };
    case 'GET_FAVORITES_SUCCESS':
      return {
        ...oldState,
        favorites: action.list, // je copie les favoris dans mon state
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
