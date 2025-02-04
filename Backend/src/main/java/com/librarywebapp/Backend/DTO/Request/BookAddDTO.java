package com.librarywebapp.Backend.DTO.Request;

import lombok.Data;

@Data
public class BookAddDTO {
    private String title;
    private String author;
    private String isbn;
    private String genre;
    private int publicationYear;
    private int quantity;
}