import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  // on crée un boolen qui vaut vrai si on a des recettes dans la liste
  hasData: state.recipes.list.length > 0,
});

const mapDispatchToProps = (dispatch) => ({
  loadRecipes: () => {
    dispatch({ type: 'GET_RECIPES' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
