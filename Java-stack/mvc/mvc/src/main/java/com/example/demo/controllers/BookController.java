package com.example.demo.controllers;

//import java.util.ArrayList;
import java.util.List;

//import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.models.Book;
import com.example.demo.services.BookService;

import jakarta.validation.Valid;

//import jakar;

//import jakarta.validation.Valid;ta.validation.Valid;

@Controller
public class BookController {
	@Autowired
	BookService page;
	 @GetMapping("/home")
	 public String index(@ModelAttribute("book") Book book) {
		 return "index";
	 }
//	 @GetMapping("/home")
//	 public String index(Model model) {
//	     model.addAttribute("book", new Book());
//	     return "index";
//	 }
	 
//	 @PostMapping("/show/book")
//	 public String form(
//			 @RequestParam(value="title") String title,
//	    		@RequestParam(value="description") String desc,
//	    		@RequestParam(value="language") String lang,
//	    		@RequestParam(value="pages") Integer numOfPages,RedirectAttributes redirectAttributes)
//	 {
//		 redirectAttributes.addAttribute("title", title);
//		 redirectAttributes.addAttribute("description", desc);
//		 redirectAttributes.addAttribute("language", lang);
//		 redirectAttributes.addAttribute("pages" ,numOfPages);
//		 
//		 return "redirect:/books";
//	 } 
	 @PostMapping("/books")
	 public String createBook(@Valid @ModelAttribute("book") Book book,BindingResult result) 
	 {
	     if (result.hasErrors()) {
	         return "index"; // return to form if validation fails
	     }

	     page.createBook(book); // Save to DB
	     return "redirect:/books"; // Show all books
	 }
	
	 
	 
	 	@GetMapping("/book/{id}")
	    public String desplay(@PathVariable Long id ,Model model) {
	 		Book book =page.findBook(id);
	 		model.addAttribute("book", book);
			return "details";
		}
	 	
	 	@GetMapping("/book/{id}/details")
	 	public String show(@PathVariable Long id ,Model model) {
	 		Book book =page.findBook(id);
	 		model.addAttribute("book", book);
			return "details";
	 	}
	 	
	 	@GetMapping("/books")
	 	public String allBooks(Model model) {
	 	    List<Book> books = page.allBooks();
	 	    model.addAttribute("books", books);
	 	    return "books"; 
	 	}
//	 	@GetMapping("/books")
//	    public String allBooks(Model model) {
//	        model.addAttribute("books", page.allBooks());
//	        return "books.jsp";
//	    }
	 	@RequestMapping(value="/books/{id}", method=RequestMethod.DELETE)
	    public String destroy(@PathVariable("id") Long id) {
	        page.deleteBook(id);
	        return "redirect:/books"; 
	    }
	   
	}
	 	

