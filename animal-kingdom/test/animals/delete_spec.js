/* global api, describe, it, expect, beforeEach, afterEach */
const Animal = require('../../models/Animal')
const User = require('../../models/User')
const jwt = require('jsonwebtoken') // again needed just like in create, we need to be able to pass tokens with requests.
const { secret } = require('../../config/environment') // and our secret to encode that token with

const testUserData = [{ // creating two users here for this test, will use the second user to test that they cannot update an animal they did not create, will also do the same with delete
  username: 'test',
  email: 'test@email',
  password: 'test',
  passwordConfirmation: 'test'
}, {
  username: 'testTwo',
  email: 'testTwo@email',
  password: 'test',
  passwordConfirmation: 'test'
}]

describe('DELETE /animals/:id', () => {
  let token = null  // to store our token for the user who creates the animal. need this for the request
  let incorrectToken = null
  let animal = null // to store the created animal, so we can access it's id to edit

  beforeEach(done => {
    User.create(testUserData)
      .then(users => {
        token = jwt.sign({ sub: users[0]._id }, secret, { expiresIn: '6h' }) // signing the jwt token for our created user
        incorrectToken = jwt.sign({ sub: users[1]._id }, secret, { expiresIn: '6h' })
        return Animal.create({ // the aniaml we will be attempting to edit in our tests
          name: 'Simba',
          species: 'Lion',
          isCarnivore: true,
          age: 28,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcDmjZxUap66U0J0xsFYKLnATNDBCOYUHhUkHENz-STqidMGBc',
          dangerRating: 4,
          habitats: ['Pride Rock', 'Africa', 'Jungle'],
          user: users[0]
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
    api.delete(`/api/animals/${animal._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return a 204 response with a token', done => {
    api.delete(`/api/animals/${animal._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(204)
        done()
      })
  })

  it('should return no data', done => {
    api.delete(`/api/animals/${animal._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body).to.deep.eq({})
        done()
      })
  })

  it('should return a 401 response with a token for a user that did not create the resource', done => {
    api.delete(`/api/animals/${animal._id}`)
      .set('Authorization', `Bearer ${incorrectToken}`)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

})