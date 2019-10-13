import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from '@bootstrap-styled/v4';
import Card from './cards/Card';

const Investigation3 = ({ unit, phone }) => (
  <Row>
    <Col xs="12" md="6">
      <Card
        phone={phone}
        item={unit}
      />
    </Col>
    <Col xs="12" md="6" />
  </Row>
);

export default Investigation3;
