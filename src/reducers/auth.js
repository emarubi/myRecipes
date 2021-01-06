const initialState = {
  email: '',
  password: '',
  isLogged: false,
  loggedMessage: 'Connecté',
};

const reducer = (oldState = initialState, action) =>
  /* switch (action.type) {
    case 'GET_RECIPES_SUCCESS':
      return {
        ...oldState, // on copie l'ancien state
        list: action.list,
      };
    default: */
  ({ ...oldState })
  // }
;

export default reducer;
