const express = require('express') // first of all, requruing the express framework
const app = express() // invoking the framework
const mongoose = require('mongoose') // our ORM for mongoDB
const bodyParser = require('body-parser') // to read body of requests
const router = require('./config/router') // getting our router module
const logger = require('./lib/logger')
const errorHandler = require('./lib/errorHandler')
const { dbURI, port } = require('./config/environment')  // location our local version of mongo runs on + db name (animal-kingdom), see /config/environment.js

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  }) // connecting our DB first

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json()) // Using body parser middleware as soon as possible

app.use(logger) // registering our custom logger middleware, see notes in /lib/logger.js

app.use('/api', router) // registering our router middleware, this leads to controllers which send responses ending the cycle, imported above from /config/router

app.use(errorHandler) // registering our global error handler, we only throw validation errors to this, see controllers for animals create and update and user register.

app.use('/*', (req, res) => res.status(404).json({ message: 'Not Found' }))
// a catch all for any non matching route, we will update this eventually

app.listen(port, () => console.log(`Up and running on port ${port}`)) // Asking our API to actually listen for the requests

module.exports = app