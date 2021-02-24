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
  // dans ownProps, on a accès a toutes les props
  // y compris celles fournies par withRouter
  // ownProps.match.params.slug = la valeur du parametre "slug" dans l'url
  // ownProps = toutes les props que l'on récupère
  // toutes les props sauf celles que l'on fabrique dans mapStateToProps/mapDispatchToProps
  // ce qui veut dire, que on peut accéder aux props de withRouter avec ownProps
  recipe: getRecipeBySlug(state.recipes.list, ownProps.match.params.slug),
});

// grace au hoc connect, j'enrichis mon composant avec des props liées au state
const container = connect(mapStateToProps)(Recipe);

// grace au hoc withRouter, j'enrichis mon composant avec des props liées au router
const containerWithRouter = withRouter(container);
// HoC = couches d'oignons
// une couche withRouter... une couche connect... une couche présentation

// on exporte le tout
export default containerWithRouter;
