/* global api, describe, it, expect, beforeEach, afterEach */
const Animal = require('../../models/Animal')
const User = require('../../models/User') // we need our user again to attribute a created animal a user

describe('GET /animals/:id', () => {

  let animal = null // we will stored a reference to our created animal here, we will use this animal as the one we are tring to request, we store it so we can get its id to use in the requests

  beforeEach(done => {
    User.create({
      username: 'Jack',
      email: 'jack@email',
      password: 'pass',
      passwordConfirmation: 'pass'
    })
      .then(user => {
        return Animal.create([
          {
            name: 'Simba',
            species: 'Lion',
            isCarnivore: true,
            age: 28,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcDmjZxUap66U0J0xsFYKLnATNDBCOYUHhUkHENz-STqidMGBc',
            dangerRating: 4,
            habitats: ['Pride Rock', 'Africa', 'Jungle'],
            user: user
          }
        ])
      })
      .then(createdAnimal => {
        animal = createdAnimal[0] // <==== here is where we set that let abocve as the created animal, we can then access its id in the tests below
        done()
      })
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => Animal.deleteMany())
      .then(() => done())
  })

  it('should return a 404 not found for an invalid animal id', done => {
    api.get('/api/animals/1234')
      .end((err, res) => {
        expect(res.status).to.eq(404)
        done()
      })
  })

  it('should return a 200 response', done => {
    api.get(`/api/animals/${animal._id}`) // <=== and using that animal we have created and stored in the requests
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an object', done => {
    api.get(`/api/animals/${animal._id}`) // <=== and using that animal we have created and stored in the requests
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return the correct fields', done => {
    api.get(`/api/animals/${animal._id}`) 
      .end((err, res) => {
        expect(res.body).to.contains.keys([
          '_id',
          'name',
          'species',
          'isCarnivore',
          'image',
          'age',
          'dangerRating',
          'user'
        ])
        done()
      })
  })

  it('should return the correct data types', done => {
    api.get(`/api/animals/${animal._id}`) 
      .end((err, res) => {
        expect(res.body._id).to.be.a('string')
        expect(res.body.name).to.be.a('string')
        expect(res.body.species).to.be.a('string')
        expect(res.body.image).to.be.a('string')
        expect(res.body.isCarnivore).to.be.a('boolean')
        expect(res.body.age).to.be.a('number')
        expect(res.body.user).to.be.an('object')
        expect(res.body.habitats).to.be.an('array')
        done()
      })
  })

})