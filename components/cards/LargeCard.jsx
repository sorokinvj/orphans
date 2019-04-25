import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Title, Wallpaper } from './styles';
import { Col } from '@bootstrap-styled/v4';

const LargeCard = ({ item }) => (
  <Col lg="8" md="8" xs="12">
    <Link href={`/post/${item.slug}`}>
      <a>
        <Card>
          {/* <Tags>
            {item.tags.map(tag => (
              <Tag>
                {tag}
              </Tag>
            ))}
          </Tags> */}
          <Title>
            {item.title.rendered}
          </Title>
          <Wallpaper src={item.wallpaper} />
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
