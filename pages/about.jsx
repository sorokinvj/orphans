import React from 'react'
import PropTypes from 'prop-types'
import getConfig from 'next/config'
import { withRouter } from 'next/router'
import Prismic from 'prismic-javascript'
import { client } from '../prismic-configuration'

import LanguageContext from '../components/context/LanguageContext'
import RussiaMap from '../components/map/RussiaMap'
import AboutHead from '../components/about/AboutHead'
import AboutPage from '../components/about'

const { publicRuntimeConfig } = getConfig()

class About extends React.Component {
  static contextType = LanguageContext

  static propTypes = {
    phone: PropTypes.string,
    page: PropTypes.shape({
      data: PropTypes.shape({
        description: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
          })
        ),
        team: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.arrayOf(
              PropTypes.shape({
                text: PropTypes.string,
              })
            ),
            position: PropTypes.arrayOf(
              PropTypes.shape({
                text: PropTypes.string,
              })
            ),
            userpic: PropTypes.shape({
              url: PropTypes.string,
            }),
          })
        ),
        team_description: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
          })
        ),
        team_heading: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
          })
        ),
        title: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
          })
        ),
      }),
    }),
  }

  static defaultProps = {
    page: {},
    phone: null,
  }

  state = {
    currentLang: null,
  }

  static async getInitialProps(ctx) {
    const {
      query: { lang },
    } = ctx

    const page = await client.query(
      Prismic.Predicates.at('document.type', 'about'),
      {
        lang,
      }
    )

    return { page: page.results[0] }
  }

  async componentDidMount() {
    const language = this.context
    this.setState({
      currentLang: language,
    })
  }

  async componentDidUpdate() {
    const { currentLang } = this.state
    const { router } = this.props
    const language = this.context
    if (language !== currentLang) {
      router.push(`/${language}/about`)
    }
  }

  render() {
    const { MapboxToken } = publicRuntimeConfig
    const { phone, page } = this.props
    const lang = this.context
    return (
      <>
        <AboutHead lang={lang} />
        <RussiaMap token={MapboxToken} />
        <AboutPage page={page} phone={phone} lang={lang} />
      </>
    )
  }
}

export default withRouter(About)
