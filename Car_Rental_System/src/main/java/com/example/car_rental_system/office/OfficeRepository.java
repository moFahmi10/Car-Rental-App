package com.example.car_rental_system.office;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface OfficeRepository extends JpaRepository<Office,String> {
    @Modifying
    @Transactional
    @Query(value = "Insert into office (region,office_number) values(:region,:office_number)",nativeQuery = true)
    void insert( @Param("region")String region,@Param("office_number") String office_number );


    @Query(value = "select * from office", nativeQuery = true)
    List<Office> getAll();



}