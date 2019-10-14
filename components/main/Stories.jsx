import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';
import {
  Row,
  Col,
} from '@bootstrap-styled/v4';
import H1 from '../shared/styled/H1';
import Card from './cards/Card';
import Story from './cards/Story';

const Stories = ({ stories, phone, lang }) => (
  <>
    <Row>
      <Col xs="12" md="12">
        <H1>
          <Trans>
                Истории
          </Trans>
        </H1>
      </Col>
    </Row>
    <Row>
      {stories.map((story, index) => {
        if (index < 3) {
          return (
            <Col xs="12" md="4" key={story.id}>
              <Story item={story} phone={phone} lang={lang} />
            </Col>
          );
        }
        return null;
      })}
    </Row>
    <Row>
      <Col xs="12" md="6">
        <img src="/static/facts1.svg" alt="Facts about orphans in Russia" style={{ marginTop: '6rem' }} />
      </Col>
      <Col xs="12" md="6">
        {stories.map((story, index) => {
          if (index === 3) return <Card item={story} phone={phone} key={story.id} lang={lang} />;
          return null;
        })}
      </Col>
    </Row>
  </>
);

Stories.propTypes = {

};

export default Stories;
