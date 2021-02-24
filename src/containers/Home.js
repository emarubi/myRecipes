import { connect } from 'react-redux';
// on importe le composant de présentation
import Home from 'src/components/Home';

// stateToProps = données
const mapStateToProps = (state, ownProps) => ({
  // state = tout le state
  // state.recipes = tranche "recettes"
  // state.recipes.list = tableau dans la tranche recettes (initialState)
  // (cf initialState de src/reducers/recipes.js)
  recipes: ownProps.showFavorites // j'ai une prop showFavorites ?
    ? state.recipes.favorites // oui : je mets dans la prop recipes les favoris
    : state.recipes.list, // non : je met dans la prop recipes ttes les recettes
  isLogged: state.auth.logged,
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites: () => {
    dispatch({ type: 'GET_FAVORITES' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
