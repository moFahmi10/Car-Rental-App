package com.example.car_rental_system.office;

import com.example.car_rental_system.car.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "api/v1/office")

public class OfficeController {
    private  final OfficeService officeService;



        @Autowired
        public OfficeController(OfficeService officeService) {
            this.officeService = officeService;
        }

        @GetMapping
        public List<Office> getOffice(){
            return officeService.getOffices();
        }

     @PostMapping
        public void addNewCar(@RequestBody Office office){
        System.out.println(office);
        officeService.addNewOffice(office);
    }

    }
