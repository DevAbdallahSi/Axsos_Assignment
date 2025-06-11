package com.ProductsandCategories.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProductsandCategories.repositories.ProductRepository;

@Service

public class ProductServic {
@Autowired 
private ProductRepository productRepo;

}
