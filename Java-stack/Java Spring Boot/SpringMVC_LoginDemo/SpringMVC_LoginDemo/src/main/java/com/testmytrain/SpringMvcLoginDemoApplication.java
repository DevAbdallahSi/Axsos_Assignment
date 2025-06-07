package com.testmytrain;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;



@SpringBootApplication
@Controller
public class SpringMvcLoginDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringMvcLoginDemoApplication.class, args);
	}
	@RequestMapping("/")
	public String index() {
		return "index";
	}
	@PostMapping("/login")
	public String login(@RequestParam ("email") String email, @RequestParam ("password") String password,HttpSession session,
            RedirectAttributes redirectAttributes) {
		if (email.equals("admin@site.com")&& password.equals("admin123")) {
			session.setAttribute("user", email);
		
            return "redirect:/dashboard";}
		 else {
	            redirectAttributes.addFlashAttribute("error", "Invalid login credentials.");
	            return "redirect:/";
	        }
	}
	@GetMapping("/dashboard")
	public String dashboard(HttpSession session, org.springframework.ui.Model model) {
		 String user = (String) session.getAttribute("user");
	        if (user == null) {
	            return "redirect:/";
	        }
	        model.addAttribute("user", user);
	        return "dashboard";
	    }

	    @GetMapping("/logout")
	    public String logout(HttpSession session) {
	        session.invalidate();
	        return "redirect:/";
	    }
	
	}
	


