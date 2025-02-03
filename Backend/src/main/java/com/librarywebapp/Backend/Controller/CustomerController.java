package com.librarywebapp.Backend.Controller;


import com.librarywebapp.Backend.DTO.Request.CustomerAddDTO;
import com.librarywebapp.Backend.DTO.Response.CustomerGeneralDTO;
import com.librarywebapp.Backend.Model.Customer;
import com.librarywebapp.Backend.Service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@AllArgsConstructor
public class CustomerController {

    private CustomerService customerService;

    @PostMapping("register")
    public ResponseEntity<Customer> register(@RequestBody CustomerAddDTO customerAddDTO) {
        return customerService.registerUser(customerAddDTO);
    }

    @GetMapping("details")
    public ResponseEntity<CustomerGeneralDTO> getAllCustomers(@RequestParam Integer id) {
        return customerService.getDetails(id);
    }

}
