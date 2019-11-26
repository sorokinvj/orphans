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
      videos: [],
      context: [],
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
        orderings: '[document.first_publication_date]',
      },
    );
    const investigations = await client.query(
      Prismic.Predicates.at('document.type', 'investigation'),
      {
        lang: language,
        orderings: '[document.last_publication_date desc]',
      },
    );
    const videos = await client.query(
      Prismic.Predicates.at('document.type', 'video'),
      {
        lang: language,
        orderings: '[document.first_publication_date desc]',
      },
    );
    const context = await client.query(
      Prismic.Predicates.at('document.type', 'context'),
      {
        lang: language,
        orderings: '[document.first_publication_date desc]',
      },
    );
    this.setState({
      content: {
        stories: stories.results,
        investigations: investigations.results,
        videos: videos.results,
        context: context.results,
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
    const {
      stories, investigations, videos, context,
    } = content;
    const { phone } = this.props;
    const lang = this.context;
    // console.log('main', this.state);
    return (
      <>
        <MainHead />
        <RussiaMap token={MapboxToken} />
        <MainPage
          stories={stories}
          investigations={investigations}
          videos={videos}
          context={context}
          phone={phone}
          lang={lang}
        />
      </>
    );
  }
}

export default withRouter(Index);
