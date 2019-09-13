import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from '@bootstrap-styled/v4';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';
import { Card, Title, Wallpaper } from './styles';


const NewsCard = ({
  item, size, lang, phone,
}) => {
  let columnsNumber;
  if (size === 'large') {
    columnsNumber = 8;
  } else if (size === 'medium') {
    columnsNumber = 6;
  } else {
    columnsNumber = 4;
  }

  // console.log("newscard", item)

  return (
    <Col lg={columnsNumber} md="6" xs="12">
      <Link href={`/${lang}/article/${item.uid}`}>
        <a>
          <Card>
            {RichText.render(item.data.title, linkResolver)}
            <Wallpaper src={phone ? item.data.wallpaper.mob.url : item.data.wallpaper.url} />
          </Card>
        </a>
      </Link>
    </Col>
  );
};

NewsCard.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  size: PropTypes.string,
};

NewsCard.defaultProps = {
  item: {},
  size: '',
};
export default NewsCard;
