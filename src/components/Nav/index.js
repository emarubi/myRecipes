import React from 'react';

import './nav.scss';

// == Import

// == Composant
const Nav = () => (
  <nav className="nav">
    <ul>
      <li className="nav__item">Accueil</li>
      <li className="nav__item">Crepes</li>
      <li className="nav__item">Pizza</li>
    </ul>
  </nav>
);

// == Export
export default Nav;
