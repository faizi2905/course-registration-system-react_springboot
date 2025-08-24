package com.example.Course.Registration.System.Controller;

import com.example.Course.Registration.System.Model.Course;
import com.example.Course.Registration.System.Model.CourseRegistry;
import com.example.Course.Registration.System.Model.Users;
import com.example.Course.Registration.System.Service.CourseService;
import com.example.Course.Registration.System.Service.MyUserDetails;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminCourseController {

    @Autowired
    private CourseService courseService;

    @Autowired
    private MyUserDetails myUserDetails;

    @GetMapping("/courses/enrolled")
    public List<CourseRegistry> getEnrolledStudents() {
        return courseService.getenrolledStudents();
    }

    @PostMapping("/courses/register")
    public String registerStudents(@RequestParam String name,
                                   @RequestParam String emailId,
                                   @RequestParam String courseName) {
        courseService.registerStudents(name, emailId, courseName);
        return "Congratulations " + name + "...The " + courseName + " course has successfully registered";
    }

    @PostMapping("/add")
    public ResponseEntity<String> addUser(@RequestBody Users user) {
        //myUserDetails.addUser(user);
        ResponseEntity<String> message = myUserDetails.addUser(user);
        return message;
    }
}


