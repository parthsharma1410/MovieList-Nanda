
const mongoose = require("mongoose") // requiring the mongoose package

const moviesSchema = new mongoose.Schema({
  // creating a schema for todo

    MovieName: {
    type: String, 
    unique: true,
    required: true, // it is required
  },
  Language: {
    type: String, 
    required: true, // it is required
  },
  ReleaseDate: {
    type: Date,
    required: true, // it is required
  },
  Budget: {
    type: Number,
    required: true, // it is required
  },
  Collection: {
    type: Number, 
    required: true, // it is required
  },
})

const moviesModel = mongoose.model("Movies", moviesSchema) // creating the model from the schema

module.exports = moviesModel // exporting the model