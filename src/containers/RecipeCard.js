import { connect } from 'react-redux';

import RecipeCard from 'src/components/Home/RecipeCard';

const mapStateToProps = (state, ownProps) => {
  // on cherche si, dans le tableau de recettes favorites,
  // il y a une recette avec notre id
  // findIndex : on récupère la case du tableau et non pas son contenu
  const index = state.recipes.favorites.findIndex(
    (recipe) => recipe.id === ownProps.id,
  );

  // on crée une prop isFavorite qui vaudra true si la recette est favorie.
  // la prop isFavorite est une projection (= un selecteur) du state.
  return { // si index est !== -1 ----> ca veut dire que ca existe
    isFavorite: index !== -1,
  };
};

export default connect(mapStateToProps)(RecipeCard);
