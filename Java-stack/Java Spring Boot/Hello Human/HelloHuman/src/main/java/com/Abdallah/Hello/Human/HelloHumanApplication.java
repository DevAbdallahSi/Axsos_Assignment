package com.Abdallah.Hello.Human;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloHumanApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloHumanApplication.class, args);
	}
	@RequestMapping("/")
	public String index() {
		return "Hellow Human";
	}
	@RequestMapping("/search")
	public String name(@RequestParam(value="q",defaultValue = "hi") String searchQuery,@RequestParam(value="last" ,defaultValue = "") String lastname,@RequestParam(value="times" ,defaultValue = "1") int times) {
		String result  = "";
		for(int i = 0; i<times;i++) {
		result += "Hello " + searchQuery+" - "+lastname;
	}
		return result;
	}
	
}
