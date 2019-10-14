import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  CardWrap, CaseTitle,
} from './styles';


const Case = ({
  item, lang, phone,
}) => (
  <Link href={`/${lang}/investigation/${item.uid}`}>
    <a>
      <CardWrap background={phone ? item.data.wallpaper.mob.url : item.data.wallpaper.url}>
        <CaseTitle>
          {item.data.lead[0].text}
        </CaseTitle>
      </CardWrap>
    </a>
  </Link>
);

Case.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  phone: PropTypes.string,
  lang: PropTypes.string,
};

Case.defaultProps = {
  item: {},
  lang: 'ru',
  phone: null,
};

export default Case;
