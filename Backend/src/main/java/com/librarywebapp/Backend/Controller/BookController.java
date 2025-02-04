package com.librarywebapp.Backend.Controller;

import com.librarywebapp.Backend.DTO.Request.BookAddDTO;
import com.librarywebapp.Backend.DTO.Response.BookGeneralDTO;
import com.librarywebapp.Backend.Service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
@AllArgsConstructor
public class BookController {

    private final BookService bookService;

    @PostMapping("/add")
    public BookGeneralDTO addBook(@RequestBody BookAddDTO bookAddDTO) {
        return bookService.addBook(bookAddDTO);
    }

    @DeleteMapping("/delete/{bookId}")
    public void deleteBook(@PathVariable int bookId) {
        bookService.deleteBook(bookId);
    }

    @PutMapping("/update/{bookId}")
    public BookGeneralDTO updateBook(@PathVariable int bookId, @RequestBody BookAddDTO bookAddDTO) {
        return bookService.updateBook(bookId, bookAddDTO);
    }

    @GetMapping("/all")
    public List<BookGeneralDTO> getAllBooks(
            @RequestParam(required = false) String genre,
            @RequestParam(required = false) String author,
            @RequestParam(required = false) Integer publicationYear) {
        return bookService.getAllBooks(genre, author, publicationYear);
    }
}