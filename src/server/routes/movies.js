const Router = require('koa-router');
const queries = require('../db/queries/movies');

const router = new Router();
const BASE_URL = '/api/v1/movies';

const responseError = (ctx, errorCode, message) => {
  ctx.status = errorCode;
  ctx.body = {
    message,
    status: 'error',
    type: 'application/json'
  };
};

const responseSuccess = (ctx, data) => {
  ctx.status = 201;
  ctx.body = {
    data,
    status: 'success'
  };
};

router.get(BASE_URL, async ctx => {
  try {
    const movies = await queries.getAllMovies();
    responseSuccess(ctx, movies);
  } catch (err) {
    responseError(ctx, 404, 'Something went wrong');
  }
});

router.get(`${BASE_URL}/:id`, async ctx => {
  try {
    const movie = await queries.getSingleMovie(ctx.params.id);

    if (!movie.length) {
      return responseError(ctx, 404, 'That movie does not exist');
    }

    return responseSuccess(ctx, movie);
  } catch (error) {
    return responseError(ctx, 404, 'That movie does not exist');
  }
});

router.post(`${BASE_URL}`, async ctx => {
  try {
    const movie = await queries.addMovie(ctx.request.body);
    if (movie.length) {
      responseSuccess(ctx, movie);
    } else {
      responseError(ctx, 400, 'Something went wrong.');
    }
  } catch (err) {
    responseError(
      ctx,
      400,
      'Something went wrong. Maybe this movie already exist'
    );
  }
});

module.exports = router;
