package com.codeclan.example.hair_goals_backend;

import com.codeclan.example.hair_goals_backend.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.jws.soap.SOAPBinding;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    UserRepository userRepository;

    @Autowired
    MeasurementRepository measurementRepository;

    public DataLoader() {

    }
    public void run (ApplicationArguments args){
//        User user1 = new User("Bob", 30, 50 );
//        user1.setTimeTillGoal();
//        userRepository.save(user1);
//
//        User user2 = new User("Bobbette", 40, 60 );
//        userRepository.save(user2);
//
//
//        Measurement measurement1 = new Measurement(30, "08/03/2021", user1);
//        measurementRepository.save(measurement1);
//
//        Measurement measurement2 = new Measurement(35, "09/03/2021", user1);
//        measurementRepository.save(measurement2);
//
//        Measurement measurement3 = new Measurement(42, "08/03/2021", user2);
//        measurementRepository.save(measurement3);
//
//        Measurement measurement4 = new Measurement(45, "09/03/2021", user2);
//        measurementRepository.save(measurement4);
//
//        user1.addMeasurement(measurement1);
//        user1.addMeasurement(measurement2);
//        userRepository.save(user1);
//
//        user2.addMeasurement(measurement3);
//        user2.addMeasurement(measurement4);
//        userRepository.save(user2);




    }
}
