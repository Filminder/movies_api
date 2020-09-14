exports.up = function (knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments()
    table
      .string('name')
      .notNullable()
      .unique()
    table.string('genre').notNullable()
    table.integer('rating').notNullable()
    table.boolean('explicit').notNullable()
    table
      .string('cover_image')
      .notNullable()
      .defaultTo('https://www.directv.com/img/movies.jpg')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('movies')
}
