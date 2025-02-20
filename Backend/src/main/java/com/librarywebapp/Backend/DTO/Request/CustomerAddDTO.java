package com.librarywebapp.Backend.DTO.Request;


import lombok.Data;


@Data
public class CustomerAddDTO {
    private Integer customerId;
    private String firstName;
    private String lastName;
    private String email;
    private String address;
    private String password;
    private String phoneNumber;
    private Float fine;
}
