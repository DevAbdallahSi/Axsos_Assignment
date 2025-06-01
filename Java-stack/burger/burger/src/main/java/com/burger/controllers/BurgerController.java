package com.burger.controllers;
import java.awt.print.Book;

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

import com.burger.models.Burger;
import com.burger.services.BurgerServices;

import jakarta.validation.Valid;

//import jakarta.validation.Valid;ta.validation.Valid;

@Controller
public class BurgerController {
	@Autowired
	BurgerServices page;
	
	 @GetMapping("/")
	 public String index(@ModelAttribute("burger") Burger burger,Model model) {
		 model.addAttribute("burgers",page.allBurger());
		 return "index";
	 }
//	 @GetMapping("/home")
//	 public String index(Model model) {
//	     model.addAttribute("book", new Book());
//	     return "index";
//	 }
	 

	 @PostMapping("/burger")
	 public String createBurger(@Valid @ModelAttribute("burger") Burger burger,BindingResult result) 
	 {
	     if (result.hasErrors()) {
	         return "index"; // return to form if validation fails
	     }

	     page.createBurger(burger);
	     return "redirect:/"; 
	 }
//	
//	 
//	 	@GetMapping("/books")
//	 	public String allBooks(Model model) {
//	 	    List<Book> books = page.allBooks();
//	 	    model.addAttribute("books", books);
//	 	    return "books"; 
//	 
//	 	@GetMapping("/book/{id}")
//	    public String desplay(@PathVariable Long id ,Model model) {
//	 		Book book =page.findBook(id);
//	 		model.addAttribute("book", book);
//			return "details";
//		}
//	 	
//	 	@GetMapping("/book/{id}/details")
//	 	public String show(@PathVariable Long id ,Model model) {
//	 		Book book =page.findBook(id);
//	 		model.addAttribute("book", book);
//			return "details";
//	 	}
//	 	
//	 	}
//	 	@GetMapping("/books")
//	    public String allBooks(Model model) {
//	        model.addAttribute("books", page.allBooks());
//	        return "books.jsp";
//	    }
//	 	@RequestMapping(value="/books/{id}", method=RequestMethod.DELETE)
//	    public String destroy(@PathVariable("id") Long id) {
//	        page.deleteBook(id);
//	        return "redirect:/books"; 
	    
//	   
}
	 	
