
import axios from "axios"

const API_URL = "http://localhost:4000/"

async function createMovie(MovieName, Language, ReleaseDate, Budget, Collection) {
  const { data: newMovie } = await axios.post(API_URL, {
    MovieName,
	Language,
	ReleaseDate,
	Budget,
	Collection,
  })
  return newMovie
}

async function deleteMovie(id) {
  const message = await axios.delete(`${API_URL}${id}`)
  return message
}

async function updateMovie(id, payload) {
    const { data: newMovie } = await axios.put(`${API_URL}${id}`, payload)
    return newMovie
  }

async function getAllMovies() {
  const { data: movies } = await axios.get(API_URL)
  return movies
}

export default { createMovie, getAllMovies, deleteMovie }