import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import APIHelper from "../APIHelper"

export default function Form() {

  const [movies, setMovies] = useState([])
  const [MovieName, setMovieName] = useState("")
  const [Language, setLanguage] = useState("")
  const [ReleaseDate, setReleaseDate] = useState("")
  const [Budget, setBudget] = useState("")
  const [Collection, setCollection] = useState("")

  useEffect(() => {
    const fetchMovieAndSetMovies = async () => {
      const movies = await APIHelper.getAllMovies()
      console.log(movies)
      setMovies(movies)
    }
    fetchMovieAndSetMovies()
  }, [])

  

  const createMovie = async e => {
    e.preventDefault()
    if (!MovieName) {
      alert("please enter a movie name")
      return
    }
    const newMovie = await APIHelper.createMovie(MovieName, Language, ReleaseDate, Budget, Collection)
    setMovies([...movies, newMovie])
  }

  const deleteMovie = async (e, id) => {
    try {
      e.stopPropagation()
      await APIHelper.deleteMovie(id)
      setMovies(movies.filter(({ _id: i }) => id !== i))
    } catch (err) {}
  }


  return (
    <div className="container">
       <form>
         <div class="mb-3">
              <label for="MovieName" class="form-label">Movie Name</label>
               <input type="string" class="form-control" id="MovieName" aria-describedby="MovieName" onChange={({ target }) => setMovieName(target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="Language" class="form-label">Language</label>
                    <input type="string" class="form-control" id="Language" onChange={({ target }) => setLanguage(target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="ReleaseDate" class="form-label">Release Date</label>
                    <input type="date" class="form-control" id="ReleaseDate" onChange={({ target }) => setReleaseDate(target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="Budget" class="form-label">Budget</label>
                    <input type="number" class="form-control" id="Budget" onChange={({ target }) => setBudget(target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="Collection" class="form-label">Collection</label>
                    <input type="number" class="form-control" id="Collection" onChange={({ target }) => setCollection(target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={createMovie}>Submit</button>
            </form>

            {movies.map(({ _id, MovieName, Language, ReleaseDate, Budget, Collection}, i) => (
          <div className="comment mb-4 text-justify animate__animated animate__fadeInLeft animate__delay-1s" >
            <h4 className="heading">{movies[i].MovieName}</h4> <br />
            <p className="pt-4 pb-0 text">
            {movies[i].Language}
            </p>
            <p className="pt-4 pb-0 text">
            {movies[i].ReleaseDate}
            </p>
            <p className="pt-4 pb-0 text">
            {movies[i].Budget}
            </p>
            <p className="pt-4 pb-0 text">
            {movies[i].Collection}
            </p>
            <button className='btndelete' id='crossButton' onClick={e => deleteMovie(e, _id)}> Delete </button>
           </div>
        ))}
    </div>
  );
}