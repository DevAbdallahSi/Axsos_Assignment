package com.ProductsandCategories.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ProductsandCategories.models.Category;
import com.ProductsandCategories.models.Product;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {
	List<Category>findAll();
//	 @Query("SELECT p FROM Product p WHERE :category NOT MEMBER OF p.categories")
//	    List<Product> findProductsNotInCategory(@Param("category") Category category);
	// Retrieves a list of all categories for a particular product
    List<Category> findAllByProducts(Product product);
    
    // Retrieves a list of any categories a particular product
    // does not belong to.
    List<Category> findByProductsNotContains(Product product);
}
