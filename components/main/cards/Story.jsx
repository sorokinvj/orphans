import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import {
  StoryWrap, Name, Action, Place,
} from './styles';

const StyledStory = styled.div`
  .userpic {
    border-radius: 50%;
    margin-top: 5rem;
    @media (max-width: 768px) {
      margin-top: 3rem;
    }
  }
`;

const Story = ({ item, phone, lang }) => (
  <StyledStory>
    <Link href={`/${lang}/story/${item.uid}`}>
      <a>
        <StoryWrap background={phone ? item.data.wallpaper.mob.url : item.data.wallpaper.url}>
          <img src={item.data.userpic.url} className="userpic" alt={item.data.name} />
          <Name>
            {item.data.name}
          </Name>
          <Action>
            {item.data.did}
          </Action>
          <Place>
            {item.data.where}
          </Place>
        </StoryWrap>
      </a>
    </Link>
  </StyledStory>
);

Story.propTypes = {
};

export default Story;
