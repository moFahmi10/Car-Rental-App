package com.example.car_rental_system.office;

import javax.persistence.*;

@Entity
@Table(name = "office")
public class Office {
    @Id
    String region;
    String office_number;

    public Office() {
    }
    public Office(String region , String office_number) {
        this.region = region;
        this.office_number = office_number;
    }
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id", nullable = false, precision = 0)

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getOffice_number() {
        return office_number;
    }

    public void setOffice_number(String office_number) {
        this.office_number = office_number;
    }
    @Override
    public String toString() {
        return "Office{" +
                "region='" + region + '\'' +
                ", office_number='" + office_number + '\'' +
                '}';
    }
}
