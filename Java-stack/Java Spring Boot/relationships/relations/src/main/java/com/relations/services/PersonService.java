package com.relations.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.relations.models.Person;
import com.relations.repositories.PersonRepository;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public List<Person> findAllPersons() {
        return personRepository.findAll();
    }

    public Person createPerson(Person person) {
        return personRepository.save(person);
    }

    public Person findPerson(Long id) {
        return personRepository.findById(id).orElse(null);
    }

	
//		public Person findById(Long id) {
//	        Optional<Person> optionalPerson = personRepository.findById(id);
//	        if(optionalPerson.isPresent()) {
//	            return optionalPerson.get();
//	        } else {
//	            return null;
//	        }
//	    }
	}

