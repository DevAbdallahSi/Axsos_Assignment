package com.ninjaassognment;
import java.util.ArrayList;
import java.util.Random;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.bind.annotation.PostMapping;
//import jakarta.servlet.http.HttpSession;
// 
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;

@SpringBootApplication
@Controller
public class NinjaassognmentApplication {
	

	public static void main(String[] args) {
		SpringApplication.run(NinjaassognmentApplication.class, args);
	}
	@RequestMapping("/")
	public String index() {
		return "index";
	}
	
	
	@PostMapping("/processMoney")
	public String form(
		    @RequestParam(value="Farm", required = false) String Farm,
		    @RequestParam(value="Cave",required = false) String Cave,
		    @RequestParam(value="House",required = false) String House,
		    @RequestParam(value="Quest",required = false) String Quest,HttpSession session){
		if (session.getAttribute("gold") == null) {
	        session.setAttribute("gold", 0);
	    }
	    int gold = (int) session.getAttribute("gold");

	
	    @SuppressWarnings("unchecked")
	    ArrayList<Activity> activities = (ArrayList<Activity>) session.getAttribute("activities");
	    if (activities == null) {
	        activities = new ArrayList<>();
	    }

		Random rand1 = new Random();
		int earned = 0;
		String message = "";
		String color = "green";


	    if (Farm != null) {
	        earned = rand1.nextInt(11) + 10;
	        message = "You earned " + earned + " gold from the Farm!";
	    } else if (Cave != null) {
	        earned = rand1.nextInt(6) + 5;
	        message = "You earned " + earned + " gold from the Cave!";
	    } else if (House != null) {
	        earned = rand1.nextInt(4) + 2;
	        message = "You earned " + earned + " gold from the House!";
	    } else if (Quest != null) {
	        earned = rand1.nextInt(101) - 50; // -50 to +50
	        if (earned >= 0) {
	            message = "You earned " + earned + " gold from the Quest!";
	        } else {
	            message = "You lost " + Math.abs(earned) + " gold on the Quest!";
	            color = "red";
	        }
	    }

	    gold += earned;
	    session.setAttribute("gold", gold);

	    activities.add(new Activity(message, color));
	    session.setAttribute("activities", activities);
	
		 return "redirect:/";
}}



