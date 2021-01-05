// == Import npm
import React from 'react';

// == Import
import Title from 'src/components/Title';
import Nav from 'src/components/Nav';
import Page from 'src/components/Page';
import Home from 'src/components/Home';

import data from 'src/data';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav recipes={data} />
    <Page>
      <Title title="Accueil" />
      <Home recipes={data} />
      {/* <Recipe recipe={data[1]} /> */}
    </Page>
  </div>
);

// == Export
export default App;
