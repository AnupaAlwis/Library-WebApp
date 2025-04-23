package com.librarywebapp.Backend.DTO.Request;

import lombok.Data;

@Data
public class BookAddDTO {
    private Integer bookId;
    private String bookName;
    private String ISBN;
    private String author;
    private String price;
}
