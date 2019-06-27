import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withNamespaces } from '../../i18n';

const Links = styled.div`
  display: flex;

  ul {
    list-style: none;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      text-align: right;
      margin: 4rem 3rem 0 auto;
    }
    li {
      color: ${props => (props.white ? 'white' : 'black')};
      font-size: 1.6rem;
      text-transform: uppercase;
      display: inline-block;
      letter-spacing: 1px;
      margin-right: 4rem;
      font-family: 'PT Sans';
      @media (max-width: 768px) {
        color: #515052;
        margin: 0 0 2rem 0;
      }
    }
  }
`;


const Menu = ({ t, lng, white }) => (
  <Links className="menu" white={white}>
    <ul>
      <Link href={`/${lng}`}>
        <a>
          <li>{t('Stories')}</li>
        </a>
      </Link>
      <Link href="/help">
        <a>
          <li>{t('Help')}</li>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <li>{t('About')}</li>
        </a>
      </Link>
    </ul>
  </Links>
);

Menu.propTypes = {
  lng: PropTypes.string,
  t: PropTypes.func,
  white: PropTypes.bool,
};

Menu.defaultProps = {
  lng: 'ru',
  t: () => {},
  white: false,
};

export default withNamespaces('common')(Menu);
