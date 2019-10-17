const express = require('express')
const app = express()
const mongoose = require('mongoose') //Our ORM from MongoDB
const bodyParser = require('body-parser') //To read body of requests
const router = require('./config/router') //Getting our router module
const logger = require('./lib/logger')
const { dbURI , port } = require('./config/environment') //Location our local version of mongo runs on

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('Mongo is connected')  
) // Connecting our DB first

app.use(bodyParser.json()) //Using body parser middleware ASAP

app.use(logger) // Registering our custom logger middleware

app.use(router) // Registering our router middleware, this leads to controllers ehich send responses ending the cycle

app.use('/*', (req, res) => res.status(404).json({ message: '404 - Not Found' }))
// A catch all for any non-matching route

app.listen(port, () => console.log(`Up and running on port: ${port}`))