package com.ninja;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.servlet.mvc.support.RedirectAttributes;
//
//import jakarta.servlet.http.HttpSession;

@SpringBootApplication
@Controller
public class NinjaApplication {

	public static void main(String[] args) {
		SpringApplication.run(NinjaApplication.class, args);
	}
	
	@RequestMapping("/")
	public String home() {
		return "index";
	}
	
//	@PostMapping("/display")
//	public String index(
//		    @RequestParam(value="number") String number,
//		    @RequestParam(value="name_city") String name_city,
//		    @RequestParam(value="name_person") String name_person,
//		    @RequestParam(value="professional") String professional,
//		    @RequestParam(value="nice") String nice,RedirectAttributes redirectAttributes ,HttpSession session) {
//
////	    redirectAttributes.addFlashAttribute("number", number);
////	    redirectAttributes.addFlashAttribute("name_city", name_city);
////	    redirectAttributes.addFlashAttribute("name_person", name_person);
////	    redirectAttributes.addFlashAttribute("professional", professional);
////	    redirectAttributes.addFlashAttribute("nice", nice);
//		session.setAttribute("number", number);
//		session.setAttribute("name_city", name_city);
//		session.setAttribute("name_person", name_person);
//		session.setAttribute("professional", professional);
//		session.setAttribute("nice", nice);
//			
//			return "redirect:/Omikuji/show";
//		}	
//	@RequestMapping("/show")
//	public String show() {
//		return "show";
//	}


}