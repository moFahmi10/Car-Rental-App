package com.example.car_rental_system.customer;

import com.example.car_rental_system.car.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "api/v1/user")
public class UserController {
    private  final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getCustomer(){
        return userService.getUsers();
    }

    @GetMapping("/checkEmail/{email}")
    Boolean checkEmail(@PathVariable(value = "email") String email){
        Boolean var = userService.checkEmail(email);
        return var;
    }

    @GetMapping("/{email}/{psw}")
    String verify(@PathVariable(value = "email")String email,@PathVariable(value = "psw")String psw) throws NoSuchAlgorithmException {
        String var = userService.verify(email,psw);
        return var;
    }
    @GetMapping("/search/{params}")
    public List<Map<String,Object>> search(@PathVariable(value = "params") List<String> params){
        return userService.search(params);
    }


    @PostMapping
    public void addNewUser(@RequestBody User user) throws Exception {
        System.out.println(user);
        userService.addNewUser(user);
    }

}
