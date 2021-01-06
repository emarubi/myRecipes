import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { buildRecipeURL, getTitleByRecipesNumber } from 'src/utils';
import './home.scss';
import Title from 'src/components/Title';
import LoginForm from 'src/containers/LoginForm';

const Home = ({ recipes }) => (
  <>
    <header className="home__header">
      <Title title={getTitleByRecipesNumber(recipes.length)} />
      <LoginForm />
    </header>
    <div className="home">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="home__card">
          <img className="home__card__img" alt={recipe.name} src={recipe.thumbnail} />
          <div className="home__card__content">
            <h2 className="home__card__content__title">
              {recipe.title}
            </h2>
            <span className="home__card__content__difficulty">
              Difficulté : {recipe.difficulty}
            </span>
            <Link
              to={buildRecipeURL(recipe.title)}
              className="home__card__content__link"
            >
              Voir la recette
            </Link>
          </div>
        </div>
      ))}
    </div>
  </>
);

Home.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      ingredients: PropTypes.array.isRequired,
      instructions: PropTypes.array.isRequired,
    }),
  ).isRequired,
};

export default Home;
