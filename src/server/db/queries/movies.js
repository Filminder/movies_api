const knex = require('../connection');

const getAllMovies = () => knex('movies').select('*');

const getSingleMovie = id => knex('movies').select('*').where({ id: Number(id) });

const addMovie = movie => knex('movies').insert(movie).returning('*');

module.exports = {
  getAllMovies,
  getSingleMovie,
  addMovie
};
