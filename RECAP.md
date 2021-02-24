# Crêpes

## combineReducers

CombineReducer permet de combiner plusieurs reducers en un seul.
Chaque reducer est responsable d'une **partie du state**. On appelera ces parties tranches, en anglais **slice**.

### Exemple state licornes

State sans combineReducer : 

```js
{
  tableauNourriture: [],
  tableauEnclos: [],
  tableauLicornes: [],
  email: 'noe@noe.io',
  mdp: 'toto',
  token: 'AXAZDAZ',
} 
```

State avec combineReducer : 

```js
{
  nourriture: {
    tableauNourriture: [],
  },
  enclos: {
    tableauEnclos: [],
  },
  licornes: {
    tableauLicornes: [],
  },
  login: {
    email: 'noe@noe.io',
    mdp: 'toto',
    token: 'AXAZDAZ',
  }
}
```

### Comment ca marche ?

- On envoie nos actions comme d'habitude, avec `dispatch`
  - ** l'action n'a pas connaissance de quel reducer elle impacte **
  - toutes les actions passeront dans tous les reducers !
- par contre, chaque reducer ne sera capable de modifier que la tranche de state qui lui est propre.

### Comment ca s'écrit ?

Voir le fichier `src/reducers/index.js` et le fichier `src/store/index.js`.

## withRouter

withRouter prend un composant (connecté ou pas) en paramètre.
Il renvoie le même composant, mais augmenté de props concernant la navigation.
Il va ajouter les props suivantes : 

- history : permet de manipuler l'historique
  - history.back() --> précédent
  - history.push() -> ajouter un elelment dans l'historique et s'y rendre
  - history.replace() -> changer ou on est sans impacter l'historique
- match : contenir des infos décrivant l'url courante
  - match.params -> parametre de requete.

## Démystifications des routes

- Les routes back renvoient (ou sauvegardent) différentes données selon une URL.
- Les routes front affichent différents composants selon une URL.
- C'est au développeur d'appeler la bonne route du back suivant la route du front.
  - une route front peut appeler 10 routes back !
  - une route front peut appeler 0 route back.
- **Il n'y a pas d'autre lien ou comparaison a chercher**