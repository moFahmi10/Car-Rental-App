package com.example.car_rental_system.car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class CarService {
    private final CarRepository carRepository;

    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }
    public List<Car> getCars(){
        return carRepository.getAll();
    }

    public void addNewCar(Car car){
        carRepository.insert(car.getPlate(),car.getModel(),car.getManufacturer(),car.getYear(),car.getColor(), car.getCar_status(),car.getRegion(),car.getPrice(),car.getImage());
    }
    public List<Car> getByRegion(String region){


        return carRepository.getByRegion(region);
    }
    public List<Car>search(List<String> params){
        List<String> manufacturers = new ArrayList<>();
        List<String> models = new ArrayList<>();
        List<String> colors = new ArrayList<>();
        List<String> region = new ArrayList<>();
        List<Integer> years = new ArrayList<>();
        List<Car> cars = carRepository.getAll();
      if (params.get(0).equals(""))
      {
          for(int i = 0; i< cars.size() ;i++){
             manufacturers.add(cars.get(i).getManufacturer());
          }
      }else {
          manufacturers.add(params.get(0));
      }
        if (params.get(1).equals(""))
        {
            for(int i = 0; i< cars.size() ;i++){
                models.add(cars.get(i).getModel());
            }
        }
        else{
            models.add(params.get(1));
        }
        if (params.get(2).equals(""))
        {
            for(int i = 0; i< cars.size() ;i++){
                region.add(cars.get(i).getRegion());
            }
        }
        else{
            region.add(params.get(2));
        }
        if (params.get(3).equals(""))
        {
            for(int i = 0; i< cars.size() ;i++){
                colors.add(cars.get(i).getColor());
            }
        }
        else{
            colors.add(params.get(3));
        }
        if (params.get(4).equals(""))
        {
            for(int i = 0; i< cars.size() ;i++){
                years.add(cars.get(i).getYear());
            }
        }
        else {
            years.add(Integer.parseInt(params.get(4)));
        }
         List<Car> result  = carRepository.filter(manufacturers,models,region,colors,years);
        return result;
    }

    public void changeCarStatus(String plate,String status){
          carRepository.changeCarStatus(plate,status);

    }

    public List<Map<String,Object>>searchByAdmin(List<String> params){
        List<String> manufacturers = new ArrayList<>();
        List<String> models = new ArrayList<>();
        List<String> plates = new ArrayList<>();
        List<String> colors = new ArrayList<>();
        List<String> region = new ArrayList<>();
        List<Integer> years = new ArrayList<>();
        List<Car> cars = carRepository.getAll();
        if (params.get(0).equals(""))
        {
            for(int i = 0; i< cars.size() ;i++){
                manufacturers.add(cars.get(i).getManufacturer());
            }
        }else {
            manufacturers.add(params.get(0));
        }
        if (params.get(1).equals(""))
        {
            for(int i = 0; i< cars.size() ;i++){
                models.add(cars.get(i).getModel());
            }
        }
        else{
            models.add(params.get(1));
        }
        if (params.get(2).equals(""))
        {
            for(int i = 0; i< cars.size() ;i++){
                plates.add(cars.get(i).getPlate());
            }
        }
        else{
            plates.add(params.get(2));
        }
        if (params.get(3).equals(""))
        {
            for(int i = 0; i< cars.size() ;i++){
                colors.add(cars.get(i).getColor());
            }
        }
        else{
            colors.add(params.get(3));
        }
        if (params.get(4).equals(""))
        {
            for(int i = 0; i< cars.size() ;i++){
                years.add(cars.get(i).getYear());
            }
        }
        else {
            years.add(Integer.parseInt(params.get(4)));
        }
        List<Map<String,Object>> result  = carRepository.filter1(manufacturers,models,plates,colors,years);
        return result;
    }


}
