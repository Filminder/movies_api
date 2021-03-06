exports.seed = (knex, Promise) => {
  return knex('movies')
    .del()
    .then(() => {
      return knex('movies').insert({
        name: 'The Land Before Time',
        genre: 'Fantasy',
        rating: 7,
        explicit: false,
        cover_image:
          'https://images-na.ssl-images-amazon.com/images/I/51DRW0NT8ML._SY445_.jpg'
      })
    })
    .then(() => {
      return knex('movies').insert({
        name: 'Jurassic Park',
        genre: 'Science Fiction',
        rating: 9,
        explicit: true,
        cover_image:
          'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/b1/b151ce4935a3c2807e1dd9963eda16d8_500x735.jpg'
      })
    })
    .then(() => {
      return knex('movies').insert({
        name: 'Ice Age: Dawn of the Dinosaurs',
        genre: 'Action/Romance',
        rating: 5,
        explicit: false,
        cover_image:
          'https://images-na.ssl-images-amazon.com/images/I/61oSEbYf%2BTL.jpg'
      })
    })
}
