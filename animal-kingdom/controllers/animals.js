const Animal = require('../models/Animal')

// Index route - /animals
function index(req, res) {
  Animal
    .find()
    .then(animals => res.status(200).json(animals))
    .catch(err => console.log(err))
}

// Create route - /animals
function create(req, res) {
  Animal 
    .create(req.body)
    .then(animal => res.status(201).json(animal))
    .catch(err => console.log(err))
}

// Show route - /animals/:id
function show(req, res) {
  Animal
    .findById(req.params.id)
    .then(animal => {
      if (!animal) return res.status(404).json({ message: '404 - Not Found' })
      res.status(200).json(animal)
    })
    .catch(err => res.json(err))
}

// update route = /animals/:id
function update(req, res) {
  Animal
    .findById(req.params.id)
    .then(animal => {
      if (!animal) return res.status(404).json({ message: 'Not Found' })
      return animal.set(req.body)
    })
    .then(animal => animal.save())
    .then(animal => res.status(202).json(animal))
    .catch(err => res.status(422).json(err))
}

// Delete route - /animals/:id

function remove(req, res) {
  Animal
    .findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json(err))
}

module.exports = { // Shortcut because key and value are the same thing
  index,
  create,
  show,
  update,
  remove
}