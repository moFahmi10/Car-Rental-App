package com.example.car_rental_system.reservation;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "reservation")
@IdClass(CompositeKey.class)
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    int reservation_number;
    String plate;
    String email;
    LocalDate pickup_date;
    LocalDate return_date;
    String paid;
    int total_price;


    public Reservation() {
    }

    public Reservation(String plate, String email, LocalDate pickup_date, LocalDate return_date, String paid, int reservation_number, int price) {
        this.plate = plate;
        this.email = email;
        this.pickup_date = pickup_date;
        this.return_date = return_date;
        this.paid = paid;
        this.reservation_number = reservation_number;
        this.total_price = price;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id", nullable = false, precision = 0)
    public int getReservation_number() {
        return reservation_number;
    }

    public void setReservation_number(int reservation_number) {
        this.reservation_number = reservation_number;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getPickup_date() {
        return pickup_date;
    }

    public void setPickup_date(LocalDate pickup_date) {
        this.pickup_date = pickup_date;
    }


    public LocalDate getReturn_date() {
        return return_date;
    }

    public void setReturn_date(LocalDate return_date) {
        this.return_date = return_date;
    }

    public String getPaid() {
        return paid;
    }

    public void setPaid(String paid) {
        this.paid = paid;
    }

    public int getTotal_price() {
        return total_price;
    }

    public void setTotal_price(int price) {
        this.total_price = price;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "plate='" + plate + '\'' +
                ", email='" + email + '\'' +
                ", pickup_date=" + pickup_date +
                ", return_date=" + return_date +
                ", paid='" + paid + '\'' +
                ", reservation_number=" + reservation_number +
                ", price=" + total_price +
                '}';
    }
}
