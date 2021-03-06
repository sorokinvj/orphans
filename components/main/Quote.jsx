import React from 'react';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;

  .quote {
    text-align: right;
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-family: 'PT Sans';
    font-weight: bold;

    @media (max-width: 415px) {
      text-align: center;
    }

  }



  .author {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 415px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 15rem;
      border-radius: 50%;
      margin-top: 2rem;
      @media (max-width: 415px) {
        order: 1;
        margin-top: 5rem;
      }
    }

    .name {
      font-family: 'PT Sans';
      font-style: normal;
      font-size: 1.6rem;
      line-height: 2.1rem;
      margin-right: 3rem;
      text-align: right;
      @media (max-width: 415px) {
        text-align: center;
        margin: 4rem 0;
        order: 2;
      }

      strong {
        font-weight: bold;
      }
    }
  }
`;

const Quote = () => (
  <Styled>
    <div className="quote">
      <Trans>
        «У этих детей есть внутренняя стигма, что для них уже все предопределено, что как только они выйдут за порог, то тут же попадут в нехорошую историю. Для многих социализация так и не состоится. Они так и не поймут, как и для чего они живут»
      </Trans>
    </div>
    <div className="author">
      <div className="name">
        <strong>
          <Trans>
            Александр Гезалов,
          </Trans>
        </strong>
        <br />
        <Trans>
          общественный деятель
        </Trans>
      </div>
      <img src="/static/gezalov.png" alt="Alexander Gezalov" />
    </div>
  </Styled>
);

export default Quote;
