const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, maxlength: 20 },
  species: { type: String, required: true },
  isCarnivore: { type: Boolean, required: true },
  image: { type: String, required: true },
  age: { type: Number, required: true },
  dangerRating: { type: Number, required: true, min: 1, max: 5 },
  habitats: { type: [String] }
})



module.exports = mongoose.model('Animal', animalSchema)