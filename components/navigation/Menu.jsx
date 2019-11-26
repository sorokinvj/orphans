import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';
import { withRouter } from 'next/router';

const Links = styled.div`

  display: flex;
  width: 100%;
  height: 100%;

  ul {
    list-style: none;
    margin: 2.5rem auto 0 auto;
    @media (max-width: 991px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 11rem auto 0 auto;
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
        margin: 0 0 2rem 0;
      }
    }
  }
`;


const Menu = ({ lng, router }) => (
  <Links className="menu" white={(router.route === '/') || (router.route === '/about')}>
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
};

export default withRouter(Menu);
