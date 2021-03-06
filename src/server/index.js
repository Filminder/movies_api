const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const indexRoutes = require('./routes/index')
const movieRoutes = require('./routes/movies')
require('dotenv').config()

const app = new Koa()
const PORT = process.env.PORT || 3000

app.use(bodyParser())
app.use(indexRoutes.routes())
app.use(movieRoutes.routes())

const server = app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`server listening on: http://localhost:${PORT}`)
})

module.exports = server
