package com.librarywebapp.Backend.DTO.Response;


import lombok.Data;

@Data
public class CustomerGeneralDTO {
    private Integer customerId;
    private String firstName;
    private String lastName;
    private String email;
    private String address;
    private Float fine;
}
