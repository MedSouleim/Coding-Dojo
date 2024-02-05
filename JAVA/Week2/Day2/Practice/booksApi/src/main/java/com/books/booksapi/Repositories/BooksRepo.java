package com.books.booksapi.Repositories;

import com.books.booksapi.Models.BookModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksRepo extends CrudRepository<BookModel, Long> {
    // No need for a custom method, use the default methods provided by CrudRepository
}
