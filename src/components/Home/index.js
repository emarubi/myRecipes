import React from 'react';

import './home.scss';

const Home = () => (
  <div className="home">
    <div className="home__card">
      <img className="home__card__img" src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
      <div className="home__card__content">
        <h2 className="home__card__content__title">
          Crepe
        </h2>
        <span className="home__card__content__difficulty">
          Difficulté : Facile
        </span>
        <a className="home__card__content__link">Voir la recette</a>
      </div>
    </div>
  </div>
);

export default Home;
