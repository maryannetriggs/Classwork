const mongoose = require('mongoose') // need mongoose so we can connect to the DB
const { dbURI } = require('../config/environment') // get the db location string, so we're using the same one as our app
const Animal = require('../models/Animal') // we need our animal model to actually call create on an array of objects to seed.

mongoose.connect( 
  dbURI, 
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err) // if connect fails, will send an error to the console and exit
    db.dropDatabase() // on a good connect, first drop all data in the database
      .then(() => {
        return Animal.create([ // creating an array of new animals
          {
            name: 'Simba',
            species: 'Lion',
            isCarnivore: true,
            age: 28,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcDmjZxUap66U0J0xsFYKLnATNDBCOYUHhUkHENz-STqidMGBc',
            dangerRating: 4,
            habitats: ['Pride Rock', 'Africa', 'Jungle']
          },
          {
            name: 'Mufasa',
            species: 'Lion',
            isCarnivore: true,
            age: 60,
            image: 'https://vignette.wikia.nocookie.net/lionking/images/e/e5/Mufasa.png/revision/latest?cb=20130512234313',
            dangerRating: 4,
            habitats: ['Pride Rock', 'Africa']
          },
          {
            name: 'Sarabi',
            species: 'Lion',
            isCarnivore: true,
            age: 45,
            image: 'https://vignette.wikia.nocookie.net/disney/images/2/2f/Sarabi.jpg/revision/latest?cb=20160621214011',
            dangerRating: 5,
            habitats: ['Pride Rock', 'Africa']
          },
          {
            name: 'Baloo',
            species: 'Bear',
            isCarnivore: true,
            age: 38,
            image: 'https://vignette.wikia.nocookie.net/disney/images/3/31/Profile_-_Baloo.jpeg/revision/latest?cb=20190712012558',
            dangerRating: 4,
            habitats: ['Jungle']
          },
          {
            name: 'Po',
            species: 'Panda',
            isCarnivore: false,
            age: 26,
            image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-kung-fu-panda-2-po.jpg',
            dangerRating: 3,
            habitats: ['Bamboo Forest', 'Kung Fu Temple']
          },
          {
            name: 'Bruce',
            species: 'Great White Shark',
            isCarnivore: true,
            age: 300,
            image: 'https://images.immediate.co.uk/production/volatile/sites/3/2019/01/Jaws-crop-437b2b6.jpg?quality=90&resize=620,413',
            dangerRating: 5,
            habitats: ['Ocean', 'Amity Bay']
          },
          {
            name: 'Dumbo',
            species: 'Elephant',
            isCarnivore: false,
            age: 4,
            image: 'https://i0.wp.com/www.tor.com/wp-content/uploads/2019/03/Dumbo-Animated01.jpg?fit=1000%2C+9999&crop=0%2C0%2C100%2C601px&ssl=1',
            dangerRating: 3,
            habitats: ['Circus', 'The Sky']
          },
          {
            name: 'King Julien',
            species: 'Lemur',
            isCarnivore: false,
            age: 46,
            image: 'https://static.tvno.nu/2993062?forceFit=0&height=760&quality=50&width=1350',
            dangerRating: 2,
            habitats: ['Madagascar', 'Jungle', 'Africa']
          },
          {
            name: 'Timon',
            species: 'Meerkat',
            isCarnivore: false,
            age: 38,
            image: 'https://vignette.wikia.nocookie.net/lionking/images/e/e8/Timon.png/revision/latest/scale-to-width-down/350?cb=20130512182303',
            dangerRating: 1,
            habitats: ['Africa', 'Jungle', 'Pride Rock']
          },
          {
            name: 'Pumba',
            species: 'Warthog',
            isCarnivore: false,
            age: 36,
            image: 'https://vignette.wikia.nocookie.net/disney/images/e/e6/Profile_-_Pumbaa.jpeg/revision/latest?cb=20190312043302',
            dangerRating: 3,
            habitats: ['Africa', 'Jungle', 'Pride Rock']
          },
          {
            name: 'Odette',
            species: 'Swan',
            isCarnivore: false,
            age: 23,
            image: 'https://i.pinimg.com/originals/1d/1b/d9/1d1bd990bd1c1fe56119cd7c51e9b076.jpg',
            dangerRating: 1,
            habitats: ['France', 'Castles', 'Lakes']
          },
          {
            name: 'Sebastien',
            species: 'Lobster',
            isCarnivore: true,
            age: 107,
            image: 'https://vignette.wikia.nocookie.net/disney/images/c/ca/Profile_-_Sebastian.jpeg/revision/latest?cb=20190312033135',
            dangerRating: 1,
            habitats: ['Under the Sea']
          },
          {
            name: 'Bambi',
            species: 'Deer',
            isCarnivore: false,
            age: 1,
            image: 'https://vignette.wikia.nocookie.net/disney/images/c/ce/Profile_-_Bambi.png/revision/latest?cb=20190313173158',
            dangerRating: 1,
            habitats: ['Forest']
          },
          {
            name: 'Abu',
            species: 'Monkey',
            isCarnivore: false,
            age: 8,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxcIHYjakKq8kfVVU0AY60lNgIzYqWA_YBzq9UwH5be7V3FlZZ',
            dangerRating: 2,
            habitats: ['Sultans Palace', 'Jungle', 'Magic Caves']
          },
          {
            name: 'Shere Khan',
            species: 'Tiger',
            isCarnivore: true,
            age: 44,
            image: 'https://vignette.wikia.nocookie.net/disney/images/9/93/Profile_-_Shere_Khan.jpeg/revision/latest?cb=20190312124650',
            dangerRating: 5,
            habitats: ['Jungle']
          },
          {
            name: 'Berlioz',
            species: 'House Cat',
            isCarnivore: true,
            age: 1,
            image: 'https://vignette.wikia.nocookie.net/disney/images/3/34/Berlioz.jpg/revision/latest/scale-to-width-down/516?cb=20160818130240',
            dangerRating: 2,
            habitats: ['Paris']
          },
          {
            name: 'Tramp',
            species: 'Dog',
            isCarnivore: true,
            age: 7,
            image: 'https://vignette.wikia.nocookie.net/disney/images/f/fb/Profile_-_Tramp.jpeg/revision/latest?cb=20190314123412',
            dangerRating: 3,
            habitats: ['Streets', 'Marceline']
          }
        ]
        )
      })
      .then(animals => console.log(`${animals.length} Animals created`)) // if create goes well, log a sucess message
      .catch(err => console.log(err)) // if not log the error
      .finally(() => mongoose.connection.close()) // no matter what close the connction at the end, pass or fail
  }
)