const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 4000
const db = require("./models/")
const cors = require("cors")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function success(res, payload) {
  return res.status(200).json(payload)
}

app.get("/", async (req, res, next) => {
  try {
    const movies = await db.Movies.find({})
    return success(res, movies)
  } catch (err) {
    next({ status: 400, message: "failed to get movies" })
  }
})

app.post("/", async (req, res, next) => {
    // console.log(req.body)
  try {
    const movie = await db.Movies.create(req.body)
    return success(res, movie)
  } catch (err) {
    next({ status: 400, message: "failed to create " })
  }
})

app.delete("/:id", async (req, res, next) => {
  try {
    await db.Movies.findByIdAndRemove(req.params.id)
    return success(res, "Movie deleted")
  } catch (err) {
    next({ status: 400, message: "failed to delete movie" })
  }
})


app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request",
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})