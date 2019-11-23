const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const requestLanguage = require("express-request-language");

app.prepare().then(() => {
  const server = express();

  server.use(
    requestLanguage({
      languages: ["en-gb", "ru"]
      // cookie: {
      //   name: 'language',
      //   options: { maxAge: 24*3600*1000 },
      //   url: '/languages/{language}'
      // }
    })
  );

  server.get("/:lang", (req, res) =>
    app.render(req, res, "/", { lang: req.params.lang })
  );

  server.get("/:lang/about", (req, res) =>
    app.render(req, res, "/about", { lang: req.params.lang })
  );

  server.get("/:lang/story/:uid", (req, res) =>
    app.render(req, res, "/story", {
      lang: req.params.lang,
      uid: req.params.uid
    })
  );

  server.get("/:lang/investigation/:uid", (req, res) =>
    app.render(req, res, "/investigation", {
      lang: req.params.lang,
      uid: req.params.uid
    })
  );

  server.get("/", (req, res) => {
    // console.log('server.js lang in req', req.language);
    res.redirect(`/${req.language}`);
  });

  server.get("*", (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
