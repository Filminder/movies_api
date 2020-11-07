const knex = require('../connection')

const getAllMovies = () => {
  return knex('movies').select('*')
}

const getSingleMovie = id => {
  return knex('movies')
    .select('*')
    .where({ id: parseInt(id) })
}

function addMovie (movie) {
  return knex('movies')
    .insert(movie)
    .returning('*')
}

module.exports = {
  getAllMovies,
  getSingleMovie,
  addMovie
}
