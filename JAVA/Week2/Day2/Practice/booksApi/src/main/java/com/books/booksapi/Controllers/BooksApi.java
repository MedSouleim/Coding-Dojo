package com.books.booksapi.Controllers;

import com.books.booksapi.Models.BookModel;
import com.books.booksapi.Services.BooksService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BooksApi {

    private final BooksService bookService;

    public BooksApi(BooksService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<BookModel> getAllBooks() {
        return bookService.allBooks();
    }

    @PostMapping
    public BookModel addBook(@RequestBody BookModel book) {
        return bookService.save(book);
    }

    @PutMapping("/{id}")
    public BookModel updateBook(@PathVariable("id") Long id, @RequestBody BookModel updatedBook) {
        return bookService.updateBook(id, updatedBook);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
    }
}
