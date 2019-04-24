import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
      font-size: 1.8rem;
      text-transform: uppercase;
      display: inline-block;
      font-weight: bold;
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


const Menu = ({ close }) => (
  <Links className="menu">
    <ul>
      <Link>
        <a>
          <li>Истории</li>
        </a>
      </Link>
      <Link>
        <a>
          <li>Горячая линия</li>
        </a>
      </Link>
      <Link>
        <a>
          <li>О проекте</li>
        </a>
      </Link>
    </ul>
  </Links>
);

export default Menu;
