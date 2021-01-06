// state initial du morceau "recettes" de notre store
export const initialState = {
  list: [],
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_RECIPES_SUCCESS':
      return {
        ...oldState, // on copie l'ancien state
        list: action.list,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
