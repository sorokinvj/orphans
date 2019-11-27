import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';

const { publicRuntimeConfig: { URL } } = getConfig();

const AboutHead = () => (
  <Head>
    <title>About Orphans` Stories</title>
    <meta name="description" content="“Сиротские истории” — это цикл материалов о детях, которые остались без родительской опеки и помощи от государства." />
    <meta property="og:url" content={`${URL}/about`} />
    <meta property="og:type" content="article" />
    <meta
      property="og:image"
      content="https://orphansmap.com/static/mainHead.jpg"
    />
    <meta property="og:image:width" content={1017} />
    <meta property="og:image:height" content={612} />
    <meta property="og:title" content="Orphans` Stories" />
    <meta property="og:description" content="“Сиротские истории” — это цикл материалов о детях, которые остались без родительской опеки и помощи от государства." />
  </Head>
);

export default AboutHead;
