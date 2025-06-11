package com.ProjectManager.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProjectManager.repositories.ProjectRepository;

@Service
public class ProjectServices {

    @Autowired
 private ProjectRepository projectRepo;
}
