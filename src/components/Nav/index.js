import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { buildRecipeURL } from 'src/utils';

import './nav.scss';

// == Import

// == Composant
const Nav = ({ recipes }) => (
  <nav className="nav">
    <ul>
      <li>
        <NavLink
          activeClassName="nav__item--active"
          exact
          to="/"
          className="nav__item"
        >
          Accueil
        </NavLink>
      </li>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <NavLink
            exact
            activeClassName="nav__item--active"
            to={buildRecipeURL(recipe.title)}
            className="nav__item"
          >
            {recipe.title}
          </NavLink>
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
