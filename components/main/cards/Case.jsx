import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from '@bootstrap-styled/v4';
import {
  CardWrap, CaseTitle,
} from './styles';


const Card = ({
  item, lang, phone,
}) => (
  <Link href={`/${lang}/article/${item.uid}`}>
    <a>
      <CardWrap background={phone ? item.data.wallpaper.mob.url : item.data.wallpaper.url}>
        <CaseTitle>
          {item.data.lead[0].text}
        </CaseTitle>
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
