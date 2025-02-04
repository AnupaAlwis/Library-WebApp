package com.librarywebapp.Backend.Repository;

import com.librarywebapp.Backend.Model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BooksRepository extends JpaRepository<Book, Integer> {
    List<Book> findByGenre(String genre);
    List<Book> findByAuthor(String author);
    List<Book> findByPublicationYear(int publicationYear);
    List<Book> findByGenreAndAuthor(String genre, String author);
    List<Book> findByGenreAndAuthorAndPublicationYear(String genre, String author, int publicationYear);
}
