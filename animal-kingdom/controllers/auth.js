const User = require('../models/User') // the user model to get find and create methods
const jwt = require('jsonwebtoken') // JSON web token package, used to create our tokens
const { secret } = require('../config/environment') // a plain string to encode/decode our tokens, we don't want to expose this publically

// register route - /register
function register(req, res, next) {
  User
    .create(req.body) // same as creating any other resource, see animals create controller, except runs our extra pre 'save' and 'validate' methods. See /models/User for these.
    .then(user => res.status(201).json({ message: `Thanks for Registering ${user.username}` })) // if creates succesfully, send a welcome message with users username embedded
    .catch(next) //send any errors
}

// login route -/login
// user suplies in body of request, email and password only
function login(req, res) {
  User
    .findOne({ email: req.body.email }) //find the user by that email
    .then(user => { //check to if we found a record and the password provided matches what is in the database
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' }) // send a response of unauthorized and end the process here
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' }) // if all good, create a JSON web token (jwt), baking in the user id, a secret to encode/decode and an expiry time for the token
      res.status(202).json({ message: `Welcome Back ${user.username}`, token })
    }) //finally send back a message with that created token
    .catch(() => res.status(401).json({ message: 'Unauthorized' } ))
}

// profile route  /profile
function profile(req, res) { // route for a user profile
  User
    .findById(req.currentUser._id) // this must be a secureRoute, it uses the user id gathered from the token, to find the user in our DB
    .populate('createdAnimals')
    .then(user => res.status(200).json(user)) //sending the found user back
    .catch(err => res.json(err)) // sending any errors
}

module.exports = {
  profile,
  register,
  login // exporting each 'route handling' function, taking advantage of es6 object short hand, same as saying { login: login }
}
