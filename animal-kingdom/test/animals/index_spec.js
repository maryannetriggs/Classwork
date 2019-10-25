/* global describe beforeEach afterEach it expect api */
const Animal = require('../../models/Animal')
const User = require('../../models/User')

describe('GET /animals', () => {
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
      .then(() => done())
  })
  afterEach(done => {
    User.deleteMany()
      .then(() => Animal.deleteMany({}))
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api.get('/api/animals')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an array', done => {
    api.get('/api/animals')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })

  it('should return an array of objects', done => {
    api.get('/api/animals')
      .end((err, res) => {
        res.body.forEach(animal => {
          expect(animal).to.be.an('object')
        })
        done()
      })
  })

  it('should return the correct fields', done => {
    api.get('/api/animals')
      .end((err, res) => {
        res.body.forEach(animal => {
          expect(animal).to.contains.keys([
            '_id',
            'name',
            'species',
            'isCarnivore',
            'image',
            'age',
            'dangerRating',
            'user'
          ])
        })
        done()
      })
  })


  it('should return the correct data types', done => {
    api.get('/api/animals')
      .end((err, res) => {
        res.body.forEach(animal => {
          expect(animal._id).to.be.a('string')
          expect(animal.name).to.be.a('string')
          expect(animal.species).to.be.a('string')
          expect(animal.isCarnivore).to.be.a('boolean')
          expect(animal.image).to.be.a('string')
          expect(animal.age).to.be.a('number')
          expect(animal.dangerRating).to.be.a('number')
          expect(animal.user).to.be.an('object')
        })
        done()
      })
  })

  

})