package com.example.car_rental_system.office;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfficeService {
    private final OfficeRepository officeRepository;

    @Autowired
    public OfficeService(OfficeRepository officeRepository) {
        this.officeRepository = officeRepository;
    }
    public List<Office> getOffices(){
        return officeRepository.getAll();
    }

    public void addNewOffice(Office office){
        officeRepository.insert(office.getRegion(),office.office_number);
    }

}
