package com.StudentRoster.repositories;

import java.util.List;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.StudentRoster.models.Student;

@Repository
public interface StudentRepositories extends CrudRepository<Student, Long> {
	 List<Student> findAll();
	 List<Student> findByDormIsNull();


}
