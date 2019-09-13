import React from 'react';
import styled from 'styled-components';
import getConfig from 'next/config';
import {
  Container,
  Row,
  Col,
} from '@bootstrap-styled/v4';
import Prismic from 'prismic-javascript';
import { i18n, withNamespaces, Router } from '../i18n';
import NewsCard from '../components/cards/NewsCard';
import RussiaMap from '../components/map/RussiaMap';
import { client } from '../prismic-configuration';

const { publicRuntimeConfig } = getConfig();

const MainPage = styled.div`

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

  static async getInitialProps(ctx) {
    const { query: { lang } } = ctx;
    i18n.changeLanguage(lang);
    const response = await client.query(
      Prismic.Predicates.at('document.type', 'post'), { lang },
    );
    return { response };
  }

  render() {
    // console.log("index", this.props);
    const {
      posts, t, lng, response, phone,
    } = this.props;
    const { MapboxToken } = publicRuntimeConfig;
    return (
      <MainPage>
        <RussiaMap token={MapboxToken} />
        <Container>
          <p><b>TODO: query Prismic with changing Language</b></p>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            <Col lg="12" md="12" xs="12">
              <h1 className="text-center">
                {t('Stories')}
              </h1>
            </Col>
          </Row>
          <Row theme={{ '$grid-gutter-width': '50px' }}>
            {response.results.map((post, index) => {
              if (index === 1) {
                return (
                  <NewsCard
                    item={post}
                    key={post.uid}
                    lang={lng}
                    size="large"
                    phone={phone}
                  />
                );
              }
              if (index === 5 || index === 6) {
                return (
                  <NewsCard
                    item={post}
                    key={post.uid}
                    lang={lng}
                    phone={phone}
                    size="medium"
                  />
                );
              }
              return (
                <NewsCard
                  item={post}
                  key={post.uid}
                  lang={lng}
                  phone={phone}
                />
              );
            })}
          </Row>
        </Container>
      </MainPage>
    );
  }
}

export default withNamespaces('common')(Index);
