package com.ProductsandCategories.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.ProductsandCategories.models.User;
import com.ProductsandCategories.models.UserLogin;
import com.ProductsandCategories.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class HomeController {
	@Autowired
	UserService userService;

	@GetMapping("/loginPage")
	public String index(Model model) {
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new UserLogin());
		return "login";
	}

	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model,
			HttpSession session) {
		User registerUser = userService.register(newUser, result);

		if (result.hasErrors()) {
			model.addAttribute("newLogin", new UserLogin()); // make sure login form is also available
//			model.addAttribute("newLogin", new UserLogin()); // make sure login form is also available
			return "login"; // keep submitted user data with validation errors
		}

		session.setAttribute("userId", registerUser.getId());
		return "redirect:/home";
	}

	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") UserLogin newLogin, BindingResult result, Model model,
			HttpSession session) {
		User user = userService.login(newLogin, result);

		if (result.hasErrors()) {
			model.addAttribute("newUser", new User()); // registration form still needs to exist
			return "login"; // keep login form input & errors
		}

		session.setAttribute("userId", user.getId());
		return "redirect:/home";
	}
	
	
	
	@PostMapping("/logout")
	public String logout(HttpSession session) {
		if (session.getAttribute("userId")==null) {
	        return "redirect:/loginPage";
		}
	    session.invalidate();
	    return "redirect:/loginPage";
	}

}