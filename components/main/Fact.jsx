import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  height: 100%;
  img {
    width: 100%;
    margin-top: 6rem;
    @media (max-width: 415px) {
      margin: 0;
    }
  }
`;

const Fact = ({ phone }) => (
  <Styled>
    {!phone
    && <img src="/static/facts1.svg" alt="Facts about orphans in Russia" />
    }
    {phone
    && <img src="/static/facts1_mob.svg" alt="Facts about orphans in Russia" />
    }
  </Styled>
);

export default Fact;
