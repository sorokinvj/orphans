import React from 'react';
import getConfig from 'next/config';
import { withRouter } from 'next/router';
import Prismic from 'prismic-javascript';
import { client } from '../prismic-configuration';

import LanguageContext from '../components/context/LanguageContext';
import RussiaMap from '../components/map/RussiaMap';
import MainHead from '../components/main/MainHead';
import MainPage from '../components/main';

const { publicRuntimeConfig } = getConfig();

class Index extends React.Component {
  static contextType = LanguageContext

  state = {
    content: {
      stories: [],
      investigations: [],
    },
    currentLang: null,
  }

  async componentDidMount() {
    const language = this.context;
    this.setState({
      currentLang: language,
    });
    const stories = await client.query(
      Prismic.Predicates.at('document.type', 'post'),
      {
        lang: language,
        orderings: '[document.first_publication_date desc]',
      },
    );
    const investigations = await client.query(
      Prismic.Predicates.at('document.type', 'investigation'),
      {
        lang: language,
        orderings: '[document.first_publication_date desc]',
      },
    );
    this.setState({
      content: {
        stories: stories.results,
        investigations: investigations.results,
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
    const { content } = this.state;
    const { stories, investigations } = content;
    const { phone } = this.props;
    // console.log('main', this.state);
    return (
      <>
        <MainHead />
        <RussiaMap token={MapboxToken} />
        <MainPage
          stories={stories}
          investigations={investigations}
          phone={phone}
        />
        {/* <Container>
          <Row>
            <Col lg="12" md="12" xs="12">
              <h1 className="text-center main-title">
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
        </Container> */}
      </>
    );
  }
}

export default withRouter(Index);
