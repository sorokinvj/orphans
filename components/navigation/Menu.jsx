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
      color: white;
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


const Menu = ({ t, lng }) => (
  <Links className="menu">
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

export default withNamespaces('common')(Menu);
