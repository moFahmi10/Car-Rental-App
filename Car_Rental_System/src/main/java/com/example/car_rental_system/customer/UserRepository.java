package com.example.car_rental_system.customer;


import com.example.car_rental_system.customer.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

public interface UserRepository extends JpaRepository<User,String> {
    @Modifying
    @Transactional
    @Query(value = "Insert into `user` (email,fname,lname,password,bdate) values(:email,:fname,:lname,:password,:bdate)",nativeQuery = true)
    void insert(@Param("email") String email ,@Param("fname")String fname,@Param("lname")String lname, @Param("password")  String password, @Param("bdate") LocalDate bdate);


    @Query(value = "select * from `user`", nativeQuery = true)
    List<User> getAll();
    @Query(value = "select * from `user` where email = :email",nativeQuery = true)
    List<User> getByEmail(@Param("email")String email);
    @Query(value = "SELECT reservation.email , reservation.plate , reservation.reservation_number,reservation.pickup_date,reservation.return_date,reservation.paid,reservation.total_price,user.fname,user.lname,user.bdate FROM (`user` NATURAL JOIN reservation) where( reservation.email in :email AND user.fname in :fname AND user.lname in :lname ) ORDER by reservation.email asc ",nativeQuery = true)
    List<Map<String,Object>> filter(@Param("email") List<String> email, @Param("fname") List<String> fname, @Param("lname") List<String> lname);


}
