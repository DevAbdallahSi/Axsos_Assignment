package com.relations.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.relations.models.License;
import com.relations.services.LicenseService;
import com.relations.services.PersonService;

import jakarta.validation.Valid;

@Controller
public class LicenseController {
    @Autowired
    private LicenseService licenseService;

    @Autowired
    private PersonService personService;

    @GetMapping("/licenses/new")
    public String newLicense(@ModelAttribute("license") License license, Model model) {
        model.addAttribute("persons", personService.findAllPersons());
        return "newLicense";
    }

    @PostMapping("/licenses")
    public String create(@Valid @ModelAttribute("license") License license, BindingResult result) {
        if (result.hasErrors()) {
            return "newLicense";
        }
        licenseService.createLicense(license);
        return "redirect:/persons/" + license.getPerson().getId();
    }
}
