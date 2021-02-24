// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
// Composants
import MainHeader from 'src/components/Header';
import RecipeHeader from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './styles.scss';

// == Composant
function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <MainHeader title={recipe.title} />
      <div className="recipe__content">
        <RecipeHeader
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients
          list={recipe.ingredients}
        />
        <Instructions
          steps={recipe.instructions}
        />
      </div>
    </div>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    instructions: PropTypes.array.isRequired,
  }).isRequired,
};

// == Export
export default Recipe;
