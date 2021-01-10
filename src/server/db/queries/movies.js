const knex = require('../connection')

const getAllMovies = () => knex('movies').select('*')

const getSingleMovie = id =>
  knex('movies')
    .select('*')
    .where({ id: Number(id) })

const addMovie = movie =>
  knex('movies')
    .insert(movie)
    .returning('*')

const deleteMovieById = id =>
  knex('movies')
    .where('id', Number(id))
    .del()

module.exports = {
  getAllMovies,
  getSingleMovie,
  addMovie,
  deleteMovieById
}
