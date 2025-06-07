package com.example.demo;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.ui.Model;

@SpringBootApplication
@Controller
public class TimedateApplication {
	

	public static void main(String[] args) {
		SpringApplication.run(TimedateApplication.class, args);
	}
	@RequestMapping("/")
	public String index() {
		return "index.jsp"; }
	@RequestMapping("/time")
	public String time(Model model) {
		LocalTime myObj = LocalTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm a");
        String formattedTime = myObj.format(formatter);
		model.addAttribute("currentTime", formattedTime);
		return "time.jsp";
	}
//	@RequestMapping("/time")
//	public String getTime(Model model) {
//		model.addAttribute("currentTime", java.time.LocalTime.now().format(DateTimeFormatter.ofPattern("hh:mm a")));
//		return "time.jsp";}
	
	@RequestMapping("/date")
	public String date(Model model) {
		LocalDate today = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEEE MMMM dd yyyy");
        String formattedDate = today.format(formatter);
		model.addAttribute("currentDate", formattedDate);

		return "date.jsp";
	}
//	@RequestMapping("/date")
//	public String getDate(Model model) {
//		model.addAttribute("currentDate", java.time.LocalDate.now().format(DateTimeFormatter.ofPattern("EEEE, LLL dd, yyyy")));
//		return "date.jsp"; 

}
