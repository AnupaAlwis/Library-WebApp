package com.librarywebapp.Backend.Controller;


import com.librarywebapp.Backend.DTO.Request.BookAddDTO;
import com.librarywebapp.Backend.DTO.Request.CustomerAddDTO;
import com.librarywebapp.Backend.DTO.Response.BookGeneralDTO;
import com.librarywebapp.Backend.DTO.Response.CustomerGeneralDTO;
import com.librarywebapp.Backend.Model.Book;
import com.librarywebapp.Backend.Model.Customer;
import com.librarywebapp.Backend.Service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
@AllArgsConstructor
public class BookController {

    private final BookService bookService;

    @PostMapping("add")
    public ResponseEntity<Book> add(@RequestBody BookAddDTO bookAddDTO) {
        return bookService.addBook(bookAddDTO);
    }

    @GetMapping("details")
    public ResponseEntity<BookGeneralDTO> getBookById(@RequestParam Integer id) {
        return bookService.getDetails(id);
    }

    @GetMapping("all")
    public List<BookGeneralDTO> getAllBooks() {
        return bookService.getAllBooks();

    }

    @PutMapping("update")
    public ResponseEntity<BookGeneralDTO> updateBook(@RequestParam Integer id, @RequestBody BookAddDTO bookAddDTO) {
        try {
            BookGeneralDTO updatedBook = bookService.updateBook(id, bookAddDTO);
            return ResponseEntity.ok(updatedBook);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("delete")
    public ResponseEntity<String> deleteBook(@RequestParam Integer id) {
        return bookService.deleteBook(id);
    }

    @PutMapping("return")
    public String returnBook(@RequestParam Integer id, @RequestParam Integer quantity) {
        try {
            String returnedBook = bookService.returnBook(id, quantity);
            return returnedBook;
        } catch (Exception e) {
            return "Error Try Again";
        }
    }

    @PutMapping("lend")
    public String lendBook(@RequestParam Integer id, @RequestParam Integer quantity) {
        try {
            String lendedBook = bookService.lendBook(id, quantity);
            return lendedBook;
        } catch (Exception e) {
            return "Error Try Again";
        }
    }





}

