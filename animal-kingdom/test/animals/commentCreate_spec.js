/* global describe, beforeEach, afterEach, it, expect, api */
const Animal = require('../../models/Animal')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

const testComment = {
  text: 'test'
}

describe('POST /animals/:id/comments', () => {

  let token = null
  let animal = null

  beforeEach(done => {
    User.create({
      username: 'test',
      email: 'test@email',
      password: 'test',
      passwordConfirmation: 'test'
    })
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
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
          },
          {
            name: 'Mufasa',
            species: 'Lion',
            isCarnivore: true,
            age: 60,
            image: 'https://vignette.wikia.nocookie.net/lionking/images/e/e5/Mufasa.png/revision/latest?cb=20130512234313',
            dangerRating: 4,
            habitats: ['Pride Rock', 'Africa'],
            user: user
          }
        ])
      })
      .then(animals => {
        animal = animals[0]
        done()
      })
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => Animal.deleteMany())
      .then(() => done())
  })

  it('should return a 401 unauthorized response if no token is passed', done => {
    api.post(`/api/animals/${animal._id}/comments`)
      .send({ text: 'test' })
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })
  
  it('should return a 201 created response if a valid token is passed', done => {
    api.post(`/api/animals/${animal._id}/comments`)
      .set('Authorization', `Bearer ${token}`) 
      .send(testComment)
      .end((err, res) => {
        expect(res.status).to.eq(201)
        done()
      })
  })

  it('should return a 422 response if a correct token is passed, but incorrect data is sent', done => {
    api.post(`/api/animals/${animal._id}/comments`)
      .set('Authorization', `Bearer ${token}`)
      .send({})
      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })

  it('should return an object', done => {
    api.post(`/api/animals/${animal._id}/comments`)
      .set('Authorization', `Bearer ${token}`)
      .send(testComment)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })


  it('should return the correct fields', done => {
    api.post(`/api/animals/${animal._id}/comments`)
      .set('Authorization', `Bearer ${token}`)
      .send(testComment)
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
    api.post(`/api/animals/${animal._id}/comments`)
      .set('Authorization', `Bearer ${token}`)
      .send(testComment)
      .end((err, res) => {
        expect(res.body._id).to.be.a('string')
        expect(res.body.name).to.be.a('string')
        expect(res.body.species).to.be.a('string')
        expect(res.body.image).to.be.a('string')
        expect(res.body.isCarnivore).to.be.a('boolean')
        expect(res.body.age).to.be.a('number')
        expect(res.body.user).to.be.an('string')
        expect(res.body.habitats).to.be.an('array')
        done()
      })
  })

})