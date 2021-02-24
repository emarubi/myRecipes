import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from 'src/containers/LoginForm';

import './header.scss';

const Header = ({ title }) => (
  <div className="main-header">
    <h1 className="main-header__title">
      {title}
    </h1>
    <LoginForm />
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
