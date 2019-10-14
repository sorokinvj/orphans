import React from 'react';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';
import {
  Container,
  Row,
  Col,
} from '@bootstrap-styled/v4';
import Logo from '../navigation/Logo';
import Menu from '../navigation/Menu';

const Styled = styled.div`
  background: linear-gradient(180deg, #3D3D3D 0%, #000000 100%);
  height:  40rem;
  padding-top: 10rem;

  @media (max-width: 415px) {
    padding: 7rem 0;
    height: 100%;
  }

  .menu {
    margin-top: 1rem;
    @media (max-width: 415px) {
      margin: 5rem 0 3rem;
    }
    li {
      margin-bottom: 3rem;
    }
    @media (max-width: 768px) {
      ul {
        margin: 0;
        text-align: left;
        li {
          color: white;
        }
      }
    }
  }
  p {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.1rem;
    color: #FFFFFF;
    margin-top: 1rem;
  }
  .partner {
    margin-top: 2rem;
    width: 25rem;
    @media (max-width: 768px) {
      width: 20rem;
    }
  }
`;
const Footer = () => (
  <Styled>
    <Container>
      <Row>
        <Col md="4">
          <Logo white />
        </Col>
        <Col md={{ size: 2, offset: 1 }}>
          <Menu white />
        </Col>
        <Col md={{ size: 4, offset: 1 }}>
          <p>
            <Trans>
              при поддержке
            </Trans>
          </p>
          <img src="/static/logomediahub.png" alt="Open Media Hub logo" className="partner" />
        </Col>
      </Row>
    </Container>
  </Styled>
);

export default Footer;
