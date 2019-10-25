/* global describe afterEach it expect api */
const User = require('../../models/User')

const testDataIncorrect = {
  username: 'test',
  email: 'test',
  password: 'test',
  passwordConfirmation: 'incorrect'
}

describe('POST /register', () => {

  afterEach(done => {
    User.deleteMany().then(() => done())
  })

  it('should return a 422 response if password and password confirmation do not match', done => {
    api.post('/api/register')
      .send(testDataIncorrect)
      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })

})

