package com.ProductsandCategories.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.ProductsandCategories.services.CategoryServic;
import com.ProductsandCategories.services.ProductServic;

@Controller
public class CategoryController {
	@Autowired 
	private CategoryServic categoryServic;
	@Autowired 
	private ProductServic productServic;

	
	
}
