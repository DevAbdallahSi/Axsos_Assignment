package com.ProductsandCategories.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProductsandCategories.repositories.CategoryRepository;

@Service
public class CategoryServic {
@Autowired
private CategoryRepository categoryRepo;
}

