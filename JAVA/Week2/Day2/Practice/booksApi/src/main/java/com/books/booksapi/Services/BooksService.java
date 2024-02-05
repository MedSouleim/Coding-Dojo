package com.books.booksapi.Services;

import com.books.booksapi.Models.BookModel;
import com.books.booksapi.Repositories.BooksRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BooksService {

    @Autowired
    private BooksRepo booksRepo;

    public List<BookModel> allBooks() {
        return (List<BookModel>) booksRepo.findAll();
    }

    public BookModel save(BookModel book) {
        return booksRepo.save(book);
    }

    public Optional<BookModel> findById(Long id) {
        return booksRepo.findById(id);
    }

    public BookModel updateBook(Long id, BookModel updatedBook) {
        Optional<BookModel> optionalBook = booksRepo.findById(id);
        if (optionalBook.isPresent()) {
            BookModel book = optionalBook.get();
            book.setTitle(updatedBook.getTitle());
            book.setDescription(updatedBook.getDescription());
            book.setLanguage(updatedBook.getLanguage());
            book.setNumberOfPages(updatedBook.getNumberOfPages());
            return booksRepo.save(book);
        } else {
            // Handle the case where the book with the given id is not found
            return null;
        }
    }


    public void deleteBook(Long id) {
        booksRepo.deleteById(id);
    }
}

