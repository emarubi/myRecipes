import { connect } from 'react-redux';
// on importe le composant de présentation
import Nav from 'src/components/Nav';

// stateToProps = données
const mapStateToProps = (state) => ({
  // state = tout le state
  // state.recipes = tranche "recettes"
  // state.recipes.list = tableau dans la tranche recettes (initialState)
  // (cf initialState de src/reducers/recipes.js)
  recipes: state.recipes.list,
});

// appel a connect et export
export default connect(mapStateToProps)(Nav);
