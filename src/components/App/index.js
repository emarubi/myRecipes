// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// == Import
import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';

import './app.scss';

// == Composant
const App = ({ loadRecipes, hasData }) => {
  // useEffect : appelle une fonction au chargement du composant
  // car 2eme parametre = []
  useEffect(() => {
    // loadRecipes : une prop qui charge les recettes
    // cette fonction prop sera définie dans le container
    loadRecipes();
  }, []);

  return (
    <div className="app">
      <Nav />
      <Page>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/recipe/:slug">
          {hasData && <Recipe />}
        </Route>
      </Page>
    </div>
  );
};

App.propTypes = {
  hasData: PropTypes.bool.isRequired,
  loadRecipes: PropTypes.func.isRequired,
};

// == Export
export default App;
