package com.librarywebapp.Backend.DTO.Response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BookGeneralDTO {
    private int bookId;
    private String title;
    private String author;
    private String isbn;
    private String genre;
    private int publicationYear;
    private int quantity;
}