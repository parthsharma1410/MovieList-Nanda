const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ParthSharma:ParthSharma@cluster0.vgnz8.mongodb.net/MovieList?retryWrites=true&w=majority", {
  keepAlive: true, // keeping the connection alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("debug", true) 
mongoose.Promise = Promise 

module.exports.Movies = require("./movies")