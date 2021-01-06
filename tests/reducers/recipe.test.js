import { expect } from 'chai';

import recipesReducer, { initialState } from 'src/reducers/recipes';
import reducer from '../../src/reducers/recipes';

// via describe je décris un chapitre de tests
// permet de s'organiser
// on passe en arguments :
// - une chaine de caractère descriptive
// - une fonction anonyme contenant le contenu du chapitre
describe('reducer for recipes', () => {
  // on a le droit de faire des sous chapitres !
  // ici on va tester la structure du reducer
  describe('structure', () => {
    // it permet de décrire un test
    // arguments :
    // - nom du test
    // - fonction anonyme qui contiendra une assertion
    it('is a function', () => {
      // on fait une assertion avec chai
      // ici on regarde le type avec be.a('function')
      // a = vérifier un type
      expect(recipesReducer).to.be.a('function');
    });

    it('check initial state', () => {
      // on veut que initialState soit un objet
      expect(initialState).to.be.an('object');

      // on veut que au premier appel du reducer, le state par défaut soit copié
      // le premier appel du reducer = copie la valeur initiale (parametre par défaut)
      // donc je vérifie que le reducer prend bien sa valeur par défaut
      // eql = comparaison "deep" d'un objet
      // equal = comparaison basique d'une valeur (shallow)
      expect(recipesReducer()).to.be.eql(initialState);
    });
  });

  // ici on va tester que notre reducer réagit bien aux actions
  describe('actions redux', () => {
    it('should return a modified state when receiving GET_RECIPES_SUCCESS action', () => {
      const newRecipes = [
        {
          id: 1,
          name: 'fondue',
        },
        {
          id: 2,
          name: 'tataki',
        },
      ];
      // on crée une action qui sauvegarde des recettes
      const action = { type: 'GET_RECIPES_SUCCESS', list: newRecipes };
      // on appelle le reducer, et on stocke le résultat dans une variable
      const modifiedState = recipesReducer(initialState, action);
      // on va faire une assertion pour vérifier que le nouveau state
      // correspond bien à ce qui est attendu !
      // eql = vérification en profondeur de l'objet
      // notre nouveau state doit avoir les recettes dans la clé list.
      expect(modifiedState).to.be.eql({ list: newRecipes });
    });
  });
});
