package com.codeclan.example.hair_goals_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MeasurementController {
    @Autowired
    MeasurementRepository measurementRepository;

    @Autowired
    UserRepository userRepository;

    public User user;

    @GetMapping(value = "/measurements")
    public ResponseEntity<List<Measurement>> getAllMeasurements(){
        return new ResponseEntity<>(measurementRepository.findAll(), HttpStatus.OK);
    }
    @GetMapping(value = "/measurements/{id}")
    public ResponseEntity getMeasurement(@PathVariable Long id){
        return new ResponseEntity<>(measurementRepository.findById(id), HttpStatus.OK);
    }
    @PostMapping(value = "/measurements")
    public ResponseEntity<Measurement> createMeasurement(@RequestBody Measurement measurement){
        measurementRepository.save(measurement);
        User user = measurement.getUser();
        user.setHairLength(measurement.getLength());
        user.setTimeTillGoal();
        user.setKeyLength();
//      measurement.getUser().setGrowthRate(measurement.getUser().getMeasurements()[-1].length - measurement.getUser().getMeasurements()[-2].length);
        userRepository.save(user);
        return new ResponseEntity<>(measurement, HttpStatus.CREATED);
    }
    @PatchMapping(value = "/measurements/{id}")
    public ResponseEntity<Measurement> updateMeasurement(@RequestBody Measurement measurement){
        measurementRepository.save(measurement);
        return new ResponseEntity<>(measurement, HttpStatus.OK);
    }
    @DeleteMapping(value = "/measurements/{id}")
    public ResponseEntity<Measurement> deleteMeasurement(@PathVariable Long id) {
        Measurement measurementToDelete = measurementRepository.getOne(id);
        measurementRepository.delete(measurementToDelete);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
