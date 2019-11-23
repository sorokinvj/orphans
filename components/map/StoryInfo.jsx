import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Place, ExpertQuote, Lead } from '../main/cards/styles';

const PopupCard = styled.div`
  background: linear-gradient(to bottom,rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url('${props => props.background}');
  background-size: cover;
  height: 20rem;
  width: 30rem;
  padding: 3rem 2rem;

  ${Place} {
    color: white;
    position: relative;
    bottom: 0;
  }

  ${ExpertQuote} {
    color: white;
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    margin-top: 1rem;
  }

  ${Lead} {
    color: white;
    text-align: left;
    width: 100%;
    margin-top: 0.5rem;
  }

`;

export default class StoryInfo extends PureComponent {
  static propTypes = {
    info: PropTypes.shape({
      image: PropTypes.string,
      url: PropTypes.string,
      city: PropTypes.string,
      title: PropTypes.string,
      lead: PropTypes.string,
    }),
  }

  static defaultProps = {
    info: {},
  }

  render() {
    const { info } = this.props;

    return (
      <PopupCard background={info.image}>
        <a
          target="_new"
          href={info.url}
        >
          <Place>{info.city}</Place>
          <ExpertQuote>
            {info.title}
          </ExpertQuote>
          <Lead>
            {info.lead}
          </Lead>
        </a>
      </PopupCard>
    );
  }
}
