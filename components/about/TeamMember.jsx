import React from 'react';
import PropTypes from 'prop-types';
import { Col } from '@bootstrap-styled/v4';
import { RichText } from 'prismic-reactjs';
import { Member } from './styled';
import { linkResolver } from '../../prismic-configuration';

const TeamMember = ({ member }) => (
  <Col xs={12} md={4}>
    <Member>
      <img
        className="userpic"
        src={member.userpic.url}
        alt={member.name[0].text}
      />
      <div className="name">{RichText.render(member.name, linkResolver)}</div>
      <div className="position">
        {RichText.render(member.position, linkResolver)}
      </div>
    </Member>
  </Col>
);

TeamMember.propTypes = {
  member: PropTypes.shape({
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
};

TeamMember.defaultProps = {
  member: {},
};

export default TeamMember;
