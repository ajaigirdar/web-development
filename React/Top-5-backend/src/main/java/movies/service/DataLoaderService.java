package movies.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import movies.model.Movie;
import movies.data.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class DataLoaderService {

    @Autowired
    private MovieRepository movieRepository;

    public void loadDataFromJson() {
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            File file = new File("src/main/resources/assets/movies.json");

            // Read the JSON file into an array of Movie objects
            Movie[] moviesArray = objectMapper.readValue(file, Movie[].class);

            // Iterate over each movie from the JSON file
            for (Movie movieFromJson : moviesArray) {

                // Use title as the unique identifier for checking duplicates
                Optional<Movie> existingMovieOpt = movieRepository.findByTitle(movieFromJson.getTitle());
                if (existingMovieOpt.isPresent()) {
                    // Update the existing movie's fields with new data from JSON
                    Movie existingMovie = existingMovieOpt.get();
                    existingMovie.setYear(movieFromJson.getYear());
                    existingMovie.setImdbRating(movieFromJson.getImdbRating());
                    existingMovie.setPlot(movieFromJson.getPlot());
                    existingMovie.setPoster(movieFromJson.getPoster());
                    existingMovie.setActors(movieFromJson.getActors());
                    existingMovie.setRanking(movieFromJson.getRanking());
                    movieRepository.save(existingMovie);
                } else {
                    movieRepository.save(movieFromJson);
                }
            }

            System.out.println("Movies have been successfully loaded/updated in the database!");

        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("Error reading the JSON file.");
        }
    }
}
