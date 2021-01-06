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
  loggedMessage: 'Connecté',
};

function reducer(oldState = initialState, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      return { // on fait un nouvel objet
        ...oldState, // on copie l'ancien state
        [action.field]: action.text, // on met dans inputValue le parametre text de notre action
      };
    case LOGIN:
      return {
        ...oldState, // on copie l'ancien state
      };
    case LOGIN_SUCCESS:
      return {
        ...oldState,
        emailValue: '',
        passwordValue: '',
        isLogged: true,
      };
    case LOGIN_ERROR:
      return {
        ...oldState,
        isLogged: false,
      };
    case LOGOUT:
      return {
        ...oldState,
        emailValue: '',
        passwordValue: '',
        isLogged: false,
      };
    default:
      return { ...oldState };
  }
}

export default reducer;
