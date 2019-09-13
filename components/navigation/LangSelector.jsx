/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { i18n, withNamespaces } from '../../i18n';
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


const changeLang = (currentLanguage, switchlanguage) => {
  if (currentLanguage !== switchlanguage) {
    i18n.changeLanguage(switchlanguage);
  }
};


const LangSelector = ({ white, lng }) => (
  <Flags white={white}>
    <img src={ru} alt="change language to Russian" onClick={() => changeLang(lng, 'ru')} />
    /
    <img src={en} alt="change language to English" onClick={() => changeLang(lng, 'en-gb')} />
  </Flags>

);

LangSelector.propTypes = {
  white: PropTypes.bool,
  lng: PropTypes.string,
};

LangSelector.defaultProps = {
  white: false,
  lng: 'ru',
};

export default withNamespaces('common')(LangSelector);
