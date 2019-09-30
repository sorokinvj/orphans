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
  background: 'rgb(255, 255, 255)',
  width: 'auto',
  height: '100%',
  margin: '7rem 0 0 auto',
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
  border-bottom: ${props => (props.border ? '1px solid black' : 'none')};

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

const Nav = ({ router }) => (
  <Navbar border={router.route !== '/'}>
    <Container>
      <Logo white={router.route === '/'} />
      <Menu white={router.route === '/'} />
      <LangSelector white={router.route === '/'} />
    </Container>

    {/* burger button and mobile menu */}
    <Popup
      modal
      closeOnDocumentClick
      contentStyle={contentStyle}
      trigger={open => <div><Burger open={open} /></div>}
    >
      {close => <Menu close={close} />}
    </Popup>
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
