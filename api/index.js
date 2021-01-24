const HOST = process.env.TMDB_API
const API_KEY = process.env.TMDB_API_KEY
//const TOKEN = process.env.TMDB_TOKEN
const axios = require('axios')

const api = axios.create({
  baseURL: HOST
})

module.exports = api
