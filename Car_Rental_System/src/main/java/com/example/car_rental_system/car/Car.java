package com.example.car_rental_system.car;

import javax.persistence.*;


@Entity
@Table(name = "car")
public class Car {
    @Id
    String plate;
    String model;
    String manufacturer;
    int year;
    String color;
    String car_status;
    String region;
    int price;
    String image;


    public Car() {
    }

    public Car(String plate, String model, String manufacturer, int year, String color, String car_status, String region, int price) {
        this.plate = plate;
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.color = color;
        this.car_status = car_status;
        this.region = region;
        this.price = price;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id", nullable = false, precision = 0)
    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getCar_status() {
        return car_status;
    }

    public void setCar_status(String car_status) {
        this.car_status = car_status;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Car{" +
                "plate='" + plate + '\'' +
                ", model='" + model + '\'' +
                ", manufacturer=" + manufacturer +
                ", year='" + year + '\'' +
                ", color='" + color + '\'' +
                ", car_status='" + car_status + '\'' +
                ", region='" + region + '\'' +
                ", price='" + price + '\'' +
                '}';
    }
}
