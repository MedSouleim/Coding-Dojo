// BookController.java

package com.books.booksapi.Controllers;

import com.books.booksapi.Models.BookModel;
import com.books.booksapi.Services.BooksService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class BookController {

    private final BooksService bookService;

    public BookController(BooksService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/books/{id}")
    public String showBook(@PathVariable Long id, Model model) {
        BookModel book = bookService.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found with id: " + id));

        model.addAttribute("book", book);
        return "show.jsp";
    }
}

