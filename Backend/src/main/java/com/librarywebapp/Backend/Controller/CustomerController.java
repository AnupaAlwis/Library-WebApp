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

    @GetMapping("authenticate")
    public String authenticate(@RequestParam Integer id, @RequestParam String password) {
        return customerService.authenticate(id,password);
    }

    @PostMapping("register")
    public ResponseEntity<Customer> register(@RequestBody CustomerAddDTO customerAddDTO) {
        return customerService.registerUser(customerAddDTO);
    }

    @GetMapping("details")
    public ResponseEntity<CustomerGeneralDTO> getCustomerById(@RequestParam Integer id) {
        return customerService.getDetails(id);
    }

    @GetMapping("all")
    public List<CustomerGeneralDTO> getAllCustomers() {
        return customerService.getAllCustomers();

    }

    @PutMapping("update")
    public ResponseEntity<CustomerGeneralDTO> updateCustomer(@RequestParam Integer id, @RequestBody CustomerAddDTO customerAddDTO) {
        try {
            CustomerGeneralDTO updatedCustomer = customerService.updateCustomer(id, customerAddDTO);
            return ResponseEntity.ok(updatedCustomer);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("delete")
    public ResponseEntity<String> deleteCustomer(@RequestParam Integer id) {
        return customerService.deleteCustomer(id);
    }

}
