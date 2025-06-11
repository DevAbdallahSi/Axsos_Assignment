package com.ProductsandCategories.repositories;

import java.util.List;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ProductsandCategories.models.Category;
import com.ProductsandCategories.models.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
	List<Product>findAll();
	 List<Product> findByCategoriesNotContains(Category category);

}
