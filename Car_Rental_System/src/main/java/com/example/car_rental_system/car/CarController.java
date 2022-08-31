package com.example.car_rental_system.car;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "api/v1/car")
public class CarController {

    private  final CarService carService;

    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }
    @GetMapping("/getAllCars")
    public List<Car> getCars(){
        return carService.getCars();
    }

    @GetMapping("/getByRegion/{region}")
    public List<Car> getByRegion(@PathVariable(value = "region")String region){
        if(region.equals(""))
            return carService.getCars();
        return carService.getByRegion(region);
    }

    @GetMapping("/search/{params}")
    public List<Car> search(@PathVariable(value = "params") List<String> params){
        return carService.search(params);
    }

    @GetMapping("/searchByAdmin/{params}")
    public List<Map<String,Object>> searchByAdmin(@PathVariable(value = "params") List<String> params){
        return carService.searchByAdmin(params);
    }

    @GetMapping("/changeCarStatus/{plate}/{status}")
    public void changeCarStatus(@PathVariable(value = "plate") String plate,@PathVariable(value = "status") String status){
            carService.changeCarStatus(plate,status);

    }


    @PostMapping
    public void addNewCar(@RequestBody Car car){
        System.out.println(car);
        carService.addNewCar(car);
    }


}
