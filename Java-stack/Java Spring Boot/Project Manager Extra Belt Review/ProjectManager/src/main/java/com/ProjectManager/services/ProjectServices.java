package com.ProjectManager.services;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProjectManager.models.Project;
import com.ProjectManager.models.User;
import com.ProjectManager.repositories.ProjectRepository;

@Service
public class ProjectServices {

	@Autowired
	private ProjectRepository projectRepo;
	@Autowired
	private UserService userServ;

	public Project createProject(Project project, User user) {
		project.setOwner(user);

		project.getMembers().add(user); // 👈 add creator to members
		return projectRepo.save(project);
	}

	public Project updateProject(Project updatedProject, User user) {
		// Fetch existing project
		Project existingProject = projectRepo.findById(updatedProject.getId()).orElse(null);
		if (existingProject == null)
			return null;

		// Only update allowed fields (e.g. title, description, dueDate)
		existingProject.setTitle(updatedProject.getTitle());
		existingProject.setDescription(updatedProject.getDescription());
		existingProject.setDueDate(updatedProject.getDueDate());

		// DO NOT change the owner here unless you're allowing ownership transfers
		// DO NOT re-add the user to members if he's already in

		return projectRepo.save(existingProject);
	}

	public List<Project> allProject() {
		return projectRepo.findAll();
	}

	public Project findProjectById(Long id) {
		return projectRepo.findById(id).orElse(null);
	}

	public Project save(Project project) {
		return projectRepo.save(project);
	}

	public void joinProject(Long projectId, User user) {
		Project project = findProjectById(projectId);
		if (project != null && !project.getMembers().contains(user)) {
			project.getMembers().add(user);
			projectRepo.save(project);
		}
	}

	public void leaveProject(Long projectId, User user) {
		User dbUser = userServ.findUserById(user.getId());
		Project project = findProjectById(projectId);

		if (!(project.getOwner().getId() == dbUser.getId())) {
			project.getMembers().remove(dbUser);
//			System.out.println("Removed from members list? " + removed); // DEBUG
			projectRepo.save(project);
		}
	}

	public List<Project> findByMembersNotContains(User user) {
		return projectRepo.findByMembersNotContains(user);
	}

	


	public List<Project> findUserProjects(User user) {
		List<Project> created = projectRepo.findByOwner(user);
		List<Project> joined = projectRepo.findByMembersContains(user);

		Set<Project> combined = new HashSet<>();
		combined.addAll(created);
		combined.addAll(joined);

		return new ArrayList<>(combined);
	}

	public void deleteProject(Long id) {
		projectRepo.deleteById(id);
	}

}
