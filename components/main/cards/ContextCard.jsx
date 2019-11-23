import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import {
  StoryWrap, ExpertName, ExpertPosition, ExpertQuote,
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

const ContextCard = ({ item, phone, lang }) => (
  <StyledStory>
    <Link href={`/${lang}/story/${item.uid}`}>
      <a>
        <StoryWrap background={phone ? item.data.wallpaper.mob.url : item.data.wallpaper.url}>
          <img src={item.data.userpic.url} className="userpic" alt={item.data.name} />
          <ExpertName>
            {item.data.name[0].text}
          </ExpertName>
          <ExpertPosition>
            {item.data.position[0].text}
          </ExpertPosition>
          <ExpertQuote>
            {item.data.title[0].text}
          </ExpertQuote>
        </StoryWrap>
      </a>
    </Link>
  </StyledStory>
);

ContextCard.propTypes = {
  item: PropTypes.shape({
    uid: PropTypes.string,
    data: PropTypes.shape({
      name: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
      })),
      position: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
      })),
      title: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
      })),
      userpic: PropTypes.shape({
        url: PropTypes.string,
        mob: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
      wallpaper: PropTypes.shape({
        url: PropTypes.string,
        mob: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    }),
  }),
  phone: PropTypes.string,
  lang: PropTypes.string,
};

ContextCard.defaultProps = {
  item: {},
  phone: null,
  lang: 'ru',

};

export default ContextCard;
