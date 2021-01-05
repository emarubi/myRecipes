// == Import npm
import React from 'react';

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
    <Nav />
    <Page>
      <Title />
      <Home />
      {/* <Recipe recipe={data[1]} /> */}
    </Page>
  </div>
);

// == Export
export default App;
