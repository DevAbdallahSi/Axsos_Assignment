package com.Abdallah.PathVariables;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class PathVariablesApplication {
    @RequestMapping("/m/{courseId}/{moduleId}")
    public String showLesson(@PathVariable("courseId") String courseId, @PathVariable("moduleId") String moduleId){
        return "Course: " + courseId + ", Module: " + moduleId;
    }
}

	public static void main(String[] args) {
		SpringApplication.run(PathVariablesApplication.class, args);
		
		
		
		
		
		
	}

}
