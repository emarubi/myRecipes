// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import du composant Ingredient (fils qui sera répété)
import Ingredient from './Ingredient';

// == Import SCSS
import './ingredients.scss';

// == Composant
const Ingredients = ({ list }) => (
  <section className="ingredients">
    {list.map((ingredient) => (
    // c'est comme si on avait écrit
    //  <Ingredient name={ingredient.name}
    //  quantity={ingredient.quantity} etc... />
      <Ingredient key={ingredient.name} {...ingredient} />
    ))}
  </section>
);

// == Validation de props
Ingredients.propTypes = { // mes props sont de type...
  list: PropTypes.arrayOf( // je veux un tableau
    PropTypes.shape({ // dans ce tableau, il ya des objets qui contiennent :
      id: PropTypes.number.isRequired, // un id
      quantity: PropTypes.oneOfType([ // on autorise des quantités
        PropTypes.number.isRequired, // en nombre
        PropTypes.string.isRequired, // ou en texte
      ]).isRequired,
      unit: PropTypes.string.isRequired, // une unité
      name: PropTypes.string.isRequired, // un nom
    }),
  ).isRequired, // le tableau est obligatoire !
};

// == Export
export default Ingredients;
