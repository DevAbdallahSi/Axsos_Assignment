package com.StudentRoster.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.StudentRoster.models.Dorm;
import com.StudentRoster.models.Student;
import com.StudentRoster.repositories.StudentRepositories;

@Service

public class StudentServices {
	@Autowired
	private StudentRepositories studentRepositories;

	public List<Student> findAllStudent() {
		return studentRepositories.findAll();
	}

	public Student createStudent(Student ninja) {
		return studentRepositories.save(ninja);
	}

	public Student findStudent(Long id) {
		return studentRepositories.findById(id).orElse(null);
	}

public void deleteStudent(Long id) {
	Optional<Student> optionalStudent = studentRepositories.findById(id);
	if (optionalStudent.isPresent()) {
		studentRepositories.deleteById(id);
	}

}
public List<Student> findAllUnassigned() {
    return studentRepositories.findByDormIsNull();
}
}
