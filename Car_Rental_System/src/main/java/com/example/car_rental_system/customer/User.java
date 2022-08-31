package com.example.car_rental_system.customer;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "user")

public class User {
    @Id
    String email;
    String fname;
    String lname;


    String password;
    LocalDate bdate;

    public User() {
    }

    public User(String email, String fname, String lname, String password, LocalDate bdate) {
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        this.password = password;
        this.bdate = bdate;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id", nullable = false, precision = 0)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getBdate() {
        return bdate;
    }

    public void setBdate(LocalDate bdate) {
        this.bdate = bdate;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    @Override
    public String toString() {
        return "User{" +
                "email='" + email + '\'' +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", password='" + password + '\'' +
                ", bdate=" + bdate +
                '}';
    }
}
