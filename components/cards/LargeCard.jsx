import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Title, Wallpaper } from './styles';
import { Col } from '@bootstrap-styled/v4';

const LargeCard = ({ item }) => (
  <Col lg="8" md="6" xs="12">
    <Link href={`/news/${item.slug}`}>
      <a>
        <Card>
          <Title>
            {item.title}
          </Title>
          <Wallpaper src={item.media.medium_large} />
        </Card>
      </a>
    </Link>
  </Col>
);

LargeCard.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

LargeCard.defaultProps = {
  item: {},
};
export default LargeCard;
