package com.example.car_rental_system.reservation;

import com.example.car_rental_system.car.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class ReservationService {
    private final ReservationRepository reservationRepository;

    @Autowired
    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }
    public List<Reservation> getReservationsUser(String email){
        return reservationRepository.getReservationsByEmail(email);
    }
    public Integer countOfReservations(){
        return reservationRepository.getNumberOfReservations();
    }
    public Integer getTotalProfit(){
        return reservationRepository.getTotalincome();
    }
    public List<Reservation> getReservations(){
        return reservationRepository.findAll();
    }

    public void addNewReservation(Reservation reservation){
        reservationRepository.insert(reservation.getPlate(),reservation.getEmail(),reservation.getPickup_date(),reservation.getReturn_date(),reservation.getPaid(),reservation.getTotal_price());
    }
    public String checkIfReserved(String  plate,String pickup_date,String return_date){

        List<Reservation> reservations = reservationRepository.getReservationsByPlate(plate,pickup_date,return_date);
       // System.out.println(reservations);
        String message="";
        if (reservations.isEmpty()) {
            message = null;
        }
        else {
           message =  message.concat("This car is reserved! \n");
            for (int i = 0; i<reservations.size();i++){
                message = message.concat("From "+reservations.get(i).getPickup_date()+" to "+reservations.get(i).getReturn_date()+"\n");
            }

        }
        return   message;
    }

    public List<Map<String,Object>>searchByAdminDate(List<String> params) {
        String pickup_date = params.get(0);
        String return_date = params.get(1);
        //List<Reservation> reservations = reservationRepository.getAll();
//        if (params.get(0).equals("")) {
//            for (int i = 0; i < reservations.size(); i++) {
//                pickup_date.add(reservations.get(i).getPickup_date());
//            }
//        } else {
//            pickup_date.add(LocalDate.parse(params.get(0)));
//        }
//        if (params.get(1).equals("")) {
//            for (int i = 0; i < reservations.size(); i++) {
//                return_date.add(reservations.get(i).getReturn_date());
//            }
//        } else {
//            return_date.add(LocalDate.parse(params.get(1)));
//        }

        List<Map<String, Object>> result = reservationRepository.filter(pickup_date, return_date);
        return result;
    }



}
