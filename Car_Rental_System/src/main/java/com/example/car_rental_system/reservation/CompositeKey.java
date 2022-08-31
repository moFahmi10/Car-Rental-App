package com.example.car_rental_system.reservation;

import java.io.Serializable;
import java.time.LocalDate;

public class CompositeKey implements Serializable {
    private String plate;
    private String email;
    private LocalDate pickup_date;

}