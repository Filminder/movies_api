const successResponse = require('../views/success')
const responseError = require('../views/error')
const queries = require('../server/db/queries/movies')
const api = require('../../api')

async function getAllMovies (ctx) {
  try {
    const movies = await queries.getAllMovies()
    successResponse(ctx, movies)
  } catch (error) {
    responseError(ctx, 404, 'Something went wrong')
  }
}

async function getMovieById (ctx) {
  const {
    params: { id }
  } = ctx

  try {
    const movie = await queries.getSingleMovie(id)

    if (!movie.length) {
      responseError(ctx, 404, 'That movie does not exist')
    }

    return successResponse(ctx, movie)
  } catch (error) {
    return responseError(ctx, 404, 'That movie does not exist')
  }
}

async function createMovie (ctx) {
  try {
    const movie = await queries.addMovie(ctx.request.body)
    if (movie.length) {
      successResponse(ctx, movie)
    } else {
      responseError(ctx, 400, 'Something went wrong.')
    }
  } catch (error) {
    responseError(
      ctx,
      400,
      'Something went wrong. Maybe this movie already exist'
    )
  }
}

async function deleteMovie (ctx) {
  const {
    params: { id }
  } = ctx

  try {
    const deletedMovie = await queries.deleteMovieById(id)
    successResponse(ctx, deletedMovie)
  } catch (error) {
    responseError(ctx, 404, "The movie doesn't exist")
  }
}

async function getUpcomingMovies (ctx) {
  try {
    const { data: response } = await api.get(`/movie/upcoming?api_key=${process.env.TMDB_API_KEY}`)
    successResponse(ctx, response)
  } catch (e) {
    responseError(ctx, 400, 'Bad request')
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  deleteMovie,
  getUpcomingMovies
}
