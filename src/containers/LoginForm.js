import { connect } from 'react-redux';
// on importe le composant de présentation
import LoginForm from 'src/components/LoginForm';

// stateToProps = données
const mapStateToProps = (state) => ({
  // state = tout le state
  // state.recipes = tranche "recettes"
  // state.recipes.list = tableau dans la tranche recettes (initialState)
  recipes: state.recipes.list,
  email,
  password,
  isLogged,
  loggedMessage,
});

const mapDispatchToProps = (dispatch) => ({

  handleLogin: () => (dispatch) => ({
    dispatch({ type: 'LOGIN' });
  }),
  handleLogout: () => (dispatch) => ({
    dispatch({ type: 'LOGOUT' });
  }),
  changeField: () => (dispatch) => ({
    dispatch({ type: 'CHANGE_FIELD' });
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
