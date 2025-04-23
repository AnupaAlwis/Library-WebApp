package com.librarywebapp.Backend.DTO.Request;

import lombok.Data;

@Data
public class AdminAddDTO {
    private Integer adminId;
    private String firstName;
    private String lastName;
    private String email;
    private String address;
    private String password;
    private String phoneNumber;
}
