import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'next/router';

import { Container } from '@bootstrap-styled/v4';
import Popup from 'reactjs-popup';
import Logo from './Logo';
import Burger from './Burger';
import Menu from './Menu';
import LangSelector from './LangSelector';

const contentStyle = {
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.3)',
  width: '100%',
  height: '100%',
  margin: '0',
  border: '0',
  padding: '0',
};

const Navbar = styled.nav`
  height: 7rem;
  background: transparent;
  display: flex;
  z-index: 1;
  position: absolute;
  top: 0;
  width: 100%;
  border-bottom: ${props => (props.border ? '1px solid rgba(0,0,0,0.13)' : 'none')};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width:991px) {
    .container > .menu {
      display: none;
    }
  }
  // стили для мобильного меню
  .popup-overlay {
    height: 50vh;
  }
`;

const Nav = ({ router }) => (

  <Navbar border={router.route !== '/' || router.route === '/about'}>
    <Container>
      <Logo white={router.route === '/' || router.route === '/about'} />
      <Menu />
      {/* убрал переключатель языка до появления переводов */}
      {/* <LangSelector white={router.route === '/' || router.route === '/about'} /> */}
      {/* burger button and mobile menu */}
      <Popup
        modal
        closeOnDocumentClick
        contentStyle={contentStyle}
        trigger={open => <Burger open={open} />}
      >
        {close => <Menu close={close} />}
      </Popup>
    </Container>

  </Navbar>

);

Nav.propTypes = {
  router: PropTypes.shape({
    route: PropTypes.string,
  }),
};

Nav.defaultProps = {
  router: {
    route: '/',
  },
};

export default withRouter(Nav);
