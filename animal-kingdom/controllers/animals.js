const Animal = require('../models/Animal') // we need the Animal models, attached to this are all the mongoose methods to query or create things in our DB. eg Animal.find(), Animal.create()

// index route - /animals
function index(req, res) {
  Animal
    .find() // finds all the animals
    .populate('user')
    .then(animals => res.status(200).json(animals)) // if found, sends back the animals in an JSON array
    .catch(() => res.status(404).json({ message: 'Not Found' })) // if any error, sends back 404 not found message
}

// create route - /animals
function create(req, res, next) {
  req.body.user = req.currentUser //attaching a user key to the body, making it values currentUser from secureRoute
  Animal
    .create(req.body) // creates a new animal based on the JSON object sent as the body of the request
    .then(animal => res.status(201).json(animal)) // if it succesfully creates, sends back that new animal
    .catch(next) // otherwise we send the errors 
}

// show route - /animals/:id
function show(req, res) {
  Animal
    .findById(req.params.id) // finds one single animal by the id parameter
    .populate('user')
    .populate('comments.user')
    .then(animal => {
      if (!animal) return res.status(404).json({ message: 'Not Found ' }) // if for any reason that comes back 'null' we return a response of 404 not found
      res.status(200).json(animal) // otherwise send back the found single animal
    })
    .catch(() => res.status(404).json({ message: 'Not Found ' })) // any error sending a 404 not found message
}

// update route - /animals/id
function update(req, res, next) {
  Animal
    .findById(req.params.id) // first we find the animal we want to update by its ID in the request parameter, same as show route
    .then(animal => {
      if (!animal) return res.status(404).json({ message: 'Not Found' }) // if that animals returns as null, send a 404 not found message
      if (!animal.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' }) // now that we know who the user that created the resource is, and who the current user is as this is a secure route, we can no check if they are the same use, before allowing them to edit or delete this resource.
      return animal.set(req.body) // the .set method comes from mongoose, it merges the old object with our new information for the update
    })
    .then(animal => animal.save()) // once we've set the animal with the new informtion, we save it, .save() is an inbuilt method just like set. Importantly it re runs our models validations, which the method findByIdAndUpdate does not 
    .then(animal => res.status(202).json(animal)) // once that animal has been saved, we send it back to the client to show that is updated.
    .catch(next) // if anything goes wrong we send back the error response
}

// delete route - /animals/id
// note this function is not called delete as that is a reserved keyword in JS, we have used deleteRoute instead
function deleteRoute(req, res) {
  Animal
    .findById(req.params.id) // special method to find by the id and remove in one step
    .then(animal => {
      if (!animal.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' }) // see above function for the same line
      return animal.remove()
    })
    .then(() => res.sendStatus(204)) // just send back a 204 with no content to show it has been deleted
    .catch(err => res.status(400).json(err)) // send any errors if something goes wrong.
}

// comment create - /animals/:id/comments 
function commentCreate(req, res, next) {
  req.body.user = req.currentUser
  Animal
    .findById(req.params.id) // first find the animal by its id
    .then(animal => {
      if (!animal) return res.status(404).json({ message: 'Not Found' }) // return res 404 iuf not found
      animal.comments.push(req.body) // otherwise push the new comment into the body
      return animal.save() //  then resave the animal with the new comment
    })
    .then(animal => res.status(201).json(animal)) // send that animal with the new comment back
    .catch(next) // send any errors
}

// comment delete - /aniamls/:id/comments/:commentId
function commentDelete(req, res) {
  Animal
    .findById(req.params.id) // find the animal with the comment to be deleted
    .then(animal => {
      if (!animal) return res.status(404).json({ message: 'Not Found' })
      const comment = animal.comments.id(req.params.commentId) // find the comment on that animal that needs to be deleted
      comment.remove() // remove that comment
      return animal.save() //resave the animal with that new comment removed
    })
    .then(animal => res.status(202).json(animal)) //send back the animal without the removed comment
    .catch(err => res.json(err)) //send any errors
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