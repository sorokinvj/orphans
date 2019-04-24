import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const LogoWrap = styled.div`
  display: flex;
`;
const Logo = () => (
  <LogoWrap>
      <img src={logo} alt="project logo" />
  </LogoWrap>
);

export default Logo;
