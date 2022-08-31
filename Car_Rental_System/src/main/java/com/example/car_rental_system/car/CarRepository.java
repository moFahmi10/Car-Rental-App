package com.example.car_rental_system.car;

import com.example.car_rental_system.car.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

@Repository
public interface CarRepository  extends JpaRepository<Car,String> {

    @Modifying
    @Transactional
    @Query(value = "Insert into car (plate,model,manufacturer,year,color,car_status,region,price,image) values(:plate,:model,:manufacturer,:year,:color,:car_status,:region,:price,:image)",nativeQuery = true)
    void insert(@Param("plate")String plate, @Param("model") String model, @Param("manufacturer") String manufacturer,@Param("year") int year, @Param("color") String color,@Param("car_status") String car_status,@Param("region") String region,@Param("price") int price,@Param("image") String image);

    @Query(value="select * from car",nativeQuery = true)
    List<Car> getAll();
    @Query(value="select * from car where region = :region",nativeQuery = true)
    List<Car> getByRegion(@Param("region") String region);


    @Query(value="select * from car where manufacturer= :brand",nativeQuery = true)
    List<Car> getByBrand(@Param("brand") String brand);

    @Query(value="select * from car where model= :model",nativeQuery = true)
    List<Car> getByModel(@Param("model") String model);

    @Query(value="select * from car where color = :color",nativeQuery = true)
    List<Car> getByColor(@Param("color") String color);

    @Query(value="select * from car where year = :year",nativeQuery = true)
    List<Car> getByYear(@Param("year") int year);

    @Query(value = "select * from car where (manufacturer in :brands AND model in :models AND   region in :region AND  color in :color AND year in :years)",nativeQuery = true)
    List<Car> filter(@Param("brands") List<String> brands,@Param("models") List<String> models,@Param("region") List<String> region,@Param("color") List<String> color,@Param("years") List<Integer> years);

    @Query(value = "SELECT reservation.email , car.plate , car.image,reservation.reservation_number,reservation.pickup_date,reservation.return_date,reservation.paid,reservation.total_price,car.model,car.manufacturer,car.year,car.color,car.car_status FROM (`car` NATURAL LEFT JOIN reservation) where( car.manufacturer in :manufacturer AND car.model in :model AND car.plate in :plate  AND car.color in :color AND car.year in :year ) ORDER by reservation.email asc ",nativeQuery = true)
    List<Map<String,Object>> filter1(@Param("manufacturer") List<String> manufacturer, @Param("model") List<String> model, @Param("plate") List<String> plate, @Param("color") List<String> color, @Param("year") List<Integer> year);


    @Modifying
    @Transactional
    @Query(value = "update car set  car_status =:status where plate = :plate",nativeQuery = true)
    void changeCarStatus(@Param("plate") String plate,@Param("status") String status);




}
