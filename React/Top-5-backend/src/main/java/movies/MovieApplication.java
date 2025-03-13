package movies;

import movies.service.DataLoaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MovieApplication implements CommandLineRunner {

    @Autowired
    private DataLoaderService dataLoaderService;

    public static void main(String[] args) {

        SpringApplication.run(MovieApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        dataLoaderService.loadDataFromJson();
    }
}
