import { CHANGE_AUTH_FIELD, LOGIN_SUCCESS, LOGOUT } from 'src/store/actions';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
  nickname: null,
  token: null,
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_AUTH_FIELD:
      // action.name = le champ (email ou password)
      // action.value = la saisie utilisateur
      return { // on fait un nouvel objet
        ...oldState, // on copie l'ancien state
        [action.name]: action.value, // on met dans la clé name le paramètre value de notre action
      };
    case LOGIN_SUCCESS:
      return {
        ...oldState,
        // on copie les données de l'action dans le reducer
        logged: action.logged,
        token: action.token,
        nickname: action.pseudo,
      };
    case LOGOUT:
      return {
        ...oldState,
        email: '',
        password: '',
        logged: false,
        nickname: null,
        token: null,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
