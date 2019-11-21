/* global api, describe, it, expect, beforeEach, afterEach */
const Animal = require('../../models/Animal')
const User = require('../../models/User')
const jwt = require('jsonwebtoken') // again needed just like in create, we need to be able to pass tokens with requests.
const { secret } = require('../../config/environment') // and our secret to encode that token with

describe('PUT /animals/:id', () => {
  let token = null  // to store our token for the user who creates the animal. need this for the request
  let animal = null // to store the created animal, so we can access it's id to edit

  beforeEach(done => {
    User.create({
      username: 'Jack',
      email: 'jack@email',
      password: 'pass',
      passwordConfirmation: 'pass'
    })
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' }) // signing the jwt token for our created user
        return Animal.create({ // the aniaml we will be attempting to edit in our tests
          name: 'Simba',
          species: 'Lion',
          isCarnivore: true,
          age: 28,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcDmjZxUap66U0J0xsFYKLnATNDBCOYUHhUkHENz-STqidMGBc',
          dangerRating: 4,
          habitats: ['Pride Rock', 'Africa', 'Jungle'],
          user
        })
      })
      .then(createdAnimal => {
        animal = createdAnimal // and storing our created animal
        done()
      })
  })

  afterEach(done => { // as always removing any animals and users after the tests are complete
    User.deleteMany()
      .then(() => Animal.deleteMany())
      .then(() => done())
  })

  it('should return a 401 response without a token', done => {
    api.put(`/api/animals/${animal._id}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return a 202 response with a token', done => {
    api.put(`/api/animals/${animal._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        expect(res.status).to.eq(202)
        done()
      })
  })
  
  it('should return an object', done => {
    api.put(`/api/animals/${animal._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return the correct fields', done => {
    api.put(`/api/animals/${animal._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Test' })
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
    api.put(`/api/animals/${animal._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        expect(res.body._id).to.be.a('string')
        expect(res.body.name).to.be.a('string')
        expect(res.body.species).to.be.a('string')
        expect(res.body.image).to.be.a('string')
        expect(res.body.isCarnivore).to.be.a('boolean')
        expect(res.body.age).to.be.a('number')
        expect(res.body.user).to.be.an('string') // we're checking for a string this time with user as we don't populate it
        expect(res.body.habitats).to.be.an('array')
        done()
      })
  })

})