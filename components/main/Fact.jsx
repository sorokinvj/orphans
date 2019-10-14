import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  img {
    width: 100%;
  }
`;

const Fact = () => (
  <Styled>
    <img src="/static/facts1.svg" alt="Facts about orphans in Russia" style={{ marginTop: '6rem' }} />
  </Styled>
);

export default Fact;
