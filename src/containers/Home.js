import { connect } from 'react-redux';
// on importe le composant de présentation
import Home from 'src/components/Home';

// stateToProps = données
const mapStateToProps = (state) => ({
  // state = tout le state
  // state.recipes = tranche "recettes"
  // state.recipes.list = tableau dans la tranche recettes (initialState)
  recipes: state.recipes.list,
});

export default connect(mapStateToProps)(Home);
