package movies.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import movies.data.model.Movie;
import movies.data.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Service
public class DataLoaderService {

    @Autowired
    private MovieRepository movieRepository;

    public void loadDataFromJson() {

        ObjectMapper objectMapper = new ObjectMapper();

        try {

            File file = new File("src/main/resources/assets/movies.json");

            // JSON file into an array of Movie objects
            Movie[] moviesArray = objectMapper.readValue(file, Movie[].class);

            // Convert to a List
            List<Movie> movies = Arrays.asList(moviesArray);

            movieRepository.saveAll(movies);

            System.out.println("Movies have been successfully loaded into the database!");

        } catch (IOException e) {

            e.printStackTrace();
            System.out.println("Error reading the JSON file.");
        }
    }
}
