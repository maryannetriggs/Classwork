const Animal = require('../models/Animal') // we need the Animal models, attached to this are all the mongoose methods to query or create things in our DB. eg Animal.find(), Animal.create()

// index route - /animals
function index(req, res) {
  Animal
    .find() // finds all the animals
    .then(animals => res.status(200).json(animals)) // if found, sends back the animals in an JSON array
    .catch(() => res.status(404).json({ message: 'Not Found' })) // if any error, sends back 404 not found message
}

// create route - /animals
function create(req, res) {
  console.log(req.currentUser)
  Animal
    .create(req.body) // creates a new animal based on the JSON object sent as the body of the request
    .then(animal => res.status(201).json(animal)) // if it succesfully creates, sends back that new animal
    .catch(err => res.status(400).json(err)) // otherwise we send the errors 
}

// show route - /animals/:id
function show(req, res) {
  Animal
    .findById(req.params.id) // finds one single animal by the id parameter
    .then(animal => {
      if (!animal) return res.status(404).json({ message: 'Not Found ' }) // if for any reason that comes back 'null' we return a response of 404 not found
      res.status(200).json(animal) // otherwise send back the found single animal
    })
    .catch(() => res.status(404).json({ message: 'Not Found ' })) // any error sending a 404 not found message
}

// update route - /animals/id
function update(req, res) {
  Animal
    .findById(req.params.id) // first we find the animal we want to update by its ID in the request parameter, same as show route
    .then(animal => {
      if (!animal) return res.status(404).json({ message: 'Not Found' }) // if that animals returns as null, send a 404 not found message
      return animal.set(req.body) // the .set method comes from mongoose, it merges the old object with our new information for the update
    })
    .then(animal => animal.save()) // once we've set the animal with the new informtion, we save it, .save() is an inbuilt method just like set. Importantly it re runs our models validations, which the method findByIdAndUpdate does not 
    .then(animal => res.status(202).json(animal)) // once that animal has been saved, we send it back to the client to show that is updated.
    .catch(err => res.status(422).json(err)) // if anything goes wrong we send back the error response
}

// delete route - /animals/id
// note this function is not called delete as that is a reserved keyword in JS, we have used deleteRoute instead
function deleteRoute(req, res) {
  Animal
    .findByIdAndRemove(req.params.id) // special method to find by the id and remove in one step
    .then(() => res.sendStatus(204)) // just send back a 204 with no content to show it has been deleted
    .catch(err => res.status(400).json(err)) // send any errors if something goes wrong.
}

// Comment create - animals/:id/comments
function commentCreate(req, res) {
  Animal
    .findById(req.params.id)
    .then(animal => {
      if (!animal) return res.status(404).json({ message: 'Not Found' })
      animal.comments.push(req.body)
      return animal.save()
    })
    .then(animal => res.status(201).json(animal))
    .catch(err => res.json(err))
}

// Comment delete - animals/:id/comments/:commentId
function commentDelete(req, res) {
  Animal
    .findById(req.params.id)
    .then(animal => {
      if (!animal) return res.status(404).json({ message: 'Not Found' })
      const comment = animal.comments.id(req.params.commentId)
      comment.remove()
      return animal.save()
    })
    .then(animal => res.status(202).json(animal))
    .catch(err => res.json(err))
}

// exporting our 'Route Handler' functions to be used buy our Router, found in 'config/router.js'
module.exports = {
  index, // using es6 object shorthand, same as saying index:index
  create,
  show,
  update,
  delete: deleteRoute, // <=== counldnt use the shorthand here like the other routes, key and value are not called the same thing.
  commentCreate,
  commentDelete
} 