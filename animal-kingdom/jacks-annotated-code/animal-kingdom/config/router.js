const router = require('express').Router() // requiring express router module
const animals = require('../controllers/animals') //requring our animals controller functions
const users = require('../controllers/auth') // getting my auth controller
const secureRoute = require('../lib/secureRoute') // imported the secure route function to check for valid tokens before certain requests are allowed to pass to the controllers

router.route('/animals') // with the router module, we can define the route once, then attach the appropriate controller to the appropriate verb
  .get(animals.index) // passed on to the animals index controller if its a GET request
  .post(secureRoute, animals.create) // and to the create controller for the POST request

// Note the contollers are named the same as the exports at the bottom of the /controllers/animals.js file

router.route('/animals/:id') // adding our route for member actions
  .get(animals.show) // passing of GET requests to the show controller
  .put(secureRoute, animals.update) // this route is secured behind the 'token wall' and will not work without a valid token
  .delete(secureRoute, animals.delete)

router.route('/animals/:id/comments')
  .post(animals.commentCreate)

router.route('/animals/:id/comments/:commentId')
  .delete(animals.commentDelete)

router.route('/register') // just handling the register controller
  .post(users.register)

router.route('/login') // just handling user login controller
  .post(users.login) // we dont use a param.id to find the user, see the controller

router.route('/profile')
  .get(secureRoute, users.profile)

module.exports = router  // exporting our router module for use in index.js
