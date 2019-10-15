const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000

let dogs = [
  { id: '1', name: 'Jack', breed: 'Labrador' },
  { id: '2', name: 'Mia', breed: 'Collie' },
  { id: '3', name: 'Tal', breed: 'Spaniel' }
]

app.use(bodyParser.json())

app.use((req, res, next) => { // Custom middleware to log our incoming requests
  console.log(`Incoming ${req.method} to ${req.url}`)
  next() // once it's logged, we call next to allow it on its way to the route handlers
})

// app.get('/', (req, res) => { // Only matching GET request to '/' ouyr automatically moving to the next thing
//   res.send('Welcome to the homepage')
// })

// app.get('/about', (req, res) => { // same as aboive but matching '/about'
//   res.send('Welcome to the About page')
// })

// Index route handler
app.get('/dogs', (req, res) => {
  return res.status(200).json(dogs)
})

// Index route handler
app.get('/dogs/:id', (req, res) => {
  const dog = dogs.find(dog => dog.id === req.params.id)
  if (!dog) return res.status(404).json({ message: 'not found' })
  res.status(200).json(dog)
  // console.log(dog)
})
// console.log(req.params.id)
// res.send('ok')

// Create route handler
app.post('/dogs', (req, res) => {
  const newDog = { ...req.body, id: `${dogs.length + 1}` }
  dogs = [ ...dogs, newDog]
  // console.log(newDog)
  // console.log(req.body)
  res.status(201).json(newDog)
})


app.use((req, res) => { // Bottom of the pipe function, if nothing above matched
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('404 not found')
})

app.listen(port, () => console.log(`Listening on port ${port}`))

// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// const port = 4000

// let dogs = [
//   { id: '1', name: 'Jack', breed: 'Labrador' },
//   { id: '2', name: 'Mia', breed: 'Collie' },
//   { id: '3', name: 'Tal', breed: 'Spaniel' }
// ]

// app.use(bodyParser.json()) // we have installed a 3rd party peice of middleware
// // body parser creates a 'body' object on our 'req' object, if one is sent.

// app.use((req, res, next) => { // Custom middleware to log our incoming requests
//   console.log(`Incoming ${req.method} to ${req.url}`)
//   next() // once it's logged, we call next to allow it on its way to the route handlers
// })

// // Index route handler, 
// app.get('/dogs', (req, res) => { // listening for the GET request to '/dogs'
//   return res.status(200).json(dogs) // just return the whole dogs array in the response
// })

// // Show route handler
// app.get('/dogs/:id', (req, res) => { // listening for get wuth dogs id
//   const dog = dogs.find(dog => dog.id === req.params.id) // using array find to get the dog by its id
//   if (!dog) return res.status(404).json({ message: 'Not Found' }) // if we dont find it we send a 404 not found
//   return res.status(200).json(dog) // if we do we send back the dog
// })

// // Create route handler
// app.post('/dogs', (req, res) => {
//   const newDog = { ...req.body, id: `${dogs.length + 1}` } // req,body comes from bodyParse
//   // creating a newDog object above with the data from req.body and adding an ID
//   dogs = [...dogs, newDog] // adding this to the array of dogs
//   res.status(201).json(newDog) //sending the single newly created dog as the response
// })

// app.use((req, res) => { // Bottom of the pipe function, if nothing above matched
//   res.writeHead(404, { 'Content-Type': 'text/plain' })
//   res.end('404 not found')
// })

// app.listen(port, () => console.log(`Listening on port ${port}`))