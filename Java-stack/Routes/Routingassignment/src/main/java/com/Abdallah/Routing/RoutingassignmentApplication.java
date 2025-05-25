package com.Abdallah.Routing;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@RequestMapping("/daikichi")
class RoutingassignmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoutingassignmentApplication.class, args);
	}
	@RequestMapping("")
	public String index() {
		return "welcome";
	}
	@RequestMapping("/today")
	public String indexToday() {
		return "Today you will find luck in all your endeavors! ";
	}
	@RequestMapping("/tomorrow")
	public String tomorrow() {
		return "tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	
	

}
