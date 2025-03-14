package movies.controller;

import movies.model.Movie;
import movies.data.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    // Read all movies
    @GetMapping()
    public ResponseEntity<List<Movie>> getResource() {
        List<Movie> movies = movieRepository.findAll();
        return ResponseEntity.ok(movies); // 200
    }

    // Create a new movie
    @PostMapping
    public ResponseEntity<Movie> addMovie(@RequestBody Movie movie) {
        Movie savedMovie = movieRepository.save(movie);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedMovie); // 201
    }

    // Update an existing movie
    @PutMapping("/{id}")
    public ResponseEntity<Movie> updateMovie(@PathVariable Long id, @RequestBody Movie updatedMovie) {
        Optional<Movie> existingMovie = movieRepository.findById(id);
        if (existingMovie.isPresent()) {
            Movie movie = existingMovie.get();
            movie.setTitle(updatedMovie.getTitle());
            movie.setYear(updatedMovie.getYear());
            movie.setImdbRating(updatedMovie.getImdbRating());
            movie.setPlot(updatedMovie.getPlot());
            movie.setPoster(updatedMovie.getPoster());
            movie.setActors(updatedMovie.getActors());
            movie.setRanking(updatedMovie.getRanking());
            Movie savedMovie = movieRepository.save(movie);
            return ResponseEntity.ok(savedMovie); // 200
        } else {
            return ResponseEntity.notFound().build(); // 404
        }
    }

    // Delete a movie
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMovie(@PathVariable Long id) {
        Optional<Movie> movie = movieRepository.findById(id);
        if (movie.isPresent()) {
            movieRepository.delete(movie.get());
            return ResponseEntity.ok("Movie deleted successfully"); // 200
        } else {
            return ResponseEntity.notFound().build(); // 404
        }
    }

}
