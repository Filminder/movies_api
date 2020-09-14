const path = require('path');
require('dotenv').config();

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
  test: {
    client: 'pg',
    connection: `postgres://${process.env.DB_USER}:${
      process.env.DB_PASSWORD
    }@localhost:5432/movies_api_test`,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'pg',
    connection: process.env.POSTGRES_URI,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};
