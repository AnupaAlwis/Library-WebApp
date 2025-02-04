package com.librarywebapp.Backend.Service;

import com.librarywebapp.Backend.DTO.Request.BookAddDTO;
import com.librarywebapp.Backend.DTO.Response.BookGeneralDTO;
import com.librarywebapp.Backend.Model.Book;
import com.librarywebapp.Backend.Repository.BooksRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BookService {

    private final BooksRepository booksRepository;

    // Add a new book
    public BookGeneralDTO addBook(BookAddDTO bookAddDTO) {
        Book book = new Book();
        book.setTitle(bookAddDTO.getTitle());
        book.setAuthor(bookAddDTO.getAuthor());
        book.setIsbn(bookAddDTO.getIsbn());
        book.setGenre(bookAddDTO.getGenre());
        book.setPublicationYear(bookAddDTO.getPublicationYear());
        book.setQuantity(bookAddDTO.getQuantity());

        Book savedBook = booksRepository.save(book);
        return mapToBookGeneralDTO(savedBook);
    }

    // Delete a book by ID
    public void deleteBook(int bookId) {
        booksRepository.deleteById(bookId);
    }

    // Update book details
    public BookGeneralDTO updateBook(int bookId, BookAddDTO bookAddDTO) {
        Optional<Book> optionalBook = booksRepository.findById(bookId);
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            book.setTitle(bookAddDTO.getTitle());
            book.setAuthor(bookAddDTO.getAuthor());
            book.setIsbn(bookAddDTO.getIsbn());
            book.setGenre(bookAddDTO.getGenre());
            book.setPublicationYear(bookAddDTO.getPublicationYear());
            book.setQuantity(bookAddDTO.getQuantity());

            Book updatedBook = booksRepository.save(book);
            return mapToBookGeneralDTO(updatedBook);
        } else {
            throw new RuntimeException("Book not found with ID: " + bookId);
        }
    }

    // Get all books with optional filtering
    public List<BookGeneralDTO> getAllBooks(String genre, String author, Integer publicationYear) {
        List<Book> books;
        if (genre != null && author != null && publicationYear != null) {
            books = booksRepository.findByGenreAndAuthorAndPublicationYear(genre, author, publicationYear);
        } else if (genre != null && author != null) {
            books = booksRepository.findByGenreAndAuthor(genre, author);
        } else if (genre != null) {
            books = booksRepository.findByGenre(genre);
        } else if (author != null) {
            books = booksRepository.findByAuthor(author);
        } else if (publicationYear != null) {
            books = booksRepository.findByPublicationYear(publicationYear);
        } else {
            books = booksRepository.findAll();
        }
        return books.stream().map(this::mapToBookGeneralDTO).collect(Collectors.toList());
    }

    // Map Book entity to BookGeneralDTO
    private BookGeneralDTO mapToBookGeneralDTO(Book book) {
        return new BookGeneralDTO(
                book.getBookId(),
                book.getTitle(),
                book.getAuthor(),
                book.getIsbn(),
                book.getGenre(),
                book.getPublicationYear(),
                book.getQuantity()
        );
    }
}