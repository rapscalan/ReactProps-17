import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text"
      name="0"
      onChange={onChange}
      placeholder="adjective" />
    <input type="text"
      name="1"
      onChange={onChange}
      placeholder="noun" />
    <input type="text"
      name="2"
      onChange={onChange}
      placeholder="verb, past tense" />
    <input type="text"
      name="3"
      onChange={onChange}
      placeholder="adverb" />
    <input type="text"
      name="4"
      onChange={onChange}
      placeholder="adjective" />
    <input type="text"
      name="5"
      onChange={onChange}
      placeholder="noun" />
    <input type="text"
      name="6"
      onChange={onChange}
      placeholder="noun" />
    <input type="text"
      name="7"
      onChange={onChange}
      placeholder="adjective" />
    <input type="text"
      name="8"
      onChange={onChange}
      placeholder="verb" />
    <input type="text"
      name="9"
      onChange={onChange}
      placeholder="adverb" />
    <input type="text"
      name="10"
      onChange={onChange}
      placeholder="verb, past tense" />
    <input type="text"
      name="11"
      onChange={onChange}
      placeholder="adjective" />
    <button>Create Madlib</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
