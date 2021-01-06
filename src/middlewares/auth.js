import axios from 'axios';

import {
  LOGIN, loginSuccess, loginError,
} from 'src/store/actions';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === LOGIN) {
    // on récupère email et mdp depuis le store
    const { email, password } = store.getState();
    // on crée un objet config pour faire notre requete
    const config = {
      method: 'post', // on veut faire un post
      url: 'http://localhost:3001/login', // ici on a l'adresse
      // headers: { // header qui dit qu'on envoie et recoit du json
      //   'Content-Type': 'application/json',
      // },
      data: { // nos données
        email,
        password,
      },
    };

    axios(config) // on appelle axios avec cet objet de config
      .then((response) => { // then = cas de réussite
        console.log(response.data);
        // const nickname = response.data.pseudo;
        // une action pour sauvegarder notre pseudo...
        store.dispatch(loginSuccess());
      })
      .catch(() => { // catch : cas d'erreur
        store.dispatch(loginError());
      });
    next(action);
  }
  next(action);
};

export default authMiddleware;
