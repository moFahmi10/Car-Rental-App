package com.example.car_rental_system.reservation;

import com.example.car_rental_system.car.Car;
import com.example.car_rental_system.car.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "api/v1/reservation")
public class ReservationController  {

    private  final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }
    @GetMapping
    public List<Reservation> getReservations(){
        return reservationService.getReservations();
    }
    @GetMapping("/getReservationByPlate/{plate}/{pickup}/{return}")
    public String checkIfReserved(@PathVariable(value = "plate")String plate, @PathVariable(value="pickup") String pickup, @PathVariable(value="return") String return_date){ return reservationService.checkIfReserved(plate,pickup,return_date);}

    @GetMapping("/getReservationByEmail/{email}")
    public List<Reservation>  getReservationsUser(@PathVariable(value = "email")String email){ return reservationService.getReservationsUser(email);}

    @GetMapping("/getNumberOfReservations")
    public Integer getNumberOfReservations(){ return reservationService.countOfReservations();}
    @GetMapping("/getTotalincome")
    public Integer getTotalincome(){ return reservationService.getTotalProfit();}

    @PostMapping
    public void addNewReservation(@RequestBody Reservation reservation){
        System.out.println(reservation);
        reservationService.addNewReservation(reservation);
    }
    @GetMapping("/searchByAdminDate/{params}")
    public List<Map<String,Object>> searchByAdminDate(@PathVariable(value = "params") List<String> params){
        return reservationService.searchByAdminDate(params);
    }



}
