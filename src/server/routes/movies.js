const Router = require('koa-router')
const queries = require('../db/queries/movies')
const successResponse = require('../../views/success')
const responseError = require('../../views/error')

const router = new Router({
  prefix: '/api/v1/movies'
})

router.get('/', async ctx => {
  try {
    const movies = await queries.getAllMovies()
    return successResponse(ctx, movies)
  } catch (error) {
    return responseError(ctx, 404, 'Something went wrong')
  }
})

router.get('/:id', async ctx => {
  try {
    const movie = await queries.getSingleMovie(ctx.params.id)

    if (!movie.length) {
      return responseError(ctx, 404, 'That movie does not exist')
    }

    return successResponse(ctx, movie)
  } catch (error) {
    return responseError(ctx, 404, 'That movie does not exist')
  }
})

router.post('/', async ctx => {
  try {
    const movie = await queries.addMovie(ctx.request.body)
    if (movie.length) {
      successResponse(ctx, movie)
    } else {
      responseError(ctx, 400, 'Something went wrong.')
    }
  } catch (err) {
    responseError(
      ctx,
      400,
      'Something went wrong. Maybe this movie already exist'
    )
  }
})

router.get('/upcoming', async ctx => {})

module.exports = router
