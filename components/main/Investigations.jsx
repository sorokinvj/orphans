import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';
import {
  Row,
  Col,
} from '@bootstrap-styled/v4';
import Investigation1 from './Investigation1';
import Investigation2 from './Investigation2';
import Investigation3 from './Investigation3';
import Investigation4 from './Investigation4';
import H1 from '../shared/styled/H1';

const Investigations = ({ investigations, phone, lang }) => (
  <>
    <Row>
      <Col xs="12" md="12">
        <H1>
          <Trans>
                Расследования
          </Trans>
        </H1>
      </Col>
    </Row>
    {investigations.map((unit, index, array) => {
      if (index === 0) {
        return <Investigation1 unit1={unit} unit2={array[1]} key={unit.id} phone={phone} lang={lang} />;
      }
      if (index === 1) {
        return <div key={unit.id} />;
      }
      if (index === 2) {
        return <Investigation2 unit={unit} key={unit.id} phone={phone} lang={lang} />;
      }
      if (index === 3) {
        return <Investigation3 unit={unit} key={unit.id} phone={phone} lang={lang} />;
      }
      if (index === 4) {
        return <Investigation4 unit={unit} key={unit.id} phone={phone} lang={lang} />;
      }
      return <div key={unit.id} />;
    })}
  </>
);

Investigations.propTypes = {

};

export default Investigations;
