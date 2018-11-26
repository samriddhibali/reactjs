//package com.example.demo.data;
//
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//import java.util.stream.Stream;
//
//@Component
//public class data_runner implements CommandLineRunner {
//    private final data_repo repository;
//    public data_runner(data_repo repository) {
//        this.repository = repository;
//    }
//    
//    @Override
//    public void run(String... strings) {
//        Stream.of("abc", "def", "xyz").forEach(name ->
//                repository.save(new data(name))
//        );
//        repository.findAll().forEach(System.out::println);
//    }
//}
