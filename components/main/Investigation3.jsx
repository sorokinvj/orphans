import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from '@bootstrap-styled/v4';
import Card from './cards/Card';

const Investigation3 = ({ unit, phone, lang }) => (
  <Row>
    <Col xs="12" md="6">
      <Card
        phone={phone}
        item={unit}
        lang={lang}
        type="investigation"
      />
    </Col>
    <Col xs="12" md="6" />
  </Row>
);

export default Investigation3;
