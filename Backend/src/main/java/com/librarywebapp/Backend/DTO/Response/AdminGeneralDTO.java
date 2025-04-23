package com.librarywebapp.Backend.DTO.Response;

import lombok.Data;

@Data
public class AdminGeneralDTO {
    private Integer adminId;
    private String firstName;
    private String lastName;
    private String email;
    private String address;
}
