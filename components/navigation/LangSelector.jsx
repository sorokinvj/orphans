/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SetLanguageContext from '../context/SetLanguageContext';
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
    @media (max-width: 415px)  {
      margin: 0;
      font-size: 1.3rem;
      img {
        width:1.8rem;
      }
    }
`;

const LangSelector = ({ white }) => {
  const dispatch = useContext(SetLanguageContext);
  // const language = useContext(LanguageContext);
  // console.log('language from state', language)

  function switchLang(data) {
    // console.log('...Switching Lang to - ', data.value);
    dispatch({ type: 'switchLang', payload: data.value });
  }
  return (
    <Flags white={white}>
      <img src={ru} alt="change language to Russian" onClick={() => switchLang({ value: 'ru' })} />
    /
      <img src={en} alt="change language to English" onClick={() => switchLang({ value: 'en-gb' })} />
    </Flags>
  );
};

LangSelector.propTypes = {
  white: PropTypes.bool,
};

LangSelector.defaultProps = {
  white: false,
};

export default LangSelector;
