import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Error = styled.p`
    color: #f74b01;;
    font-size: 1.6rem;
    font-style: italic;
`;

const FormError = ({ text }) => (
  <Error>
    {text}
  </Error>
);

FormError.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FormError;
