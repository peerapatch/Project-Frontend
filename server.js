
const { createServer } = require('http')
// const url = require('url')
// const cookie = require('cookie')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // const cookies = req.headers.cookie
    // const accessToken = cookie.parse(cookies)[process.env.COOKIE_ACCESS_TOKEN]
    // const parsedUrl = url.parse(req.url, true)
    // const { pathname, query } = parsedUrl

    // if (pathname === '/') {
    //   // if (accessToken) {
    //   app.render(req, res, '/dashboard', query)
    //   // } else {
    //   //   app.render(req, res, '/login', query)
    //   // }
    // } else {
    handle(req, res, '/dashboard')
    // }
  }).listen(3060, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3060')
  })
})
