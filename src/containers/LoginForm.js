import { connect } from 'react-redux';
// on importe le composant de présentation
import LoginForm from 'src/components/LoginForm';

import {
  login, logout, changeField, loginSuccess, loginError,
} from 'src/store/actions';

// stateToProps = données
const mapStateToProps = (state) => ({
  // je dois ajouter .auth après state pour aller dans le state de l'authentification
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.logged,
  loggedMessage: state.auth.loggedMessage,
  // hasError: state.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },

  handleLogin: () => {
    dispatch(login());
    // dispatch(loginSuccess());
    // dispatch(loginError());
  },
  handleLogout: () => {
    dispatch(logout());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
