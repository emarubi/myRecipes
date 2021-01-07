import axios from 'axios';

import {
  loginSuccess, loginError,
} from 'src/store/actions';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GET_RECIPES':
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          // on envoie une action pour sauvegarder les recettes
          // avec un second paramètre qui contient la réponse
          store.dispatch({ type: 'GET_RECIPES_SUCCESS', list: response.data });
        });
      break;
    case 'LOGIN': {
      // ici, on va faire la requete pour le login
      // on commence par récupérer email et password
      // Double destructuration !
      const { auth: { email, password } } = store.getState();
      // on crée un objet config pour faire notre requete
      const config = {
        method: 'post', // on veut faire un post
        url: 'http://localhost:3001/login', // ici on a l'adresse
        headers: { // header qui dit qu'on envoie et recoit du json
          'Content-Type': 'application/json',
        },
        data: { // nos données
          email,
          password,
        },
      };

      axios(config) // on lance la requete...
        .then((response) => { // cas de réussite
          console.log('Je suis dans la réponse, et response.data vaut : ', response.data);
          // const nickname = response.data.pseudo;
          // une action pour sauvegarder notre pseudo...
          store.dispatch({
            type: 'LOGIN_SUCCESS',
            // on déverse tout le contenu de response.data dans notre action
            ...response.data,
          });
        })
        .catch((error) => { // cas d'erreur
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default api;
