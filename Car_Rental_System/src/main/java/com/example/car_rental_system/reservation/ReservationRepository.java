package com.example.car_rental_system.reservation;

import com.example.car_rental_system.car.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    @Modifying
    @Transactional
    @Query(value = "Insert into Reservation (plate,email,pickup_date,return_date,paid,total_price) values(:plate,:email,:pickup_date,:return_date,:paid,:total_price)",nativeQuery = true)

     void insert(@Param("plate")String plate, @Param("email") String email, @Param("pickup_date") LocalDate pickup_date, @Param("return_date") LocalDate return_date, @Param("paid") String paid,@Param("total_price")int total_price);

    @Query(value="select * from car",nativeQuery = true)
    List<Reservation> getAll();

    @Query(value = "SELECT * From reservation where plate = :plate AND  ( (pickup_date <= :pickup  AND return_date >= :pickup) OR (pickup_date <=  :returnn AND return_date >= :returnn) ) ",nativeQuery = true)
    List<Reservation> getReservationsByPlate(@Param("plate") String plate,@Param("pickup") String pickup,@Param("returnn") String  returnn);
    @Query(value = "SELECT * From reservation where email = :email  ",nativeQuery = true)
    List<Reservation> getReservationsByEmail(@Param("email") String email);
    @Query(value = "SELECT reservation.email , reservation.plate , reservation.reservation_number,reservation.pickup_date,reservation.return_date,reservation.paid,reservation.total_price,car.model,car.manufacturer,car.year,car.color,car.car_status,`user`.fname,`user`.lname,`user`.bdate FROM ((`car` NATURAL JOIN reservation)NATURAL JOIN `user`) where( (reservation.pickup_date BETWEEN :pickup_date  AND :return_date) ) ORDER by reservation.email asc ",nativeQuery = true)
    List<Map<String,Object>> filter(@Param("pickup_date") String pickup_date, @Param("return_date") String return_date);


    @Query(value = "SELECT COUNT(reservation.reservation_number) AS NumberOfReservations FROM reservation ",nativeQuery = true)
    Integer getNumberOfReservations();
    @Query(value = "SELECT sum(reservation.total_price) AS total_profit FROM reservation ",nativeQuery = true)
    Integer getTotalincome();

}
