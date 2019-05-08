import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
} from '@bootstrap-styled/v4';
import dayjs from 'dayjs';
import { withNamespaces, Router } from '../i18n';

const { publicRuntimeConfig } = getConfig();

const Post = styled.div`
  padding: 10rem 0;
  .hero {
    img {
      width: 100%;
    }
  }
  .title {
    margin-top: 2rem;
    font-size: 3.7rem;
    line-height: 4.6rem;
    font-weight: bold;
    font-family: 'PT Serif';
    color: #221E22;
  }
  .author, .date {
    margin-top: 3rem;
    text-transform: uppercase;
    font-family: 'PT Sans';
    font-size: 1.4rem;
    color: #F74B01;
  }
  .cat {
    display: inline-block;
    margin-top: 4rem;
    margin-right: 1rem;
    text-transform: uppercase;
    font-family: 'PT Sans';
    font-weight: bold;
    font-size: 1.4rem;
    color: #515052;
    padding-bottom: 3px;
    border-bottom: 2px solid #515052;
  }
  .content {
    margin-top: 6rem;
    p {
      font-family: 'PT Serif';
      font-size: 1.8rem;
      line-height: 3rem;
      color: #221E22;
      margin-bottom: 2.6rem;
    }
    h3 {
      font-family: 'PT Sans';
      font-size: 3rem;
      font-weight: bold;
      line-height: 3.6rem;
      color: #221E22;
      margin: 3.5rem 0 2.6rem 0;
    }
  }
  a {
    text-decoration: none;
    padding-bottom: 0;
    border-bottom: 3px solid #f74b0152;
    box-shadow: inset 0 -4px 0 #f74b0152;
  }
`;

async function getPost(lang, slug) {
  const { WP_URL } = publicRuntimeConfig;
  return fetch(
    // `${WP_URL}/wp-json/better-rest-endpoints/v1/post/${slug}`,
    `${WP_URL}/wp-json/wp/v2/posts?lang=${lang}&slug=${slug}`,
  ).then(res => res.json())
    .catch(err => console.log(err));
}

class Article extends Component {
  static async getInitialProps(ctx) {
    const { slug, lang } = ctx.query;
    console.log(slug, lang);
    const post = await getPost(lang, slug);
    return { post };
  }

  static renderPostContent(content) {
    return { __html: content };
  }

  componentDidUpdate(prevProps) {
    const { lng, post } = this.props;
    if (lng !== prevProps.lng) {
      console.log('lang changed', lng);
      Router.push(`/${lng}/news/${post[0].wpml_translations[0].slug}`);
    }
  }

  render() {
    const { post } = this.props;
    console.log(this.props);
    return (
      <Post>
        <Container>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            <Col lg="2" md="2" />
            <Col lg="8" md="8" xs="12">
              <div className="hero">
                <img src={post[0].wallpaper} alt={post[0].title.rendered} />
              </div>
            </Col>
          </Row>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            <Col lg="2" md="2" />
            <Col lg="8" md="8" xs="12">
              <div className="categories">
                {/* {post[0].category_names.map(cat => (
                  <div className="cat" key={cat}>
                    {cat}
                  </div>
                ))} */}
              </div>
            </Col>
          </Row>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            <Col lg="2" md="2" />
            <Col lg="8" md="8" xs="12">
              <h1 className="title">
                {post[0].title.rendered}
              </h1>
            </Col>
          </Row>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            <Col lg="2" md="2" />
            <Col lg="2" md="2" xs="12">
              <p className="date">
                {dayjs(post[0].date).format('DD/MM/YYYY')}
              </p>
            </Col>
          </Row>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            <Col lg="2" md="2" />
            <Col lg="8" md="8" xs="12">
              <div className="content" dangerouslySetInnerHTML={Article.renderPostContent(post[0].content.rendered)} />
            </Col>
          </Row>
        </Container>
      </Post>
    );
  }
}

export default withNamespaces('common')(Article);
