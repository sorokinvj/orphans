import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from '@bootstrap-styled/v4';
import Popup from 'reactjs-popup';
import Logo from './Logo';
import Burger from './Burger';
import Menu from './Menu';
import LangSelector from './LangSelector';

const contentStyle = {
  position: 'relative',
  background: 'rgb(255, 255, 255)',
  width: 'auto',
  height: '100%',
  margin: '7rem 0 0 auto',
  border: '0',
  padding: '0',
};

const Navbar = styled.nav`
  height: 7rem;
  background: #0D2C54;
  display: flex;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width:768px) {
      .menu {
        display: none;
      }
    }
  }
  // стили для мобильного меню
  .popup-overlay {
    height: 50vh;
  }
`;

const Nav = () => (
  <Navbar>
    <Container>
      <Logo />
      <Menu />
      <LangSelector />
    </Container>

    {/* burger button and mobile menu*/}
    <Popup
      modal
      closeOnDocumentClick
      contentStyle={contentStyle}
      trigger={open => <Burger open={open} />}
      position="top left"
    >
      {close => <Menu close={close} />}
    </Popup>
  </Navbar>

);

Nav.propTypes = {

};

export default Nav;
