const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const nextI18NextMiddleware = require('next-i18next/middleware')
const nextI18next = require('./i18n')

app.prepare().then(() => {
  const server = express()
  server.use(nextI18NextMiddleware(nextI18next))
  
  server.get('/news/:slug', (req, res) => {
    return app.render(req, res, '/news', { slug: encodeURIComponent(req.params.slug) })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
