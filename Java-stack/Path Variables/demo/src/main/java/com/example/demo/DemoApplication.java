package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@RequestMapping("/daikichi")

public class DemoApplication {
	@RequestMapping("/travel/{name}")
	public String name(@PathVariable("name")String name) {
		return "congratulations! you will soon travel to"+name;
	}
	@RequestMapping("/lotto/{number}")
	public String mod(@PathVariable("number")int number) {
		int num =number;
		if (num % 2==0) {
		return "You will take a grand journey in the near future but be wary of tempting offers";
	}else {
		return"You have enjoyed the fruits of your labor, but now is a great time to spend time with family and friends.";
	}

	}
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	

}
