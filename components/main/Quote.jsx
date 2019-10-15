import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';
import { Col } from '@bootstrap-styled/v4';
import Statement from '../shared/styled/Statement';

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  text-align: center;
  align-items: center;

  @media (max-width: 415px) {
    margin: 6rem 0 3rem;
  }

  img {
    width: 15rem;
    border-radius: 50%;
    margin-top: 2rem;
  }

  .author {
    font-family: 'PT Sans';
    font-style: normal;
    font-size: 1.6rem;
    line-height: 2.1rem;
    margin-top: 2rem;
    @media (max-width: 415px) {
        text-align: center;
    }

    strong {
      font-weight: bold;
    }
  }
`;

const Quote = () => (
  <Styled>
    <Statement className="center">
      <Trans>
        «В детдомах ноль процентов свободы и сто процентов контроля. Но в 18 лет ситуация меняется на противоположную»
      </Trans>
    </Statement>
    <img src="/static/gusarova.jpg" alt="Natalia Gusarova" />
    <div className="author">
      <strong>
        <Trans>
              Наталья Гусарова,
        </Trans>
      </strong>
      <br />
      <Trans>
            психолог
      </Trans>
    </div>
  </Styled>
);

Quote.propTypes = {

};

export default Quote;
