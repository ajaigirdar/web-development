import '../App.css';
import React, { useState, useEffect } from 'react';
import moviesData from '../assets/movies.json';

export default function Body() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(moviesData);
    }, []);


    return (
        <div className='body-container'>
            <ol className='movie-list'>
                {movies.map((movie) => (
                    <li className='movie-item'>
                        {/* Left Column - Poster */}
                        <div className="poster-container">
                        <img src={movie.poster} alt={movie.title} className="poster" />
                        </div>

                        {/* Right Column - Movie Details */}
                        <div className="details-container">
                        <h2 className="title">{movie.title} ({movie.year})</h2>
                        <p><strong>IMDb Rating:</strong> {movie.imdb_rating}/10</p>
                        <p><strong>Plot:</strong> {movie.plot}</p>
                        <p><strong>Actors:</strong> {movie.actors.join(", ")}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}