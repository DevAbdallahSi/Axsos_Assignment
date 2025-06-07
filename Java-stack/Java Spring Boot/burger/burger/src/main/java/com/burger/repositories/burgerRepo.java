package com.burger.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.burger.models.Burger;
@Repository
public interface burgerRepo extends CrudRepository<Burger, Long> {
	 // this method retrieves all the books from the database
    List<Burger> findAll();
// // this method finds books with descriptions containing the search string
// List<Book> findByDescriptionContaining(String search);
// // this method counts how many titles contain a certain string
// Long countByTitleContaining(String search);
// // this method deletes a book that starts with a specific title
// Long deleteByTitleStartingWith(String search);
 

}
