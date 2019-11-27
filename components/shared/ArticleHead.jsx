import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import getConfig from 'next/config';

const { publicRuntimeConfig: { URL } } = getConfig();

const ArticleHead = ({
  item: {
    data: { title, lead, wallpaper },
    uid,
  },
  articleURLtype,
  language,
}) => (
  <Head>
    <title>{title[0] && title[0].text}</title>
    <meta property="og:url" content={`${URL}/${language}/${articleURLtype}/${uid}`} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title[0] && title[0].text} />
    <meta property="og:description" content={lead && lead[0] && lead[0].text} />
    <meta property="og:image" content={wallpaper && wallpaper.url} />
    <meta
      property="og:image:width"
      content={wallpaper && wallpaper.dimensions.width}
    />
    <meta
      property="og:image:height"
      content={wallpaper && wallpaper.dimensions.height}
    />
  </Head>
);

ArticleHead.propTypes = {
  item: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
      })),
      lead: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
      })),
      wallpaper: PropTypes.shape({
        dimensions: PropTypes.shape({
          width: PropTypes.number,
          height: PropTypes.number,
        }),
        url: PropTypes.string,
      }),
    }),
    uid: PropTypes.string,
  }),
  articleURLtype: PropTypes.string,
  language: PropTypes.string,
};

ArticleHead.defaultProps = {
  item: {},
  articleURLtype: '',
  language: 'ru',
};

export default ArticleHead;
