import React, { Component } from 'react';
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
import Loading from '../components/shared/Loading';

class Story extends Component {
  static contextType = LanguageContext

  state = {
    content: {
      results: [],
    },
    isLoading: true,
    currentLang: null,
  }

  async componentDidMount() {
    const language = this.context;
    this.setState({
      currentLang: language,
    });
    const { router } = this.props;
    const { uid } = router.query;
    const response = await client.query(
      Prismic.Predicates.at('my.context.uid', uid), { lang: language },
    );
    this.setState({
      content: {
        results: response.results,
      },
      isLoading: false,
    });
    // console.log('content', this.state.content);
  }

  async componentDidUpdate() {
    const { router } = this.props;
    const { content, currentLang } = this.state;
    const language = this.context;
    if (content.results.length > 0) {
      const { alternate_languages } = content.results[0];
      if (alternate_languages[0]) {
        const { lang, uid } = alternate_languages[0];
        if (currentLang !== language) {
          router.push(`/${lang}/context/${uid}`);
        }
      }
    }
  }

  render() {
    const { phone } = this.props;
    const { content, isLoading } = this.state;
    if (isLoading) return <Loading visible={isLoading} />;
    if (content.results.length > 0) {
      const { data, first_publication_date } = content.results[0];
      return (
        <Post>
          <Container>
            <Row>
              <Col xs={{ size: 12 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
                <div className="title">
                  {RichText.render(data.title, linkResolver)}
                </div>
                <p className="date">
                  {dayjs(first_publication_date).format('DD/MM/YYYY')}
                </p>
                <div className="post-lead">
                  {RichText.render(data.lead, linkResolver)}
                </div>
              </Col>
              <Col xs={{ size: 12 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
                <div className="hero">
                  <img src={phone ? data.wallpaper.mob.url : data.wallpaper.url} alt={data.title[0].text} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={{ size: 12 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
                <div className="content">
                  {RichText.render(data.body, linkResolver)}
                </div>
              </Col>
            </Row>
          </Container>
        </Post>
      );
    }
    return null;
  }
}

export default withRouter(Story);