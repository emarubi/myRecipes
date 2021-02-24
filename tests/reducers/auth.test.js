import { expect } from 'chai';

import authReducer, { initialState } from 'src/reducers/auth';

// pour plus de commentaires, voir le fichier recipes.test.js qui est très simili

describe('reducer for auth', () => {
  describe('structure', () => {
    it('is a function', () => {
      expect(authReducer).to.be.a('function');
    });

    it('check initial state', () => {
    // on veut que initialState soit un objet
      expect(initialState).to.be.an('object');

      expect(authReducer()).to.be.eql(initialState);
    });
  });
  // ici on va tester que notre reducer réagit bien aux actions
  describe('actions redux', () => {
    it('should handle CHANGE_FIELD action', () => {
      // on veut tester que après un appel au reducer le state a bien changé
      // je commence par initialiser mon reducer (appel sans param)
      // pour avoir mon state de départ
      const firstState = authReducer();

      // je crée une action de test
      const changeFieldEmail = {
        type: 'CHANGE_AUTH_FIELD',
        name: 'email',
        value: 'toto@titi.fr',
      };

      const changeFieldPassword = {
        type: 'CHANGE_AUTH_FIELD',
        name: 'password',
        value: 'felix',
      };

      const stateAfterChangingEmail = authReducer(firstState, changeFieldEmail);
      // je veux tester qu'il y a bien une clé 'email'
      // et que cette clé contient 'toto@titi.fr'.
      expect(stateAfterChangingEmail).to.have.property('email', 'toto@titi.fr');

      const stateAfterChangingPassword = authReducer(firstState, changeFieldPassword);

      // je veux tester qu'il y a bien une clé 'password'
      // et que cette clé contient 'toto@titi.fr'.
      expect(stateAfterChangingPassword).to.have.property('password', 'felix');
    });

    it('should handle LOGIN_SUCCESS action', () => {
      // todo
    });

    it('should handle LOGOUT action', () => {
      // todo
    });
  });
});
