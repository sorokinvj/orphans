/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import {
  Container,
  Row,
  Col,
} from '@bootstrap-styled/v4';
import dayjs from 'dayjs';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import LanguageContext from '../components/context/LanguageContext';
import { client, linkResolver } from '../prismic-configuration';
import Post from './styled';
import ArticleHead from '../components/shared/ArticleHead';
import FeedbackForm from '../components/shared/FeedbackForm';

class Context extends Component {
  static contextType = LanguageContext

  static propTypes = {
    router: PropTypes.shape({
      query: PropTypes.shape({
        uid: PropTypes.string,
      }),
      push: PropTypes.func.isRequired,
    }),
    phone: PropTypes.string,
    results: PropTypes.shape({
      lang: PropTypes.string,
      data: PropTypes.shape({
        title: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
          }),
        ),
        lead: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
          }),
        ),
        body: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
          }),
        ),
        wallpaper: PropTypes.shape({
          mob: PropTypes.shape({
            url: PropTypes.string,
          }),
          dimensions: PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number,
          }),
          url: PropTypes.string,
        }),
      }),
      first_publication_date: PropTypes.string,
      uid: PropTypes.string,
      alternate_languages: PropTypes.arrayOf(PropTypes.shape({
        lang: PropTypes.string,
        uid: PropTypes.string,
      })),
    }),
  };

  static defaultProps = {
    router: {},
    phone: null,
    results: {},
  };

  static async getInitialProps(ctx) {
    const { query: { lang, uid } } = ctx;
    const response = await client.query(
      Prismic.Predicates.at('my.context.uid', uid), { lang },
    );
    return { results: response.results[0] };
  }

  state = {
    currentLang: null,
  }

  componentDidMount() {
    const language = this.context;
    this.setState({
      currentLang: language,
    });
  }

  componentDidUpdate() {
    const { router, results } = this.props;
    const language = this.context;
    const { currentLang } = this.state;
    if (currentLang !== language) {
      const { alternate_languages } = results;
      if (alternate_languages[0]) {
        const { lang, uid } = alternate_languages[0];
        router.push(`/${lang}/context/${uid}`);
      }
    }
  }

  render() {
    const { phone, results } = this.props;
    const {
      data: {
        title, lead, wallpaper, body,
      }, first_publication_date,
    } = results;
    return (
      <Post>
        <ArticleHead item={results} articleURLtype="context" language={results.lang} />
        <Container>
          <Row>
            <Col xs={{ size: 12 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
              <div className="title">
                {RichText.render(title, linkResolver)}
              </div>
              <p className="date">
                {dayjs(first_publication_date).format('DD/MM/YYYY')}
              </p>
              <div className="post-lead">
                {RichText.render(lead, linkResolver)}
              </div>
            </Col>
            <Col xs={{ size: 12 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
              <div className="hero">
                <img
                  src={phone ? wallpaper.mob.url : wallpaper.url}
                  alt={title[0].text}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 12 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
              <div className="content">
                {RichText.render(body, linkResolver)}
              </div>
            </Col>
          </Row>
          <FeedbackForm />
        </Container>
      </Post>
    );
  }
}

export default withRouter(Context);
