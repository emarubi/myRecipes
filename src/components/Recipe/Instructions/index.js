// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './instructions.scss';

// == Composant
const Instructions = ({ steps }) => (
  <section className="steps">
    {steps.map((step) => (
      <div key={step} className="steps__item">
        {step}
      </div>
    ))}
  </section>
);

Instructions.propTypes = { // je valide mes proptypes
  steps: PropTypes.arrayOf( // je veux un tableau...
    PropTypes.string.isRequired, // de strings (obligatoires)
  ).isRequired, // le tableau est aussi obligatoire...
};

// == Export
export default Instructions;
