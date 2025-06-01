package com.burger.services;


import java.util.Optional;



import org.springframework.stereotype.Service;

import com.burger.repositories.burgerRepo;
import java.util.List;
import com.burger.models.Burger;

@Service
public class BurgerServices {
	

    // adding the book repository as a dependency
    private final burgerRepo burgerRepo;
    
    public BurgerServices(burgerRepo burgerRepo) {
        this.burgerRepo = burgerRepo;
    }
    // returns all the books
    
    public List<Burger> allBurger() {
        return burgerRepo.findAll();
    }
    // creates a book
    public Burger createBurger(Burger burger) {
        return burgerRepo.save(burger);
    }
    // retrieves a book
    public Burger findBurger(Long id) {
        Optional<Burger> optionalBurger = burgerRepo.findById(id);
        if(optionalBurger.isPresent()) {
            return optionalBurger.get();
        } else {
            return null;
        }
    }
//	public Burger updateBurger(Long id,String burgerName, String resturantName, Integer rating, String notes) {
//		// TODO Auto-generated method stub
//		Optional<Burger> optionalBurger = burgerRepo.findById(id);
//        if(optionalBurger.isPresent()) {
//        	Burger burger = new Burger( burgerName,  resturantName,  rating,  notes);
//        	burger.setId(id);
//            return burgerRepo.save(burger);
//        }
//        {
//            return null;
//        }
//		
//	}
	public void deleteBurger(Long id) {
		// TODO Auto-generated method stub
		Optional<Burger> optionalBurger = burgerRepo.findById(id);
        if(optionalBurger.isPresent()) {
        	burgerRepo.deleteById(id);
             }
        
		
	}
	 public Burger updateBurger(Burger burger) {
	        return burgerRepo.save(burger);
	    }
}