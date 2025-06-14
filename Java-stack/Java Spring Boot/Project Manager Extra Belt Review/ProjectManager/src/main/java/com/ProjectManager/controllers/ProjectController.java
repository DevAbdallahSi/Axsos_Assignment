package com.ProjectManager.controllers;

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

import com.ProjectManager.models.Project;
import com.ProjectManager.models.User;
import com.ProjectManager.services.ProjectServices;
import com.ProjectManager.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class ProjectController {
	@Autowired
	private ProjectServices projectServices;
	@Autowired
	private UserService userServ;

	@GetMapping("/newProject")
	public String newProject(Model model, HttpSession session) {
		User user = (User) session.getAttribute("loggedInUser");
		if (user == null) {
			session.invalidate(); // Clear the session if the user doesn't exist
			return "redirect:/";
		}

		model.addAttribute("user", user);
		model.addAttribute("project", new Project());
		return "newProject";
	}

	@PostMapping("/project/form")
	public String createProject(@Valid @ModelAttribute("project") Project project, BindingResult result,
			HttpSession session, Model model) {
		User user = (User) session.getAttribute("loggedInUser");
		if (user == null) {
			session.invalidate(); // Clear the session if the user doesn't exist
			return "redirect:/";
		}

		if (result.hasErrors()) {
			model.addAttribute("project", project);
			return "newProject";
		}

		model.addAttribute("user", user);

		projectServices.createProject(project, user);
		return "redirect:/dashboard";
	}

	@GetMapping("/projects/{projectId}/edit")
	public String editProject(Model model, @PathVariable("projectId") Long id, HttpSession session) {
		User user = (User) session.getAttribute("loggedInUser");
		if (user == null) {
			session.invalidate(); // Clear the session if the user doesn't exist
			return "redirect:/";
		}
		model.addAttribute("project", projectServices.findProjectById(id));

		return "editProject";
	}

	@PutMapping("/updateProject/form/{projectId}")
	public String updateProject(@Valid @ModelAttribute("project") Project project, BindingResult result,
			HttpSession session, @PathVariable("projectId") Long id, Model model) {
		User user = (User) session.getAttribute("loggedInUser");
		if (user == null) {
			session.invalidate(); // Clear the session if the user doesn't exist
			return "redirect:/";
		}
		if (result.hasErrors()) {
			model.addAttribute("project", project);
			return "editProject";
		}
		System.out.println("Received project ID: " + id); // or userId

		projectServices.updateProject(project,user);
		return "redirect:/dashboard";
	}
	
	@GetMapping("/projectDetails/{projectid}")
	public String showProject(Model model , HttpSession session,@PathVariable("projectid")Long id) {
		User user = (User) session.getAttribute("loggedInUser");
		if (user == null) {
			session.invalidate(); // Clear the session if the user doesn't exist
			return "redirect:/";
	}
		model.addAttribute("userId", user.getId()); // <-- ADD THIS LINE
		model.addAttribute("project",projectServices.findProjectById(id));
		return "showProject";
	}
	
	@DeleteMapping("/projects/{projectid}/delete")
	public String deleteProject(@PathVariable("projectid") Long id, HttpSession session) {
	    User user = (User) session.getAttribute("loggedInUser");
	    if (user == null) {
			session.invalidate(); // Clear the session if the user doesn't exist
	        return "redirect:/";
	    }

	    projectServices.deleteProject(id);
	    return "redirect:/dashboard";
	}
	
	@PostMapping("/projects/{projectId}/join")
	public String joinProject(@PathVariable("projectId") Long projectId, HttpSession session) {
		 User user = (User) session.getAttribute("loggedInUser");
		    if (user == null) return "redirect:/";
	
	projectServices.joinProject(projectId, user);
    
    return "redirect:/dashboard";


	}
	@PostMapping("/projects/{id}/leave")
	public String leaveProject(@PathVariable("id") Long projectId, HttpSession session) {
	    User sessionUser = (User) session.getAttribute("loggedInUser");
	    if (sessionUser == null) return "redirect:/";

//	    // fetch user from DB (important!)
//	    User dbUser = userServ.findUserById(sessionUser.getId());
//	    Project project = projectServices.findProjectById(projectId);
//
//	    if (!(project.getOwner().getId()== dbUser.getId())) {
//	        boolean removed = project.getMembers().remove(dbUser);
//	        System.out.println("Removed from members list? " + removed); // DEBUG
//	        projectServices.save(project);
//	    }
	    projectServices.leaveProject(projectId, sessionUser);

	    return "redirect:/dashboard";
	}



		

}
