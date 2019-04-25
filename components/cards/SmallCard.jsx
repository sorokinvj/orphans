import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from '@bootstrap-styled/v4';
import { Card, Title, Wallpaper } from './styles';

const SmallCard = ({ item }) => (
  <Col lg="4" md="4" xs="12">
    <Link href={`/post/${item.slug}`}>
      <a>
        <Card>
          <Title>
            {item.title.rendered}
          </Title>
          <Wallpaper src={item.wallpaper} />
        </Card>
      </a>
    </Link>
  </Col>
);

SmallCard.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

SmallCard.defaultProps = {
  item: {},
};
export default SmallCard;
