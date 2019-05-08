import React from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import {
  Container,
  Row,
  Col,
} from '@bootstrap-styled/v4';
import { withNamespaces, Router } from '../i18n';

import NewsCard from '../components/cards/NewsCard';

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

async function getPosts(lang) {
  const { WP_URL } = publicRuntimeConfig;
  return fetch(
    `${WP_URL}/wp-json/better-rest-endpoints/v1/posts?content=false&acf=false&lang=${lang}`,
  ).then(res => res.json())
    .catch(err => console.log(err));
}

class Index extends React.Component {
  static async getInitialProps(ctx) {
    const { req, query } = ctx;
    console.log("index server", query);
    const posts = await getPosts(query.lang);
    return { posts, namespacesRequired: ['common'] };
  }


  componentDidUpdate(prevProps) {
    const { lng } = this.props
    if(lng !== prevProps.lng) {
      console.log("lang changed", lng)
      Router.push(`/${lng}`)
    }
  }

  render() {
    // console.log(this.props);
    const { posts, t } = this.props;
    return (
      <MainPage>
        <Container>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            <Col lg="12" md="12" xs="12">
              <h1 className="text-center">
                {t('Stories')}
              </h1>
            </Col>
          </Row>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            {posts.map((post, index) => {
              if (index === 1) return <NewsCard item={post} key={post.title} lang={lng} size="large" />;
              if (index === 5 || index === 6) return <NewsCard item={post} key={post.title} lang={lng} size="medium" />;
              return <NewsCard item={post} key={post.title} lang={lng} />;
            })}
          </Row>
        </Container>
      </MainPage>
    );
  }
}

export default withNamespaces('common')(Index);
