import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import logoWhite from './logo.svg';
import logoBlack from './logoBlack.svg';
import { withNamespaces } from '../../i18n';

const LogoWrap = styled.div`
  display: flex;
`;

const Logo = ({ white, lng }) => (
  <LogoWrap>
    <Link href={`/${lng}`}>
      <a>
        {white
          ? <img src={logoWhite} alt="project logo" />
          : <img src={logoBlack} alt="project logo" />}
      </a>
    </Link>

  </LogoWrap>
);

Logo.propTypes = {
  white: PropTypes.bool,
  lng: PropTypes.string,
};

Logo.defaultProps = {
  white: false,
  lng: 'ru',
};

export default withNamespaces('common')(Logo);
