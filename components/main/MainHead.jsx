import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';

const { publicRuntimeConfig: { URL } } = getConfig();

const MainHead = () => (
  <Head>
    <title>Orphans` Stories</title>
    <meta name="description" content="“Сиротские истории” — это цикл материалов о детях, которые остались без родительской опеки и помощи от государства." />
    <meta property="og:url" content={URL} />
    <meta property="og:type" content="article" />
    <meta property="og:image" content="https://images.prismic.io/orphansmap/24852b42-c155-4475-96cb-23256e6a0881_62931.jpg?auto=compress,format&rect=18,0,979,612&w=800&h=500" />
    <meta property="og:title" content="Orphans` Stories" />
    <meta property="og:description" content="“Сиротские истории” — это цикл материалов о детях, которые остались без родительской опеки и помощи от государства." />
  </Head>
);

export default MainHead;
