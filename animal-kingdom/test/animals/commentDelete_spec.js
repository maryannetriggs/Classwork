/* global describe, beforeEach, afterEach, it, expect, api */
const Animal = require('../../models/Animal')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

const testComment = {
  text: 'test'
}

const testUserData = [{
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

// Delete comments has a trickier set up up to test, we need to create a user, then an animal, then a comment on that animal and save refercnes to all.
describe('DELETE /animals/:id/comments/:commentId', () => {

  let createdUsers = null
  let token = null
  let incorrectToken = null
  let animal = null
  let comment = null

  beforeEach(done => {
    User.create(testUserData)
      .then(users => {
        createdUsers = users
        token = jwt.sign({ sub: users[0]._id }, secret, { expiresIn: '6h' })
        incorrectToken = jwt.sign({ sub: users[1]._id }, secret, { expiresIn: '6h' })
        return Animal.create({
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
      .then(animal => {
        animal.comments.push({ ...testComment, user: createdUsers[0] })
        return animal.save()
      })
      .then(createdAnimal => {
        animal = createdAnimal
        comment = createdAnimal.comments[0]
        done()
      })
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => Animal.deleteMany())
      .then(() => done())
  })

  it('should return a 401 unauthorized response if no token is passed', done => {
    api.delete(`/api/animals/${animal._id}/comments/${comment._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return a 204 created response if a valid token is passed', done => {
    api.delete(`/api/animals/${animal._id}/comments/${comment._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(204)
        done()
      })
  })
  
  it('should return a 401 unauthorised response if a token different than the user who created the comment is passed', done => {
    api.delete(`/api/animals/${animal._id}/comments/${comment._id}`)
      .set('Authorization', `Bearer ${incorrectToken}`)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

})