import React from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import {
  Container,
  Row,
  Col,
} from '@bootstrap-styled/v4';

import SmallCard from '../components/cards/SmallCard';
import MediumCard from '../components/cards/MediumCard';
import LargeCard from '../components/cards/LargeCard';

const WP_URL = 'http://178.62.114.149';

const MainPage = styled.div`
  h1 {
    font-family: 'PT Sans';
    font-size: 4.2rem;
    font-weight: bold;
    line-height:5.6rem;
    color: #0D2C54;
  }
`;

class Index extends React.Component {
  static async getInitialProps() {
    const posts = await fetch(
      `${WP_URL}/wp-json/wp/v2/posts/`,
    ).then(res => res.json())
      .catch(err => console.log(err));
    return { posts };
  }

  render() {
    console.log(this.props);
    const { posts } = this.props;
    return (
      <MainPage>
        <Container>
          <Row>
            <Col lg="12" md="12" xs="12">
              <h1 className="text-center">
                Истории
              </h1>
            </Col>
          </Row>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            {posts.map(post => <SmallCard item={post} />)}
            {/* {posts.map((post, index) => {
              if (index === 0 || index <= 4 || index > 6) return <SmallCard item={post} />;
              if (index === 1) return <LargeCard item={post} />;
              if (index === 5 || index === 6) return <MediumCard item={post} />;
            })} */}
          </Row>
        </Container>
      </MainPage>
    );
  }
}

export default Index;
