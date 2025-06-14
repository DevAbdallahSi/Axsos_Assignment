package com.ProjectManager.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ProjectManager.models.Project;
import com.ProjectManager.models.User;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {


    List<Project> findAll();                                // All projects
    List<Project> findByMembersNotContains(User user);      // Projects the user is NOT a member of
    List<Project> findByMembersContains(User user);                 // Projects the user is a member of
    List<Project> findByOwner(User user);                   // Projects the user owns
}


