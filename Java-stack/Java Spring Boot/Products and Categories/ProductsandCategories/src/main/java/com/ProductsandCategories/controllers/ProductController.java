package com.ProductsandCategories.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.ProductsandCategories.services.ProductServic;

@Controller
public class ProductController {
@Autowired 
private ProductServic productServic;
}
