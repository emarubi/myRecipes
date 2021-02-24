// On va dans le composant Home, on récupère les favoris de l'utilisateur.
// Ces favoris sont stockés dans un second tableau du slice recipes.
// Une projection dans le mapStateToProps du composant RecipeCard nous permet de calculer un boolen isFavorite selon
// la présence ou non de la recette dans les favoris (find sur son id)
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { buildRecipeURL } from 'src/utils';

const RecipeCard = ({
  title, thumbnail, difficulty, isFavorite,
}) => (
  <div className="home__card">
    <img className="home__card__img" alt={title} src={thumbnail} />
    <div className="home__card__content">
      <h2 className="home__card__content__title">
        {title}
        {isFavorite && ' ⭐'}
      </h2>
      <span className="home__card__content__difficulty">
        Difficulté : {difficulty}
      </span>
      <Link
        to={buildRecipeURL(title)}
        className="home__card__content__link"
      >
        Voir la recette
      </Link>
    </div>
  </div>
);

RecipeCard.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default RecipeCard;
