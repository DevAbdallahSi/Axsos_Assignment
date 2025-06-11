package com.ProjectManager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.ProjectManager.models.Project;
import com.ProjectManager.services.ProjectServices;

@Controller
public class ProjectController {
@Autowired
private ProjectServices projectServices;



}
