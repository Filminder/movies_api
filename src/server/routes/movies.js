const Router = require('koa-router')
const moviesController = require('../../controllers/movies')

const router = new Router({
  prefix: '/api/v1/movies'
})

router.get('/', async ctx => moviesController.getAllMovies(ctx))

router.get('/:id', async ctx => moviesController.getMovieById(ctx))

router.post('/', async ctx => moviesController.createMovie(ctx))

router.get('/upcoming', async ctx => {})

module.exports = router
