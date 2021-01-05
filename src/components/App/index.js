// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import
import Title from 'src/components/Title';
import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';

import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Page>
      <Route exact path="/">
        <Title title="Accueil" />
        <Home />
      </Route>
      <Route exact path="/recipe/:slug">
        <Title title="Accueil" />
        <Recipe />
      </Route>
    </Page>
  </div>
);

// == Export
export default App;
