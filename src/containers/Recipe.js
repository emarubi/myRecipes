import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getRecipeBySlug } from 'src/utils';

import Recipe from 'src/components/Recipe';

// ownProps = toutes les props qui proviennent du JSX
// et non du container
const mapStateToProps = (state, ownProps) => ({
  // on récupère la recette selon le slug
  // state.recipes.list = tableau des recettes dans notre store
  // ownProps.match = prop fabriquée par withRouter
  recipe: getRecipeBySlug(state.recipes.list, ownProps.match.params.slug),
});

export default withRouter(connect(mapStateToProps)(Recipe));
