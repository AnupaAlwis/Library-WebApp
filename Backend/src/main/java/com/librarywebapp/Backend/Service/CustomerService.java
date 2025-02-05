package com.librarywebapp.Backend.Service;


import com.librarywebapp.Backend.DTO.Request.CustomerAddDTO;
import com.librarywebapp.Backend.DTO.Response.CustomerGeneralDTO;
import com.librarywebapp.Backend.Model.Customer;
import com.librarywebapp.Backend.Repository.CustomerRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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


    public ResponseEntity<CustomerGeneralDTO> getDetails(Integer id) {
        CustomerGeneralDTO customerGeneralDTO = new CustomerGeneralDTO();
        Optional<Customer> optionalCustomer = customerRepository.findById(id);

        if (optionalCustomer.isPresent()) {
            Customer customer = optionalCustomer.get();
            customerGeneralDTO.setCustomerId(customer.getCustomerId());
            customerGeneralDTO.setFirstName(customer.getFirstName());
            customerGeneralDTO.setLastName((customer.getLastName()));
            customerGeneralDTO.setEmail(customer.getEmail());
            customerGeneralDTO.setAddress(customer.getAddress());
            return ResponseEntity.ok(customerGeneralDTO);


        } else {
            ResponseEntity responseEntity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
            return responseEntity;


        }
    }


    public CustomerGeneralDTO updateCustomer(Integer id, CustomerAddDTO customerAddDTO) {
        Customer customer = customerRepository.findById(id).orElseThrow();
        customer.setFirstName(customerAddDTO.getFirstName());
        customer.setLastName(customerAddDTO.getLastName());
        customer.setEmail(customerAddDTO.getEmail());
        customer.setAddress(customerAddDTO.getAddress());
        customer.setPassword(customerAddDTO.getPassword());
        customer.setPhoneNumber(customerAddDTO.getPhoneNumber());
        Customer updatedCustomer = customerRepository.save(customer);
        return convertToDTO(updatedCustomer);

    }

    private CustomerGeneralDTO convertToDTO(Customer customer) {
        CustomerGeneralDTO customerGeneralDTO = new CustomerGeneralDTO();
        customerGeneralDTO.setCustomerId(customer.getCustomerId());
        customerGeneralDTO.setFirstName(customer.getFirstName());
        customerGeneralDTO.setLastName(customer.getLastName());
        customerGeneralDTO.setEmail(customer.getEmail());
        customerGeneralDTO.setAddress(customer.getAddress());
        return customerGeneralDTO;


    }

    public ResponseEntity<String> deleteCustomer(Integer id) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);
        if (optionalCustomer.isPresent()) {
            customerRepository.deleteById(id);
            return ResponseEntity.ok("Customer deleted successfully");
        }
        else{
            ResponseEntity responseEntity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
            return responseEntity;
        }

    }


}
