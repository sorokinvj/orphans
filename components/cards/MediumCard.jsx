import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from '@bootstrap-styled/v4';
import { Card, Title, Wallpaper } from './styles';

const MediumCard = ({ item }) => (
  <Col lg="6" md="6" xs="12">
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

MediumCard.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

MediumCard.defaultProps = {
  item: {},
};
export default MediumCard;
