import { connect } from 'react-redux';
// on importe le composant de présentation
import LoginForm from 'src/components/LoginForm';

import {
  login, logout, changeField, loginSuccess, loginError,
} from 'src/store/actions';

// stateToProps = données
const mapStateToProps = (state) => ({
  // state = tout le state
  // state.recipes = tranche "recettes"
  // state.recipes.list = tableau dans la tranche recettes (initialState)
  // recipes: state.recipes.list,
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
  loggedMessage: state.auth.loggedMessage,
  // hasError: state.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(name, value));
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
