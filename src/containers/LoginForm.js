import { connect } from 'react-redux';
// on importe le composant de présentation
import LoginForm from 'src/components/LoginForm';

// câblage des données
// stateToProps = données
const mapStateToProps = (state) => ({
  // je dois ajouter .auth après state pour aller dans le state de l'authentification
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.logged,
  loggedMessage: state.auth.logged && `Bienvenue ${state.auth.nickname}`,
  // hasError: state.loginError,
});

// câblage des actions
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    // action creator : on appele une fonction qui fabrique l'action
    // le retour de cette fonction, est donné a dispatch
    dispatch({
      type: 'CHANGE_AUTH_FIELD',
      name,
      value,
    });
  },

  handleLogin: () => {
    // ici, on va envoyer une action pour faire la requete LOGIN
    // cette action va être attrapée par le middleware
    // qui fera la requete
    dispatch({ type: 'LOGIN' });
  },
  handleLogout: () => {
    dispatch({ type: 'LOGOUT' });
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
