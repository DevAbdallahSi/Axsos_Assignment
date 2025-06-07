package com.relations.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.relations.models.Person;

//import org.springframework.data.repository.CrudRepository;
@Repository
public interface PersonRepository extends  CrudRepository <Person, Long>{
    List<Person> findAll();
}

