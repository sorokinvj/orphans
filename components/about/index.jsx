import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from '@bootstrap-styled/v4';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';
import StyledMainPage from './styled';
import Statement from '../shared/styled/Statement';
import H1 from '../shared/styled/H1';
import TeamMember from './TeamMember';

const AboutPage = ({ page }) => (
  <StyledMainPage>
    <Container>
      <Row>
        <Col xs="12" md="9">
          <H1>{page.data.title[0].text}</H1>
          <Statement>
            {RichText.render(page.data.description, linkResolver)}
          </Statement>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="9">
          <H1>{page.data.team_heading[0].text}</H1>
        </Col>
      </Row>
      <Row>
        {page.data.team.map(member => (
          <TeamMember member={member} key={member.name[0].text} />
        ))}
      </Row>
    </Container>
  </StyledMainPage>
);

AboutPage.propTypes = {
  phone: PropTypes.string,
  page: PropTypes.shape({
    data: PropTypes.shape({
      description: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
        }),
      ),
      team: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.arrayOf(
            PropTypes.shape({
              text: PropTypes.string,
            }),
          ),
          position: PropTypes.arrayOf(
            PropTypes.shape({
              text: PropTypes.string,
            }),
          ),
          userpic: PropTypes.shape({
            url: PropTypes.string,
          }),
        }),
      ),
      team_description: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
        }),
      ),
      team_heading: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
        }),
      ),
      title: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
        }),
      ),
    }),
  }),
};

AboutPage.defaultProps = {
  phone: null,
  page: {},
};

export default AboutPage;
