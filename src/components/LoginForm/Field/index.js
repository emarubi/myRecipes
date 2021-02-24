// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.scss';

// fonction onChange ->
// appelle une fonction du composant : "handleChange" -> appelle la prop onChange du composant Field avec 2 parametres :
//     -> name = quel champ on modifie (autre prop de Field cf fichier LoginForm ln 43 et 49)
//     -> event.target.value : ce qui a été saisi par l'utilisateur

// Dans LoginForm, on donne comme prop 'onChange' à Field la prop changeField... de LoginForm.

// Ca veut dire que LoginForm prend une prop pour gérer un changement d'input.
// Cette fonction est "descendue" jusqu'à Field, qui l'appelera au moment opportun.

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
