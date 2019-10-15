import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';
import {
  Row,
  Col,
} from '@bootstrap-styled/v4';
import H1 from '../shared/styled/H1';
import Card from './cards/Card';

const Investigations = ({ investigations, phone, lang }) => (
  <>
    <Row id="investigations">
      <Col xs="12" md="12">
        <H1>
          <Trans>
                Расследования
          </Trans>
        </H1>
      </Col>
    </Row>
    <Row style={{ paddingTop: '8rem' }}>
      <Col xs="12" md="6">
        <img src="/static/graph1.svg" alt="search results of 'buy child' on Yandex" style={{ height: '42rem' }} />
      </Col>
      {investigations.map(unit => (
        <Col xs="12" md="6">
          <Card
            phone={phone}
            item={unit}
            lang={lang}
            type="investigation"
            size="big"
          />
        </Col>
      ))}
    </Row>
  </>
);

Investigations.propTypes = {

};

export default Investigations;
