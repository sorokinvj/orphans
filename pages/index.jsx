import React from 'react';
import styled from 'styled-components';
import getConfig from 'next/config';
import { withRouter } from 'next/router';
import {
  Container,
  Row,
  Col,
} from '@bootstrap-styled/v4';
import Prismic from 'prismic-javascript';
import { Trans } from '@lingui/macro';
import LanguageContext from '../components/context/LanguageContext';
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
  static contextType = LanguageContext

  state = {
    content: {
      results: [],
    },
    currentLang: null,
  }

  async componentDidMount() {
    const language = this.context;
    this.setState({
      currentLang: language,
    });
    const response = await client.query(
      Prismic.Predicates.at('document.type', 'post'), { lang: language },
    );
    this.setState({
      content: {
        results: response.results,
      },
    });
  }

  async componentDidUpdate() {
    const { currentLang } = this.state;
    const { router } = this.props;
    const language = this.context;
    if (language !== currentLang) {
      router.push(`/${language}`);
    }
  }

  render() {
    const { MapboxToken } = publicRuntimeConfig;
    const { phone, tablet } = this.props;
    const { content } = this.state;
    const { router } = this.props;
    const languageFromURL = router.query.lang;
    return (
      <MainPage>
        <RussiaMap token={MapboxToken} />
        <Container>
          <Row>
            <Col lg="12" md="12" xs="12">
              <h1 className="text-center">
                <Trans>Истории</Trans>
              </h1>
            </Col>
          </Row>
          <Row>
            {content.results.map((post, index) => {
              if (index === 1) {
                return (
                  <NewsCard
                    item={post}
                    key={post.uid}
                    size="large"
                    phone={phone}
                    lang={languageFromURL}
                  />
                );
              }
              if (index === 5 || index === 6) {
                return (
                  <NewsCard
                    item={post}
                    key={post.uid}
                    phone={phone}
                    size="medium"
                    lang={languageFromURL}
                  />
                );
              }
              return (
                <NewsCard
                  item={post}
                  key={post.uid}
                  phone={phone}
                  lang={languageFromURL}
                />
              );
            })}
          </Row>
        </Container>
      </MainPage>
    );
  }
}

export default withRouter(Index);
