package com.librarywebapp.Backend.Service;


import com.librarywebapp.Backend.DTO.Request.CustomerAddDTO;
import com.librarywebapp.Backend.Model.Customer;
import com.librarywebapp.Backend.Repository.CustomerRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;

    public ResponseEntity<Customer> registerUser(CustomerAddDTO customerAddDTO) {
        Customer customer = new Customer();
        customer.setFirstName(customerAddDTO.getFirstName());
        customer.setLastName(customerAddDTO.getLastName());
        customer.setEmail(customerAddDTO.getEmail());
        customer.setAddress(customerAddDTO.getAddress());
        customer.setPassword(customerAddDTO.getPassword());
        customer.setPhoneNumber(customerAddDTO.getPhoneNumber());
        customerRepository.save(customer);
        ResponseEntity<Customer> response = new ResponseEntity<>(customer, HttpStatus.CREATED);
        return response;

    }
}
