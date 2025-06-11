package com.ProjectManager.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ProjectManager.models.Project;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

}
