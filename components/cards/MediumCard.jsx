import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

import { Col, CardImg } from '@bootstrap-styled/v4';

const Card = styled.div`
    box-shadow: 2px 2px 10px 2px #C6C6C6;
    height: 45rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Title = styled.h2`
    font-family: 'PT Sans';
    font-size: 2.2rem;
    line-height: 3rem;
    color: #221E22;
    text-decoration: none;
`;

const Tags = styled.div`
    display: flex;
    flex-direction: column;
`;

const Tag = styled.div`
    font-family: 'PT Sans';
    font-size: 1.4rem;
    text-transform: uppercase;
    color: #515052;
    margin-bottom: 1rem;
    margin-right: 1rem;
    padding-bottom: 3px;
    border-bottom: 2px solid #515052;
`;

const Wallpaper = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    justify-self: flex-end;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
`;

const MediumCard = ({ item }) => (
  <Col lg="4" md="4" xs="12">
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
          <CardImg bottom src={item.wallpaper} alt={item.title.rendered} />
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
