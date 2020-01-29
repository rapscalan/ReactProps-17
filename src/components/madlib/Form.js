import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text"
      name="one"
      onChange={onChange}
      placeholder="adjective" />
    <input type="text"
      name="two"
      onChange={onChange}
      placeholder="noun" />
    <input type="text"
      name="three"
      onChange={onChange}
      placeholder="verb, past tense" />
    <input type="text"
      name="four"
      onChange={onChange}
      placeholder="adverb" />
    <input type="text"
      name="five"
      onChange={onChange}
      placeholder="adjective" />
    <input type="text"
      name="five"
      onChange={onChange}
      placeholder="noun" />
    <input type="text"
      name="six"
      onChange={onChange}
      placeholder="noun" />
    <input type="text"
      name="seven"
      onChange={onChange}
      placeholder="adjective" />
    <input type="text"
      name="eight"
      onChange={onChange}
      placeholder="verb" />
    <input type="text"
      name="eight"
      onChange={onChange}
      placeholder="adverb" />
    <input type="text"
      name="nine"
      onChange={onChange}
      placeholder="verb, past tense" />
    <input type="text"
      name="ten"
      onChange={onChange}
      placeholder="adjective" />
    <button>Create Madlib</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
