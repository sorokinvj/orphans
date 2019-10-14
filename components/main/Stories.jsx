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
import Quote from './Quote';
import Fact from './Fact'
const Stories = ({ stories, phone, lang }) => (
  <>
    <Row id="stories">
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
          <Fact />
      </Col>
      <Col xs="12" md="6">
        {stories.map((story, index) => {
          if (index === 3) return <Card item={story} phone={phone} key={story.id} lang={lang} type="story" />;
          return null;
        })}
      </Col>
    </Row>
    <Row style={{ marginTop: '10rem' }}>
      <Quote />
    </Row>
    <Row>
      {stories.map((story, index) => {
        if (index > 3 && index < 6) {
          return (
            <Col xs="12" md="6">
              <Card item={story} phone={phone} key={story.id} lang={lang} type="story" />
            </Col>
          );
        }
        return null;
      })}
    </Row>
    <Row>
      {stories.map((story, index) => {
        if (index > 5) {
          return (
            <Col xs="12" md="4" key={story.id}>
              <Story item={story} phone={phone} lang={lang} />
            </Col>
          );
        }
        return null;
      })}
    </Row>
  </>
);

Stories.propTypes = {

};

export default Stories;
