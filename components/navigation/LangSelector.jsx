import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { i18n } from '../../i18n';
import ru from './ru.svg';
import en from './en.svg';

const Flags = styled.div`
    color: ${props => (props.white ? 'white' : 'black')};
    font-weight: bold;
    font-size: 2rem;
    margin: 0.3rem 0rem 0 0;
    img {
      width: 2.5rem;
      margin: 0 1rem;
      cursor: pointer;
    }
`;

const LangSelector = ({ white }) => (
  <Flags white={white}>
    <img src={ru} alt="change language to Russian" onClick={() => i18n.changeLanguage('ru')} />
    /
    <img src={en} alt="change language to English" onClick={() => i18n.changeLanguage('en')} />
  </Flags>
);

LangSelector.propTypes = {
  white: PropTypes.bool,
};

LangSelector.defaultProps = {
  white: false,
};

export default LangSelector;
