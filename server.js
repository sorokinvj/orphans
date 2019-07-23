const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const requestLanguage = require('express-request-language');

// https
const rootCas = require('ssl-root-cas/latest').create();

rootCas
  .addFile('/home/sorokinvj/orphansmap.com.chained.crt');
require('https').globalAgent.options.ca = rootCas;

const nextI18NextMiddleware = require('next-i18next/middleware');
const nextI18next = require('./i18n');


app.prepare().then(() => {
  const server = express();

  server.use(requestLanguage({
    languages: ['en-US', 'ru-RU'],
    // cookie: {
    //   name: 'language',
    //   options: { maxAge: 24*3600*1000 },
    //   url: '/languages/{language}'
    // }
  }));


  server.use(nextI18NextMiddleware(nextI18next));

  server.get('/:lang', (req, res) => app.render(req, res, '/', { lang: req.params.lang }));

  server.get('/:lang/news/:slug', (req, res) => app.render(req, res, '/news',
    {
      lang: req.params.lang,
      slug: encodeURIComponent(req.params.slug),
    }));

  server.get('/', (req, res) => {
    console.log('server.js lang in req', req.language);
    res.redirect(`/${req.language}`);
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
