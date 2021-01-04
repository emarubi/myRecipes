// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS

import './header.scss';

const Header = ({
  name, thumbnail, difficulty, author,
}) => (
  <header className="header">
    <img
      className="header__image"
      alt="Photodescrêpes"
      src={thumbnail}
    />
    <div className="header__content">
      <h1 className="header__content__title">
        {name}
      </h1>
      <p className="header__content__desc">
        {author} - {difficulty}
      </p>
    </div>
  </header>
);

// == Validation des props
Header.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

// == Export
export default Header;
