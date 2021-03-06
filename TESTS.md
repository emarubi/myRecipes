# Outils pour les tests

## Mocha - Test runner

https://mochajs.org/

- `describe` : permet de définir un chapitre
- `it` : permet de définir un test

## Chai - Outil pour faire l'assertion

https://www.chaijs.com/

- (`assert`), `should`, `expect` : permet d'affirmer quelque chose à vérifier

## Enzyme - Test de composants React

https://enzymejs.github.io/enzyme/

- `shallow` : permet de faire un pseudo rendu des composants pour les tester

## @babel/register

Permet d'utiliser la syntaxe d'import ES6 dans nos tests.

## ignore-styles

permet d'ignorer les styles des composants quand on les teste

Paquet à installer (déjà présent sur la branche full du modèle)
- `yarn add --dev @babel/register`
- `yarn add --dev chai mocha enzyme enzyme-adapter-react-16`
- `yarn add --dev ignore-styles`
