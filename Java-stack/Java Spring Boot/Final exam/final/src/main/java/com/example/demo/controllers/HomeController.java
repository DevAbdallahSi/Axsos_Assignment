package com.example.demo.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.models.LoginUser;
import com.example.demo.models.Talk;
import com.example.demo.models.User;
import com.example.demo.services.TalkServices;
import com.example.demo.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class HomeController {
    
    // Add once service is implemented:
     @Autowired
     private UserService userServ;
     @Autowired
     private TalkServices talkServices;
     
    
    @GetMapping("/")
    public String index(Model model) {
        // Bind empty User and LoginUser objects to the JSP
        // to capture the form input
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index";
    }
    
    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser,
                           BindingResult result, Model model, HttpSession session) {
        User registeredUser = userServ.register(newUser, result);

        if(result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "index";
        }

        session.setAttribute("loggedInUser", registeredUser);
        return "redirect:/dashboard";
    }
    

    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin,
                        BindingResult result, Model model, HttpSession session) {
        User user = userServ.login(newLogin, result);

        if(result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "index";
        }

        session.setAttribute("loggedInUser", user);
        return "redirect:/dashboard";
    }
    

    
    @GetMapping("/dashboard")
    public String home(HttpSession session, Model model) {
    	
    	    User user = (User)session.getAttribute("loggedInUser");
    	    if (user == null) {
    	        session.invalidate(); // Clear the session if the user doesn't exist
    	        return "redirect:/";
    	    }

        List<Talk> myTalks = talkServices.findUserTalks(user);
//        List<Project> allProjects = projectServices.allProject();

//        List<Project> notJoined = allProjects.stream()
//            .filter(p -> !myProjects.contains(p))
//            .collect(Collectors.toList());

        model.addAttribute("user", user);
        model.addAttribute("list", myTalks);
        model.addAttribute("allTalk", talkServices.allTalk());
        model.addAttribute("notContain", talkServices.findByMembersNotContains(user));

        return "dashboard";
    }
    
    
    
    
    
    @PostMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate(); // Destroys the entire session
        return "redirect:/";  // Redirect to login/registration page
    }
}