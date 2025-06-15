package com.example.demo.controllers;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.demo.models.Talk;
import com.example.demo.models.User;
import com.example.demo.services.TalkServices;
import com.example.demo.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class TalkController {
	@Autowired
	private TalkServices talkServices;
	@Autowired
	private UserService userServ;

	@GetMapping("/newtalk")
	public String newTalk(Model model, HttpSession session) {
		User user = (User) session.getAttribute("loggedInUser");
		if (user == null) {
			session.invalidate(); // Clear the session if the user doesn't exist
			return "redirect:/";
		}

		model.addAttribute("user", user);
		model.addAttribute("talk", new Talk());
		return "newtalk";
	}

	@PostMapping("/talk/form")
	public String createTalk(@Valid @ModelAttribute("talk") Talk talk, BindingResult result,
			HttpSession session, Model model) {
		User user = (User) session.getAttribute("loggedInUser");
		if (user == null) {
			session.invalidate(); // Clear the session if the user doesn't exist
			return "redirect:/";
		}

		if (result.hasErrors()) {
			model.addAttribute("talk", talk);
			return "newtalk";
		}

		model.addAttribute("user", user);

		talkServices.createTalk(talk, user);
		return "redirect:/showTalk/"+talk.getId();
	}

	@GetMapping("/talks/{talkId}/edit")
	public String editTalk(Model model, @PathVariable("talkId") Long id, HttpSession session) {
		User user = (User) session.getAttribute("loggedInUser");
		if (user == null) {
			session.invalidate(); // Clear the session if the user doesn't exist
			return "redirect:/";
		}
		model.addAttribute("user", user);
		model.addAttribute("talk", talkServices.findTalkById(id));

		return "editTalk";
	}

	@PutMapping("/updateTalk/form/{talkId}")
	public String updateTalk(@Valid @ModelAttribute("talk") Talk talk, BindingResult result,
			HttpSession session, @PathVariable("talkId") Long id, Model model) {
		User user = (User) session.getAttribute("loggedInUser");
		if (user == null) {
			session.invalidate(); // Clear the session if the user doesn't exist
			return "redirect:/";
		}
		if (result.hasErrors()) {
			model.addAttribute("talk", talk);
			return "editTalk";
		}

		talkServices.updateTalk(talk,user);
		return "redirect:/showTalk"+talk.getId();
	}
	
	@GetMapping("/showTalk/{talkid}")
	public String showTalk(Model model , HttpSession session,@PathVariable("talkid")Long id) {
		User user = (User) session.getAttribute("loggedInUser");
		if (user == null) {
			session.invalidate(); // Clear the session if the user doesn't exist
			return "redirect:/";
	}
        model.addAttribute("user", user);
        model.addAttribute("talkjoind", talkServices.findTalkById(id).getMembers() );
		model.addAttribute("talk",talkServices.findTalkById(id));
		return "showTalk";
	}
	
	@DeleteMapping("/talks/{talkId}/delete")
	public String deleteTalk(@PathVariable("talkId") Long id, HttpSession session) {
	    User user = (User) session.getAttribute("loggedInUser");
	    if (user == null) {
			session.invalidate(); // Clear the session if the user doesn't exist
	        return "redirect:/";
	    }

	    talkServices.deleteTalk(id);
	    return "redirect:/dashboard";
	}
	
	@PostMapping("/talks/{talkid}/join")
	public String joinTalk(@PathVariable("talkid") Long talkid, HttpSession session) {
		 User user = (User) session.getAttribute("loggedInUser");
		    if (user == null) return "redirect:/";
	
		    talkServices.joinTalk(talkid, user);
    
    return "redirect:/dashboard";


	}
	@PostMapping("/talks/{talksid}/leave") 
	public String leaveTalk(@PathVariable("talksid") Long talksid, HttpSession session) {
	    User sessionUser = (User) session.getAttribute("loggedInUser");
	    if (sessionUser == null) return "redirect:/";

//	   
	    talkServices.leaveTalk(talksid, sessionUser);

	    return "redirect:/dashboard";
	}



		

}