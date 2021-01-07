import {
  CHANGE_FIELD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from 'src/store/actions';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
  // loggedMessage: 'Connecté',
  nickname: null,
  token: null,
};

function reducer(oldState = initialState, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      // action.name = le champ (email ou password)
      // action.value = la saisie utilisateur
      return { // on fait un nouvel objet
        ...oldState, // on copie l'ancien state
        [action.name]: action.value, // on met dans la clé name le parametre value de notre action
      };
    // case LOGIN:
    //   return {
    //     ...oldState, // on copie l'ancien state
    //   };
    case LOGIN_SUCCESS:
      return {
        ...oldState,
        // on copie les données de l'action dans le reducer
        logged: action.logged,
        token: action.token,
        nickname: action.pseudo,
      };
    case LOGIN_ERROR:
      return {
        ...oldState,
        isLogged: false,
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
}

export default reducer;
