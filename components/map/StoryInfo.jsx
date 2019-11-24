import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Place, ExpertQuote, Lead } from '../main/cards/styles';

const PopupCard = styled.div`
  background: linear-gradient(to bottom,rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)), url('${props => props.background}');
  background-size: cover;
  height: 20rem;
  width: 30rem;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Place} {
    text-align: center;
    font-weight: bold;
    position: relative;
    bottom: 0;
    color: red;
  }

  ${ExpertQuote} {
    color: black;
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 1.2;
    text-align: center;
    margin-top: 1rem;
    text-decoration: underline;
    text-decoration-skip-ink: none;
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
        </a>
      </PopupCard>
    );
  }
}
