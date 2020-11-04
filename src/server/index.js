const Koa = require('koa')
const dotenv = require('dotenv')
const Filminder = require('../utils/Filminder')
const bodyParser = require('koa-bodyparser')
const indexRoutes = require('./routes/index')
const movieRoutes = require('./routes/movies')

dotenv.config()

const app = new Koa()

const PORT = Filminder.isTestEnvironment() ? 7001 : process.env.PORT || 7000

app.use(bodyParser())
app.use(indexRoutes.routes())
app.use(movieRoutes.routes())

const server = app.listen(PORT, () => {
  console.log(`server listening on: http://localhost:${PORT}`)
})

module.exports = server
