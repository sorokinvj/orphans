import React from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import { i18n, withNamespaces } from '../i18n'

import {
  Container,
  Row,
  Col,
} from '@bootstrap-styled/v4';

import SmallCard from '../components/cards/SmallCard';
import MediumCard from '../components/cards/MediumCard';
import LargeCard from '../components/cards/LargeCard';

const { publicRuntimeConfig } = getConfig();

const MainPage = styled.div`
  padding: 8rem 0;

  h1 {
    font-family: 'PT Sans';
    font-size: 4.2rem;
    font-weight: bold;
    line-height:5.6rem;
    color: #0D2C54;
    margin-bottom: 6rem;
  }

`;

class Index extends React.Component {
  static async getInitialProps() {
    const { WP_URL } = publicRuntimeConfig;
    const posts = await fetch(
      `${WP_URL}/wp-json/better-rest-endpoints/v1/posts?content=false&acf=false`,
    ).then(res => res.json())
      .catch(err => console.log(err));
    return { posts, namespacesRequired: ['common'] };
  }

  render() {
    console.log(this.props);
    const { posts } = this.props;
    return (
      <MainPage>
        <Container>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            <Col lg="12" md="12" xs="12">
              <h1 className="text-center">
                {this.props.t('title')}
              </h1>
              <button
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          Change locale
        </button>
            </Col>
          </Row>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            {posts.map((post, index) => {
              if (index === 1) return <LargeCard item={post} key={post.title} />;
              if (index === 5 || index === 6) return <MediumCard item={post} key={post.title} />;
              return <SmallCard item={post} key={post.title} />;
            })}
          </Row>
        </Container>
      </MainPage>
    );
  }
}

export default withNamespaces('common')(Index);
