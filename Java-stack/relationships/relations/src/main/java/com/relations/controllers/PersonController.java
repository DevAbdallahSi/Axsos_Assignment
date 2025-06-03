package com.relations.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.relations.models.Person;
import com.relations.services.PersonService;

import jakarta.validation.Valid;

@Controller
public class PersonController {
    @Autowired
    private PersonService personService;

    @GetMapping("/persons/new")
    public String newPerson(@ModelAttribute("person") Person person) {
        return "newPerson";
    }

    @PostMapping("/persons")
    public String create(@Valid @ModelAttribute("person") Person person, BindingResult result) {
        if (result.hasErrors()) {
            return "newPerson";
        }
        personService.createPerson(person);
        return "redirect:/licenses/new";
    }

    @GetMapping("/persons/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
        model.addAttribute("person", personService.findPerson(id));
        return "showPerson";
    }
}
