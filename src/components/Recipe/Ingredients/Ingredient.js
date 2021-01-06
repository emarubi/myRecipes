// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Ingredient = ({
  id, quantity, unit, name,
}) => (
  <div key={id} className="ingredients__item">
    <span className="ingredients__item__quantity">
      {`${quantity} ${unit}`}
    </span>
    <span className="ingredients__item__name">
      {name}
    </span>
  </div>
);

// == Validation de props
Ingredient.propTypes = { // mes props sont de type...
  id: PropTypes.number.isRequired, // un id
  quantity: PropTypes.oneOfType([ // on autorise des quantités
    PropTypes.number.isRequired, // en nombre
    PropTypes.string.isRequired, // ou en texte
  ]).isRequired,
  unit: PropTypes.string.isRequired, // une unité
  name: PropTypes.string.isRequired, // un nom
};

// == Export
export default Ingredient;
