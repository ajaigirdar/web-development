import React, { useEffect, useState } from 'react'

export default function MovieList() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // fetch data from backend
        fetch("http://localhost:8080/fav_movies")
        .then(response => response.json()) // convert response to json
        .then(data => setMovies(data)) // update movies state with fetched data
        .catch(error => console.error("Error fetching data:", error));
    }, []);

  return (
    <div className='body-container'>
      <h1>Movie List</h1>
      <ol className='movie-list'>
        {movies.map((movie) => (
          <li className='movie-item' key={movie.id}>
            <div className="poster-container">
              <img src={movie.poster} alt={movie.title} className="poster" />
            </div>
            <div className="details-container">
              <h2 className="title">
                {movie.title} ({movie.year}) - Ranking: {movie.ranking}
              </h2>
              <p>
                <strong>IMDb Rating:</strong> {movie.imdb_rating}/10
              </p>
              <p>
                <strong>Plot:</strong> {movie.plot}
              </p>
              <p>
                <strong>Actors:</strong> {movie.actors}
              </p>
              
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
