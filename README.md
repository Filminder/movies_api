# Movies API

## Getting Started With Movies API

* Download the repo:

```
$ git clone git@github.com:yasskate/movies_api.git
```

* You will need to install `nodemon`

```
$ npm install nodemon -g
```

* You will need to install the project dependencies

```
$ cd movies_api && npm install
```

* Before you start to running the project, you should make the setup for the database:
  * In this case we are using `postgresql` with [Postgres.app](https://postgresapp.com/downloads.html)
* You will need to create two dababases with the following names:

```
1. movies_api
2. movies_api_test
```

* Before running the migrations you will need to create a `.env` file with the following environment variables:

```
PORT = 3000
DB_NAME = movies_api
DB_USER = your_database_user
DB_PASSWORD = your_database_password
```
Also, you can take a look on the `.env_example` file

* After create the databases, run the migration:

```
$ knex migrate:latest --env development
```

* Then run the seeds

```
$ knex seed:run --env development
```

## Run The Server

```
$ npm start
```

* The project would be running on:

```
http://localhost:300
```