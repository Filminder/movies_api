const Router = require('koa-router');
const router = new Router();

const queries = require('../db/queries/movies');
const BASE_URL = `/api/v1/movies`;

router.get(BASE_URL, async ctx => {
  try {
    const movies = await queries.getAllMovies();
    ctx.body = {
      status: 'success',
      data: movies
    };
  } catch (err) {
    ctx.status = 404;
    ctx.body = {
      status: 'error',
      type: 'application/json'
    };
  }
});

const responseError = ctx => {
  ctx.status = 404;

  ctx.body = {
    status: 'error',
    message: 'That movie does not exist.'
  };
};

router.get(`${BASE_URL}/:id`, async ctx => {
  ctx.type = 'application/json';

  try {
    const movie = await queries.getSingleMovie(ctx.params.id);

    if (!movie.length) {
      return responseError(ctx);
    }

    ctx.body = {
      status: 'success',
      data: movie
    };
  } catch (error) {
    return responseError(ctx);
  }
});

router.post(`${BASE_URL}`, async ctx => {
  try {
    const movie = await queries.addMovie(ctx.request.body);
    if (movie.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        data: movie
      };
    } else {
      ctx.status = 400;
      ctx.type = 'application/json';
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      };
    }
  } catch (err) {
    console.log(err);
  }
});

router.post(`${BASE_URL}`, async ctx => {
  try {
    const movie = await queries.addMovie(ctx.request.body);
    if (movie.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        data: movie
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
});

module.exports = router;
