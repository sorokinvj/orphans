import React from 'react';
import styled from 'styled-components';

const BurgerButton = styled.div`
    .burger-menu,
    .burger-menu.open {
    display: inline-block;
    cursor: pointer;
    position: fixed;
    right: 20px;
    bottom: 40px;
    z-index: 9999;
    background: #fff;
    padding: 10px;
    border-radius: 25px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }

    .burger-menu .bar1,
    .bar2,
    .bar3 {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 4px 0;
    transition: 0.4s;
    }

    .burger-menu.open .bar1 {
    -webkit-transform: rotate(-45deg) translate(-4px, 4px);
    transform: rotate(-45deg) translate(-4px, 4px);
    }

    .burger-menu.open .bar2 {
    opacity: 0;
    }

    .burger-menu.open .bar3 {
    -webkit-transform: rotate(45deg) translate(-6px, -6px);
    transform: rotate(45deg) translate(-6px, -6px);
}`;

export default ({ open, ...props }) => (
  <BurgerButton>
    <div className={open ? 'burger-menu open' : 'burger-menu'} {...props}>
      <div className="bar1" key="b1" />
      <div className="bar2" key="b2" />
      <div className="bar3" key="b3" />
    </div>
  </BurgerButton>
);
