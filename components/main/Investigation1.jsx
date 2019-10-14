import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from '@bootstrap-styled/v4';
import styled from 'styled-components';
import Card from './cards/Card';
import Case from './cards/Case';

const Styled = styled.div`
  padding-top: 8rem;
`;

const Investigation1 = ({ unit1, unit2, phone, lang }) => {
  return (
    <Styled>
      <Row>
        <Col xs="12" md="6">
          <img src="/static/graph1.svg" alt="search results of 'buy child' on Yandex" style={{ width: '100%' }} />
        </Col>
        <Col xs="12" md="6" />
        <Col xs="12" md="8">
          <Card
            phone={phone}
            item={unit1}
            lang={lang}
            size="big"
          />
        </Col>
        <Col xs="12" md="4">
          <Case
            phone={phone}
            item={unit2}
            lang={lang}
          />
        </Col>
      </Row>
    </Styled>
  );
};

Investigation1.propTypes = {

};

export default Investigation1;
