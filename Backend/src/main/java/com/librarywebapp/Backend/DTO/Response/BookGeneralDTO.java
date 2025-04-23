package com.librarywebapp.Backend.DTO.Response;


import jakarta.annotation.sql.DataSourceDefinitions;
import lombok.Data;

@Data
public class BookGeneralDTO {
    private Integer bookId;
    private String bookName;
    private String ISBN;
    private String author;
    private Integer price;
}
