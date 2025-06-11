package com.ProductsandCategories.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ProductsandCategories.models.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {

}
