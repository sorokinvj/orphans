import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

import { Col } from '@bootstrap-styled/v4';

const Card = styled.div`
    box-shadow: 2px 2px 10px 2px #C6C6C6;
    height: 45rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 5rem;
`;

const Title = styled.h2`
    font-family: 'PT Sans';
    font-size: 2.2rem;
    line-height: 3rem;
    color: #221E22;
    text-decoration: none;
    padding: 3rem;

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
    overflow: hidden;
    background: url('${props => props.src}');
    background-size: cover;
`;

const SmallCard = ({ item }) => (
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
