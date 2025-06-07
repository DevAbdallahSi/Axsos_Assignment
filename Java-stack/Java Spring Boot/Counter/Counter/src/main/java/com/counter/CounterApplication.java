package com.counter;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;


@SpringBootApplication
@Controller

public class CounterApplication {

	public static void main(String[] args) {
		SpringApplication.run(CounterApplication.class, args);
	}
	@RequestMapping("/")
	public String home(HttpSession session) {
		Integer count = (Integer)session.getAttribute("count");
		if (count == null) {
            count = 0;
        } else {
            count++;
        }
        session.setAttribute("count", count); // Save back to session

		return "index";
	}
	@RequestMapping("/counter")
	public String counter() {
		return "count";
	}
	
}
