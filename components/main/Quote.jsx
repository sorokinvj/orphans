import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';
import { Col } from '@bootstrap-styled/v4';
import Statement from '../shared/styled/Statement';

const Styled = styled.div`
  display: flex;
  margin-top: 10rem;

  @media (max-width: 415px) {
    margin: 10rem 0 6rem;
  }

  .quote-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    .author {
        font-family: 'PT Sans';
        font-style: normal;
        font-size: 1.6rem;
        line-height: 2.1rem;
        margin-top: 3rem;
        @media (max-width: 415px) {
            text-align: center;
        }
    
        strong {
            font-weight: bold;
        }
    }

    img {
        width: 100%;
    }
    @media (max-width: 415px) {
        .center {
            text-align: center;
            margin-top: 2rem;
        }
    }
  }
`;

const Quote = () => (
  <Styled>
    <Col xs={{ size: 6, offset: 3 }} sm={{ size: 2, offset: 1 }} md={{ size: 3, offset: 0 }} className="offset-sm-0 offset-md-0">
      <img src="/static/gusarova.jpg" alt="Natalia Gusarova" style={{ borderRadius: '50%', width: '100%' }} />
    </Col>
    <Col xs="12" md="9" lg="7">
      <div className="quote-wrap">
        <Statement className="center">
          <Trans>
                  В детдомах ноль процентов свободы и сто процентов контроля. Но в 18 лет ситуация меняется на противоположную
          </Trans>
        </Statement>
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
      </div>
    </Col>
  </Styled>
);

Quote.propTypes = {

};

export default Quote;
