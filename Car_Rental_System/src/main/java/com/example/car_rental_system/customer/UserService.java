package com.example.car_rental_system.customer;

import com.example.car_rental_system.car.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apache.commons.codec.binary.Hex;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;


@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers(){
        return userRepository.getAll();
    }

    public Boolean checkEmail(String email){
       List<User> users = userRepository.getByEmail(email);
        Boolean val = false;
        if (users.isEmpty()) val = true;
        return val;
    }
//    public Boolean checkSSN(String ssn){
//        List<User> users = userRepository.getBySSN(ssn);
//        Boolean val = false;
//        if (users.isEmpty()) val = true;
//        return val;
//    }

//    public Boolean checkPhone(String phone){
//        List<User> users = userRepository.getByPhone(phone);
//        Boolean val = false;
//        if (users.isEmpty()) val = true;
//        return val;
//    }

    public void addNewUser(User user) throws Exception{
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] bytes = user.getPassword().getBytes(StandardCharsets.UTF_8);
        md.update(bytes);
        byte[] digest = md.digest();
        String hex = Hex.encodeHexString(digest);
        System.out.println(hex);

        userRepository.insert(user.getEmail(),user.getFname(),user.getLname(),hex,user.getBdate());
    }

    public String verify(String email, String psw) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] bytes = psw.getBytes(StandardCharsets.UTF_8);
        md.update(bytes);
        byte[] digest = md.digest();
        String hex = Hex.encodeHexString(digest);
      List<User> user =  userRepository.getByEmail(email);
    if(user.isEmpty()) {
        return "false";
    }
    else if(!hex.equals(user.get(0).getPassword())){
            return "false";
        }
        else return "true";

    }

    public List<Map<String,Object>>search(List<String> params){
        List<String> fname = new ArrayList<>();
        List<String> lname = new ArrayList<>();
        List<String> email = new ArrayList<>();
        List<User> users = userRepository.getAll();
        if (params.get(0).equals(""))
        {
            for(int i = 0; i< users.size() ;i++){
                email.add(users.get(i).getEmail());
            }
            System.out.println(fname.toString());
        }else {
            email.add(params.get(0));
        }
        if (params.get(1).equals(""))
        {
            for(int i = 0; i< users.size() ;i++){
                fname.add(users.get(i).getFname());
            }
        }
        else{
            fname.add(params.get(1));
        }
        if (params.get(2).equals(""))
        {
            for(int i = 0; i< users.size() ;i++){
                lname.add(users.get(i).getLname());
            }
        }
        else{
            lname.add(params.get(2));
        }

        List<Map<String,Object>> result  = userRepository.filter(email,fname,lname);
        return result;
    }


}

