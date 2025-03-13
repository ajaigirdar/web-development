package movies.controller;


import movies.data.model.Movie;
import movies.data.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/fav_movies")
public class MovieController implements Serializable {

    @Autowired
    MovieRepository movieRepository;

    @GetMapping()
    public List<Movie> getResource() {
        return movieRepository.findAll();
    }

    // Create a new movie
    @PostMapping
    public Movie addMovie(@RequestBody Movie movie) {
        return movieRepository.save(movie);
    }

    // Update an existing movie
    @PutMapping("/{id}")
    public Movie updateMovie(@PathVariable Long id, @RequestBody Movie updatedMovie) {
        Optional<Movie> existingMovie = movieRepository.findById(id);
        if (existingMovie.isPresent()) {
            Movie movie = existingMovie.get();
            movie.setTitle(updatedMovie.getTitle());
            movie.setYear(updatedMovie.getYear());
            movie.setImdbRating(updatedMovie.getImdbRating());
            movie.setPlot(updatedMovie.getPlot());
            movie.setPoster(updatedMovie.getPoster());
            movie.setActors(updatedMovie.getActors());
            return movieRepository.save(movie);
        } else {
            return null;  // Movie not found
        }
    }

    // Delete a movie
    @DeleteMapping("/{id}")
    public String deleteMovie(@PathVariable Long id) {
        Optional<Movie> movie = movieRepository.findById(id);
        if (movie.isPresent()) {
            movieRepository.delete(movie.get());
            return "Movie deleted successfully";
        } else {
            return "Movie not found";
        }
    }

}
