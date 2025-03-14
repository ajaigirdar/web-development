// AdminPanel.jsx
import React, { useState, useEffect } from 'react';
import '../App.css';

export default function AdminPanel() {
  // State for the list of movies
  const [movies, setMovies] = useState([]);
  
  // State for the form data
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    year: '',
    imdb_rating: '',
    plot: '',
    poster: '',
    ranking: ''
  });
  
  // Flag to indicate whether we are editing an existing movie
  const [isEditing, setIsEditing] = useState(false);

  // Function to fetch movies from the backend
  const fetchMovies = () => {
    fetch("http://localhost:8080/fav_movies")
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error("Error fetching movies:", error));
  };

  // Fetch movies when the component mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission for adding/updating a movie
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEditing ? `http://localhost:8080/fav_movies/${formData.id}` : 'http://localhost:8080/fav_movies';
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Reset form data and exit edit mode
        setFormData({
          id: null,
          title: '',
          year: '',
          imdb_rating: '',
          plot: '',
          poster: '',
          ranking: ''
        });
        setIsEditing(false);
        fetchMovies(); // Refresh movie list after update/add
      } else {
        console.error("Failed to save movie");
      }
    } catch (error) {
      console.error("Error saving movie:", error);
    }
  };

  // Load movie details into the form for editing
  const handleEdit = (movie) => {
    setFormData(movie);
    setIsEditing(true);
  };

  // Delete a movie
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/fav_movies/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        fetchMovies(); // Refresh movie list after deletion
      } else {
        console.error("Error deleting movie");
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <h2>{isEditing ? "Edit Movie" : "Add New Movie"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Year:</label>
          <input name="year" type="number" value={formData.year} onChange={handleChange} required />
        </div>
        <div>
          <label>IMDb Rating:</label>
          <input name="imdb_rating" type="number" step="0.1" value={formData.imdb_rating} onChange={handleChange} required />
        </div>
        <div>
          <label>Plot:</label>
          <textarea name="plot" value={formData.plot} onChange={handleChange} required />
        </div>
        <div>
          <label>Poster URL:</label>
          <input name="poster" value={formData.poster} onChange={handleChange} required />
        </div>
        <div>
          <label>Ranking:</label>
          <input name="ranking" type="number" value={formData.ranking} onChange={handleChange} required />
        </div>
        <button type="submit">{isEditing ? "Update Movie" : "Add Movie"}</button>
      </form>

      <h2>Existing Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title} ({movie.year}) - Ranking: {movie.ranking}
            <button onClick={() => handleEdit(movie)}>Edit</button>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
