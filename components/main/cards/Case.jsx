import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  CardWrap, CaseTitle, Lead,
} from './styles';


const Case = ({
  item, lang, phone, type,
}) => (
  <Link href={`/${lang}/${type}/${item.uid}`}>
    <a>
      <CardWrap background={phone ? item.data.wallpaper.mob.url : item.data.wallpaper.url}>
        <CaseTitle>
          {item.data.title[0].text}
        </CaseTitle>
        <Lead>
          {item.data.lead[0].text}
        </Lead>
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
