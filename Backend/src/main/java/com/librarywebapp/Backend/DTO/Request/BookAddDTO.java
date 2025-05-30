package com.librarywebapp.Backend.DTO.Request;

import lombok.Data;

@Data
public class BookAddDTO {
    private Integer bookId;
    private String bookName;
    private String isbn;
    private String author;
    private Integer price;
    private Integer quantity;
}
