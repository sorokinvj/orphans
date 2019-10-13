import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';

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


const Menu = ({ lng, white }) => (
  <Links className="menu" white={white}>
    <ul>
      <Link href={`/${lng}#investigations`}>
        <a>
          <li><Trans>Расследования</Trans></li>
        </a>
      </Link>
      <Link href={`/${lng}#stories`}>
        <a>
          <li><Trans>Истории</Trans></li>
        </a>
      </Link>
      <Link href={`/${lng}/about`}>
        <a>
          <li><Trans>О проекте</Trans></li>
        </a>
      </Link>
    </ul>
  </Links>
);

Menu.propTypes = {
  lng: PropTypes.string,
  white: PropTypes.bool,
};

Menu.defaultProps = {
  lng: 'ru',
  t: () => {},
  white: false,
};

export default Menu;
