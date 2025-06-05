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

import com.StudentRoster.models.Dorm;
import com.StudentRoster.services.DormServices;
import com.StudentRoster.services.StudentServices;

import jakarta.validation.Valid;

@Controller
public class DormController {
	@Autowired 
	private DormServices dormServices;
	@Autowired 
	private StudentServices studentServices;

	@GetMapping("/dorms/new")
	public String newDorm(@ModelAttribute ("dorm") Dorm dorm) {
		return "newDorm";
	}
	@PostMapping("/dorms/form")
	public String createDorm(@Valid @ModelAttribute ("dorm") Dorm dorm ,BindingResult result) {
		if (result.hasErrors()) {
			return "newDorm";
		}
		dormServices.createDorm(dorm);
        return "redirect:/students/new";
        }
	@GetMapping("/dorms")
	public String dorms(Model model) {
		model.addAttribute("dorms",dormServices.findAllDorms());
		model.addAttribute("student",studentServices.findAllStudent());
		return "dorms";
	}
	@GetMapping("/dorm/{id}")
	public String dormsDetails(Model model, @PathVariable("id") Long id) {
	    Dorm dorm = dormServices.findDorm(id); // Should return Dorm with students loaded
	    model.addAttribute("dorm", dorm);
	    return "dormDetails";
	}
}
