import '../App.css';
import React, { useState, useEffect } from 'react';
import moviesData from '../assets/movies.json';

export default function Body() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(moviesData);
    }, []);


    return (
        <div className='body'>
            <ol>
                
            </ol>
        </div>
    )
}