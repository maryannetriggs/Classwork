const router = require('express').Router()
const animals = require('../controllers/animals')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/animals')
  .get(animals.index)
  .post(secureRoute, animals.create)

router.route('/animals/:id')
  .get(animals.show)
  .get(secureRoute, animals.update)
  .get(secureRoute, animals.remove)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

router.route('/login')
  .post(users.login)

module.exports = router