package com.librarywebapp.Backend.Controller;


import com.librarywebapp.Backend.DTO.Request.CustomerAddDTO;
import com.librarywebapp.Backend.Model.Customer;
import com.librarywebapp.Backend.Service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
@AllArgsConstructor
public class CustomerController {

    private CustomerService customerService;

    @PostMapping("register")
    public ResponseEntity<Customer> register(@RequestBody CustomerAddDTO customerAddDTO) {
        return customerService.registerUser(customerAddDTO);


    }

}
