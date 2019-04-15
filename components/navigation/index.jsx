import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import Logo from './Logo';
import Burger from './Burger';
import Menu from './Menu';
// import LangSelector from './LangSelector';

// const Navbar = styled.nav`

// `;

const contentStyle = {
  background: 'rgba(255,255,255,0)',
  width: '80%',
  border: 'none',
};

const Nav = () => (
  <Popup
    modal
    overlayStyle={{ background: 'rgba(255,255,255,0.98' }}
    contentStyle={contentStyle}
    closeOnDocumentClick={false}
    trigger={open => <Burger open={open} />}
  >
    {close => <Menu close={close} />}
  </Popup>
);

Nav.propTypes = {

};

export default Nav;
