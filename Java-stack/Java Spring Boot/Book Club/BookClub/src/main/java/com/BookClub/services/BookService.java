package com.BookClub.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BookClub.models.Book;
import com.BookClub.repositories.BookRepository;

@Service
public class BookService {
	@Autowired BookRepository bookRepository;
	
	 public Book createBook(Book book) {
	        return bookRepository.save(book);
	    }
	    

	    public Book findBook(Long id) {
	        return bookRepository.findById(id).orElse(null);
	    }
	    
	    public List<Book>findAllBooks() {
	        return bookRepository.findAll();
	    }
	    public Book updateBook(Book book) {
	        return bookRepository.save(book); // same as create, but more semantic
	    }
	    
	    public void deleteBook(Long id) {
	        bookRepository.deleteById(id);
	    }

}
