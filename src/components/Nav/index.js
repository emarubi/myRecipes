import React from 'react';
import PropTypes from 'prop-types';

import './nav.scss';

// == Import

// == Composant
const Nav = ({ recipes }) => (
  <nav className="nav">
    <ul>
      <li
        className="nav__item nav__item--active"
      >
        Accueil
      </li>
      {recipes.map((recipe) => (
        <li
          key={recipe.id}
          className="nav__item"
        >
          {recipe.title}
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Nav;
