import React from 'react';
import styled from 'styled-components';
import ru from './ru.svg';
import en from './en.svg';

const Flags = styled.div`
    color: white;
    font-weight: bold;
    font-size: 2rem;
    margin: 0.3rem 0rem 0 0;
    img {
      width: 2.5rem;
      margin: 0 1rem;
    }
`;

const LangSelector = () => (
  <Flags>
    <img src={ru} />
        /
    <img src={en} />
  </Flags>
);

export default LangSelector;
