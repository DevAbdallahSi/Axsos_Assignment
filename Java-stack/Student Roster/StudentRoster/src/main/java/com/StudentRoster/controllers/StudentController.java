package com.StudentRoster.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.StudentRoster.models.Student;
import com.StudentRoster.services.DormServices;
import com.StudentRoster.services.StudentServices;

import jakarta.validation.Valid;

@Controller

public class StudentController {
@Autowired 
private StudentServices studentServices;
@Autowired 
private DormServices dormServices;


	@GetMapping("/students/new")
	public String newStudent(@ModelAttribute ("student") Student student,Model model) {
		model.addAttribute("dorms",dormServices.findAllDorms());
		return "newStudent";
	}
	@PostMapping("/student/form")
	public String createStudent(@Valid @ModelAttribute ("student") Student student ,BindingResult result) {
		if (result.hasErrors()) {
			return "newStudent";
		}
		studentServices.createStudent(student);
        return "redirect:/dorm/"+student.getDorm().getId();
        }
	@DeleteMapping("/destroy/{id}")
	public String destroy(@PathVariable("id") Long id) {
	    Student student = studentServices.findStudent(id);
	    Long dormId = student.getDorm().getId(); // get the dorm ID before deleting
	    studentServices.deleteStudent(id); // delete the student
	    return "redirect:/dorm/" + dormId; // go back to that dorm page
	}

}

