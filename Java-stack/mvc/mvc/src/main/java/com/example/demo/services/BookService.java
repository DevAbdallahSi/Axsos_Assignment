package com.example.demo.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.repositories.BookRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import com.example.demo.models.Book;

@Service
public class BookService {
    // adding the book repository as a dependency
    private final BookRepository bookRepository;
    
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    // returns all the books
    
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book book) {
        return bookRepository.save(book);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
	public Book updateBook(Long id, String title, String desc, String lang, Integer numOfPages) {
		// TODO Auto-generated method stub
		Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
        	Book book = new Book(title, desc, lang, numOfPages);
        	book.setId(id);
            return bookRepository.save(book);
        }
        {
            return null;
        }
		
	}
	public void deleteBook(Long id) {
		// TODO Auto-generated method stub
		Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
             bookRepository.deleteById(id);
             }
        
		
	}
}
