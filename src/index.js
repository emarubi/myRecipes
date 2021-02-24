// == Import : npm
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';


import store from 'src/store';

// == Import : local
// Composants
import App from 'src/containers/App';

// == Render
// On englobe notre composant App
// dans le Provider (redux)
// et dans le BrowserRouter (react-router)
// ce pattern s'apelle HoC
// Higher-order Component
// = composant de plus haut niveau
const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
