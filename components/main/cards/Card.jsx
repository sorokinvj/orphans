import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from '@bootstrap-styled/v4';
import {
  CardWrap, Title, Lead,
} from './styles';


const Card = ({
  item, lang, phone,
}) => (
  <Link href={`/${lang}/investigation/${item.uid}`}>
    <a>
      <CardWrap background={phone ? item.data.wallpaper.mob.url : item.data.wallpaper.url}>
        <Title>
          {item.data.title[0].text}
        </Title>
        <Lead>
          {item.data.lead[0].text}
        </Lead>
      </CardWrap>
    </a>
  </Link>
);

Card.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  phone: PropTypes.string,
  lang: PropTypes.string,
};

Card.defaultProps = {
  item: {},
  lang: 'ru',
  phone: null,
};

export default Card;
