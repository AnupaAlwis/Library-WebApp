package com.librarywebapp.Backend.Service;


import com.librarywebapp.Backend.DTO.Request.AdminAddDTO;
import com.librarywebapp.Backend.DTO.Request.BookAddDTO;
import com.librarywebapp.Backend.DTO.Response.AdminGeneralDTO;
import com.librarywebapp.Backend.DTO.Response.BookGeneralDTO;
import com.librarywebapp.Backend.Model.Admin;
import com.librarywebapp.Backend.Model.Book;
import com.librarywebapp.Backend.Repository.AdminRepository;
import com.librarywebapp.Backend.Repository.BooksRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BookService {
    private final BooksRepository booksRepository;

    public ResponseEntity<Book> addBook(BookAddDTO bookAddDTO) {
        Book book = new Book();
        book.setBookName(bookAddDTO.getBookName());
        book.setISBN(bookAddDTO.getISBN());
        book.setAuthor(bookAddDTO.getAuthor());
        book.setPrice(bookAddDTO.getPrice());
        book.setQuantity(bookAddDTO.getQuantity());
        booksRepository.save(book);
        ResponseEntity<Book> response = new ResponseEntity<>(book, HttpStatus.CREATED);
        return response;

    }


    public ResponseEntity<BookGeneralDTO> getDetails(Integer id) {
        BookGeneralDTO bookGeneralDTO = new BookGeneralDTO();
        Optional<Book> optionalBook = booksRepository.findById(id);

        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            bookGeneralDTO.setBookId(book.getBookId());
            bookGeneralDTO.setBookName(book.getBookName());
            bookGeneralDTO.setISBN((book.getISBN()));
            bookGeneralDTO.setAuthor(book.getAuthor());
            bookGeneralDTO.setPrice(book.getPrice());
            bookGeneralDTO.setQuantity(book.getQuantity());
            return ResponseEntity.ok(bookGeneralDTO);
        } else {
            ResponseEntity responseEntity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
            return responseEntity;


        }
    }

    public BookGeneralDTO updateBook(Integer id, BookAddDTO bookAddDTO) {
        Book book = booksRepository.findById(id).orElseThrow();
        book.setAuthor(bookAddDTO.getAuthor());
        book.setBookName(bookAddDTO.getBookName());
        book.setISBN(bookAddDTO.getISBN());
        book.setPrice(bookAddDTO.getPrice());
        book.setQuantity(bookAddDTO.getQuantity());
        Book updatedBook = booksRepository.save(book);
        return convertToDTO(updatedBook);

    }

    private BookGeneralDTO convertToDTO(Book book) {
        BookGeneralDTO bookGeneralDTO = new BookGeneralDTO();
        bookGeneralDTO.setBookId(book.getBookId());
        bookGeneralDTO.setBookName(book.getBookName());
        bookGeneralDTO.setISBN(book.getISBN());
        bookGeneralDTO.setAuthor(book.getAuthor());
        bookGeneralDTO.setPrice(book.getPrice());
        bookGeneralDTO.setQuantity(book.getQuantity());
        return bookGeneralDTO;


    }

    public ResponseEntity<String> deleteBook(Integer id) {
        Optional<Book> optionalBook = booksRepository.findById(id);
        if (optionalBook.isPresent()) {
            booksRepository.deleteById(id);
            return ResponseEntity.ok("Book deleted successfully");
        }
        else{
            ResponseEntity responseEntity = new ResponseEntity<>(HttpStatus.NOT_FOUND);
            return responseEntity;
        }

    }


    public List<BookGeneralDTO> getAllBooks() {
        return booksRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toUnmodifiableList());
    }

    public String returnBook(Integer id, Integer quantity) {
        Book book = booksRepository.findById(id).orElseThrow();
        Integer newQuantity = book.getQuantity() + quantity;
        book.setQuantity(newQuantity);
        booksRepository.save(book);
        return "Book returned successfully";

    }

    public String lendBook(Integer id, Integer quantity) {
        Book book = booksRepository.findById(id).orElseThrow();
        Integer newQuantity = book.getQuantity() - quantity;
        if (newQuantity < 0) {
            return "Book quantity is not enough only " + book.getQuantity() + " can be lended";
        }
        book.setQuantity(newQuantity);
        booksRepository.save(book);
        return "Book Lended successfully";
    }
}


