import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import LanguageContext from '../context/LanguageContext';
import logoWhite from './logo.svg';
import logoBlack from './logoBlack.svg';

const LogoWrap = styled.div`
  display: flex;
  @media (max-width: 415px)  {
    padding-top: 4px;
  }
  img  {
    width: 25rem;
    @media (max-width: 415px)  {
      width: 19rem;
    }
    @media (max-width: 320px)  {
      width: 16rem;
    }
  }
`;

const Logo = ({ white }) => {
  const language = useContext(LanguageContext);
  return (
    <LogoWrap>
      <Link href={`/${language}`}>
        <a>
          {white
            ? <img src={logoWhite} alt="project logo" />
            : <img src={logoBlack} alt="project logo" />}
        </a>
      </Link>

    </LogoWrap>
  );
};

Logo.propTypes = {
  white: PropTypes.bool,
};

Logo.defaultProps = {
  white: false,
};

export default Logo;
