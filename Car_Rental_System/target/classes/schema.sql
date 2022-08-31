Create table IF not exists  office(
                                        office_number int ,
                                        region varchar(20),
                                        primary key (region)
);
Create table IF not exists  `user`(     email varchar(30),
                                        fname varchar(20),
                                        lname varchar(20),
                                        password varchar(128),
                                        bdate date,
                                        primary key (email)
);
Create table IF not exists  car(
                                            plate   varchar(7),
                                            model varchar(30),
                                            manufacturer varchar(30),
                                            year int,
                                            color varchar(10),
                                            car_status varchar(10),
                                            region varchar(20),
                                            price int,
                                            image varchar (200),
                                            primary key (plate),
                                            foreign key (region) references office(region)
);
Create table IF not exists  reservation(
                                   reservation_number int AUTO_INCREMENT,
                                    plate   varchar(7),
                                    email varchar(30),
                                    pickup_date date  ,
                                    return_date date ,
                                    paid varchar(7),
                                    total_price int,
                                    primary key (reservation_number),
                                    foreign key (email) references `user`(email),
                                    foreign key (plate) references car(plate)

);

