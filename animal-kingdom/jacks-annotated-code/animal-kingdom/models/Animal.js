const mongoose = require('mongoose') // // needed to create a new schema and model

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true }
}, {
  timestamps: true
})

// creating a mongoose schema for an animal, this acts a blueprint of what we allow into our DB
const animalSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, maxlength: 20 }, // unique means it cannot be duplicated
  species: { type: String, required: true }, //required means it must be present
  isCarnivore: { type: Boolean, required: true  }, // setting a boolean type for this field
  image: { type: String, required: true },
  age: { type: Number, required: true }, // set as number
  dangerRating: { type: Number, required: true, min: 1, max: 5 }, // a number with min and max rules defined
  habitats: { type: [String] }, //this field is an array of strings
  comments: [ commentSchema ]
} , {
  timestamps: true  // provides a createdAt, and updatedAt field that work out of the box for free!
})

// exporting our schema for use and registering it as a 'Model' at the same time, the schema acts as a blueprint for the model, which becomes the name of our collection in DB, it is the model that contains all the mongoose actions like find() that gets used in our controllers, see /controllers/animals
module.exports = mongoose.model('Animal', animalSchema)