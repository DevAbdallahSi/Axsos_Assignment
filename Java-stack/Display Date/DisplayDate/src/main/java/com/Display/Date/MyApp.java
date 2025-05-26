package com.Display.Date;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@Controller
//@RestController
public class MyApp {

	@RequestMapping("/")
    public String index() {
        return "index.jsp";
    }
	@RequestMapping("/date")
    public String date() {
        return "date.jsp";
    }
	@RequestMapping("/time")
    public String time() {
        return "time.jsp";
    }

}
