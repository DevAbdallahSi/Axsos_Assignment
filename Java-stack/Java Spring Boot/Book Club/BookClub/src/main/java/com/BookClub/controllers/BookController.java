package com.BookClub.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.BookClub.models.Book;
import com.BookClub.models.User;
import com.BookClub.services.BookService;
import com.BookClub.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller

public class BookController {
@Autowired
private BookService bookService;
@Autowired UserService userService;


@GetMapping("/books")
public String books(Model model,HttpSession session) {
	  if (session.getAttribute("userId") == null) {
          return "redirect:/";
      }

      // Optional: Fetch user from DB and pass to JSP
      Long userId = (Long) session.getAttribute("userId");
      User user = userService.findUserById(userId);
      model.addAttribute("user", user);

	model.addAttribute("books" ,bookService.findAllBooks());
//	model.addAttribute("users" ,userService.findAllUsers());
	return "books";
}



@GetMapping("/newBook")
public String newBookPage(@ModelAttribute("book") Book book,HttpSession session,Model model) {
	 if (session.getAttribute("userId") == null) {
         return "redirect:/index";
     }
     Long userId = (Long) session.getAttribute("userId");
	 model.addAttribute("user", userService.findUserById(userId));

	return "newBook";
}

@PostMapping("/newBook/form")
public String createBook(@Valid @ModelAttribute ("book") Book book ,BindingResult result,Model model,HttpSession session) {
	Long userId = (Long) session.getAttribute("userId");
    if (userId == null) {
        return "redirect:/index";
    }
	if (result.hasErrors()) {
//		model.addAttribute("book" ,new Book());
		return "newBook";
	}

    // Get the logged-in user from the DB
    User user = userService.findUserById(userId);
    book.setUser(user); // Link book to user

	 bookService.createBook(book);
	 return "redirect:/newBook";
	}



@GetMapping("/bookDetails/{id}")
public String bookDetails(@PathVariable("id")Long id,Model model,HttpSession session) {
	Long userId = (Long) session.getAttribute("userId");
    if (userId == null) {
        return "redirect:/index";
    }
    Book book = bookService.findBook(id);
    model.addAttribute("book",book);
    return "bookDetails";
    }


@GetMapping("/editBook/{id}")
public String editBookPage(@PathVariable("id") Long id,Model model,HttpSession session) {
	Long userId = (Long) session.getAttribute("userId");
	if (userId == null) {
        return "redirect:/index";
	}
	model.addAttribute("book",bookService.findBook(id));
	return "editBook";
	 
}
@PutMapping("/update/{id}/form")
public String updateBook(@Valid @ModelAttribute("book") Book book,
                         BindingResult result,
                         @PathVariable("id") Long id,
                         HttpSession session,
                         Model model) {
    Long userId = (Long) session.getAttribute("userId");
    if (userId == null) {
        return "redirect:/index";
    }

    if (result.hasErrors()) {
        model.addAttribute("book", book);
        return "editBook";  // Show errors again
    }

    // Optionally set user again
    User user = userService.findUserById(userId);
    book.setUser(user);

    bookService.createBook(book);  // createBook usually handles both create and update
    return "redirect:/bookDetails/" + book.getId();
}


@DeleteMapping("/books/{id}/delete")
public String deleteBook(@PathVariable("id") Long id, HttpSession session) {
    Long userId = (Long) session.getAttribute("userId");
    if (userId == null) {
        return "redirect:/index";
    }

    bookService.deleteBook(id);
    return "redirect:/books";
}




}

