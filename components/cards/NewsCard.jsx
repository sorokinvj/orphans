import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from '@bootstrap-styled/v4';
import { Card, Title, Wallpaper } from './styles';

const NewsCard = ({ item, size }) => {
  let columnsNumber;
  if (size === 'large') {
    columnsNumber = 8;
  } else if (size === 'medium') {
    columnsNumber = 6;
  } else {
    columnsNumber = 4;
  }

  return (
    <Col lg={columnsNumber} md="6" xs="12">
      <Link href={`/news/${item.slug}`}>
        <a>
          <Card>
            <Title>
              {item.title}
            </Title>
            <Wallpaper src={size ? item.media.medium_large : item.media.medium} />
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
