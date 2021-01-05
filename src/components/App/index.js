// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import
import Title from 'src/components/Title';
import Nav from 'src/components/Nav';
import Page from 'src/components/Page';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';

import data from 'src/data';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav recipes={data} />
    <Page>
      <Route exact path="/">
        <Title title="Accueil" />
        <Home recipes={data} />
      </Route>
      <Route exact path="/recipe/:id">
        <Title title="Accueil" />
        <Recipe recipe={data[1]} />
      </Route>
    </Page>
  </div>
);

// == Export
export default App;
