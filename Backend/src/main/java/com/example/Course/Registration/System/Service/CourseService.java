package com.example.Course.Registration.System.Service;

import com.example.Course.Registration.System.Model.Course;
import com.example.Course.Registration.System.Model.CourseRegistry;
import com.example.Course.Registration.System.Repository.CourseRegistryRepo;
import com.example.Course.Registration.System.Repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CourseService {

    @Autowired
    CourseRepo courseRepo;

    @Autowired
    CourseRegistryRepo courseRegistryRepo;

    public List<Course> getCourse() {
        return courseRepo.findAll();
    }

    public List<CourseRegistry> getenrolledStudents() {
        return courseRegistryRepo.findAll();
    }

    public void registerStudents(String Name, String emailId, String courseName) {
        CourseRegistry courseRegistry = new CourseRegistry(Name,emailId,courseName);
        courseRegistryRepo.save(courseRegistry);
    }
}
