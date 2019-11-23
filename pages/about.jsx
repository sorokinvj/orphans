import React from 'react';
import PropTypes from 'prop-types';
import getConfig from 'next/config';
import Prismic from 'prismic-javascript';
import { client } from '../prismic-configuration';

import LanguageContext from '../components/context/LanguageContext';
import RussiaMap from '../components/map/RussiaMap';
import AboutHead from '../components/about/AboutHead';
import AboutPage from '../components/about';

const { publicRuntimeConfig } = getConfig();

class About extends React.Component {
  static contextType = LanguageContext;

  static propTypes = {
    phone: PropTypes.string,
    page: PropTypes.shape({
      data: PropTypes.shape({
        description: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
          }),
        ),
        team: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.arrayOf(
              PropTypes.shape({
                text: PropTypes.string,
              }),
            ),
            position: PropTypes.arrayOf(
              PropTypes.shape({
                text: PropTypes.string,
              }),
            ),
            userpic: PropTypes.shape({
              url: PropTypes.string,
            }),
          }),
        ),
        team_description: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
          }),
        ),
        team_heading: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
          }),
        ),
        title: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
          }),
        ),
      }),
    }),
  };

  static defaultProps = {
    page: {},
    phone: null,
  }

  state = {};

  static async getInitialProps(ctx) {
    const {
      query: { lang },
    } = ctx;

    const page = await client.query(
      Prismic.Predicates.at('document.type', 'about'),
      {
        lang,
      },
    );

    return { page: page.results[0] };
  }

  render() {
    const { MapboxToken } = publicRuntimeConfig;
    const { phone, page } = this.props;
    const lang = this.context;
    return (
      <>
        <AboutHead />
        <RussiaMap token={MapboxToken} />
        <AboutPage page={page} phone={phone} lang={lang} />
      </>
    );
  }
}

export default About;
