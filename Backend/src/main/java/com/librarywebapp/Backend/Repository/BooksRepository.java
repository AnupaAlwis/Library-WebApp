package com.librarywebapp.Backend.Repository;


import com.librarywebapp.Backend.Model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BooksRepository extends JpaRepository<Book, Integer> {
    Optional<Book> findBooksByBookName(String name);
}


