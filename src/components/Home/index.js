import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import { getTitleByRecipesNumber } from 'src/utils';
import RecipeCard from './RecipeCard';

import './home.scss';

const Home = ({ isLogged, recipes, loadFavorites }) => {
  useEffect(() => {
    // lors du chargement du composant home...
    // je veux charger les recettes favorites
    if (isLogged) {
      loadFavorites();
    }
  }, [isLogged]); // si isLogged change, j'apelle ma fonction

  return (
    <>
      <Header title={getTitleByRecipesNumber(recipes.length)} />
      <div className="home">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            // on déverse toutes les clés de l'objet recipe
            // dans les props de RecipeCard !
            {...recipe}
          />
        ))}
      </div>
    </>
  );
};

Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  loadFavorites: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Home;
