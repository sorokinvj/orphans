import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import getConfig from 'next/config'

const {
  publicRuntimeConfig: { URL },
} = getConfig()

const AboutHead = ({ lang }) => (
  <Head>
    <title>
      {lang === 'en-gb'
        ? 'About Orphans` Stories'
        : 'О проекте «Сиротские истории»'}
    </title>
    <meta
      name="description"
      content={
        lang === 'en-gb'
          ? '“Orphan stories” is a series of materials about children who were abandoned by their family and the state.'
          : '“Сиротские истории” — это цикл материалов о детях, которые остались без родительской опеки и помощи от государства.'
      }
    />
    <meta property="og:url" content={`${URL}/about`} />
    <meta property="og:type" content="article" />
    <meta
      property="og:image"
      content="https://orphansmap.com/static/mainHead.jpg"
    />
    <meta property="og:image:width" content={1017} />
    <meta property="og:image:height" content={612} />
    {lang === 'en-gb' ? (
      <>
        <meta property="og:title" content="Orphans` Stories" />
        <meta
          property="og:description"
          content="“Orphan stories” is a series of materials about children who were abandoned by their family and the state."
        />
      </>
    ) : (
      <>
        <meta property="og:title" content="Сиротские истории" />
        <meta
          property="og:description"
          content="“Сиротские истории” — это цикл материалов о детях, которые остались без родительской опеки и помощи от государства."
        />
      </>
    )}
  </Head>
)

AboutHead.propTypes = {
  lang: PropTypes.string,
}

export default AboutHead
