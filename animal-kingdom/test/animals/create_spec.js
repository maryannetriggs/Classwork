/* global api, describe, it, expect, beforeEach, afterEach */
const Animal = require('../../models/Animal')
const User = require('../../models/User')
const jwt = require('jsonwebtoken') // we need our jwt token and secret here, remeber our create request need a real valid user token to work correctly, so we will need to create and sign one.
const { secret } = require('../../config/environment') // and our secret to encode that token with

const testAnimal = { // the aniaml we will be attempting to create in our tests
  name: 'Simba',
  species: 'Lion',
  isCarnivore: true,
  age: 28,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcDmjZxUap66U0J0xsFYKLnATNDBCOYUHhUkHENz-STqidMGBc',
  dangerRating: 4,
  habitats: ['Pride Rock', 'Africa', 'Jungle']
}

describe('POST /animals', () => {

  let token = null // similar to our show tests with animal id, we are going to store the token of our created test user here, so we can use it in subsquent tests.

  beforeEach(done => {
    User.create({
      username: 'Jack',
      email: 'jack@email',
      password: 'pass',
      passwordConfirmation: 'pass'
    })
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' }) // signing the jwt token for our created user
        done()
      })
  })

  afterEach(done => { // as always removing any animals and users after the tests are complete
    User.deleteMany()
      .then(() => Animal.deleteMany())
      .then(() => done())
  })

  it('should return a 401 response without a token', done => {
    api.post('/api/animals')
      .send(testAnimal)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return a 201 response with a token', done => {
    api.post('/api/animals')
      .set('Authorization', `Bearer ${token}`) // <===== using our token here from the created uer above!
      .send(testAnimal)
      .end((err, res) => {
        expect(res.status).to.eq(201)
        done()
      })
  })

  it('should return an object', done => {
    api.post('/api/animals')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return the correct fields', done => {
    api.post('/api/animals')
      .set('Authorization', `Bearer ${token}`)
      .send(testAnimal)
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
    api.post('/api/animals')
      .set('Authorization', `Bearer ${token}`)
      .send(testAnimal)
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
