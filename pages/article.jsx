import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
} from '@bootstrap-styled/v4';
import dayjs from 'dayjs';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { withNamespaces, Router } from '../i18n';
import { client, linkResolver } from '../prismic-configuration';

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


class Article extends Component {
  static async getInitialProps(ctx) {
    const { uid, lang } = ctx.query;
    console.log('article static', lang, decodeURIComponent(uid));
    const response = await client.query(
      Prismic.Predicates.at('my.post.uid', decodeURIComponent(uid)), { lang },
    );
    return { response, namespacesRequired: ['common'] };
  }

  componentDidUpdate(prevProps) {
    const { lng, response } = this.props;
    const { alternate_languages: [{ lang, uid }] } = response.results[0];
    if (lng !== prevProps.lng) {
      console.log('lang changed', lng);
      Router.push(`/${lang}/article/${uid}`);
    }
  }

  render() {
    const { post, response, phone } = this.props;
    const { data, first_publication_date } = response.results[0];
    console.log('article', this.props);
    return (
      <Post>
        <Container>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            <Col lg="2" md="2" />
            <Col lg="8" md="8" xs="12">
              <div className="hero">
                <img src={phone ? data.wallpaper.mob.url : data.wallpaper.url} alt={data.title[0].text} />
              </div>
            </Col>
          </Row>
          {/* <Row theme={{ '$grid-gutter-width': '50px' }}>
            <Col lg="2" md="2" />
            <Col lg="8" md="8" xs="12">
              <div className="categories">
                {post[0].category_names.map(cat => (
                  <div className="cat" key={cat}>
                    {cat}
                  </div>
                ))}
              </div>
            </Col>
          </Row> */}
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            <Col lg="2" md="2" />
            <Col lg="8" md="8" xs="12">
              {RichText.render(data.title, linkResolver)}
            </Col>
          </Row>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            <Col lg="2" md="2" />
            <Col lg="2" md="2" xs="12">
              <p className="date">
                {dayjs(first_publication_date).format('DD/MM/YYYY')}
              </p>
            </Col>
          </Row>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            <Col lg="2" md="2" />
            <Col lg="8" md="8" xs="12">
              {RichText.render(data.body, linkResolver)}
            </Col>
          </Row>
        </Container>
      </Post>
    );
  }
}

export default withNamespaces('common')(Article);
