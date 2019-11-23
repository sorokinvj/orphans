import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';
import {
  Row,
  Col,
} from '@bootstrap-styled/v4';
import H1 from '../shared/styled/H1';
import ContextCard from './cards/ContextCard';

const Context = ({ context, lang, phone }) => (
  <>
    <Row id="context">
      <Col xs="12" md="12">
        <H1>
          <Trans>
            Контекст
          </Trans>
        </H1>
      </Col>
    </Row>
    <Row>
      {context.map(item => (
        <Col xs="12" md="4" key={item.id}>
          <ContextCard
            phone={phone}
            item={item}
            lang={lang}
          />
        </Col>
      ))}
    </Row>
  </>
);

Context.propTypes = {

};

Context.defaultProps = {
  context: [],
};

export default Context;
