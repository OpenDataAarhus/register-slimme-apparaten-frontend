import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export const TextInput = (props) => {
  const { name, display, placeholder } = props;
  const render = ({ handler, touched, submitted, invalid, getError, hasError }) => (
    <div className={`rij mode_input text rij_verplicht ${(touched || submitted) && invalid ? 'row_ongeldig' : ''}`}>
      <div className="label">
        <label htmlFor={`form${name}`}>{display}</label>
      </div>

      { (touched || submitted) &&
        <div className="input-help">
          {((hasError('required') && 'Verplicht') ||
          (hasError('minLength') && `Minimaal ${getError('minLength').requiredLength} tekens`) ||
          (hasError('email') && 'Ongeldig e-mailadres'))}
        </div>
      }

      <div className="invoer">
        <input name="" id={`form${name}`} value="" className="input" type="text" {...handler()} placeholder={placeholder} />
      </div>
    </div>
  );

  render.defaultProps = {
    touched: false,
    placeholder: ''
  };

  render.propTypes = {
    handler: PropTypes.func.isRequired,
    touched: PropTypes.bool,
    submitted: PropTypes.bool,
    invalid: PropTypes.bool,
    getError: PropTypes.func,
    hasError: PropTypes.func
  };
  return render;
};

export default TextInput;
