/*package com.example.Course.Registration.System.Service;

import com.example.Course.Registration.System.Model.Users;
import com.example.Course.Registration.System.Repository.UserDetailsRepo;
import com.example.Course.Registration.System.Model.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetails implements UserDetailsService {

    @Autowired
    UserDetailsRepo userDetailsRepo;

    @Override
    public org.springframework.security.core.userdetails.UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userDetailsRepo.getByUsername(username);
        if (user == null){
            throw new UsernameNotFoundException("User ot found");
        }
        return new UserPrincipal(user);
    }

    public void addUser(Users user) {
        userDetailsRepo.save(user);
    }
}

 */
package com.example.Course.Registration.System.Service;

import com.example.Course.Registration.System.Model.Users;
import com.example.Course.Registration.System.Model.UserPrincipal;
import com.example.Course.Registration.System.Repository.UserDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetails implements UserDetailsService {

    @Autowired
    private UserDetailsRepo userDetailsRepo;

    @Override
    public UserPrincipal loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userDetailsRepo.getByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new UserPrincipal(user);
    }

    public ResponseEntity<String> addUser(Users user) {
        if (userDetailsRepo.existsById(user.getId())) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("User with ID " + user.getId() + " already exists!");
        }
        userDetailsRepo.save(user);
        return ResponseEntity.ok("User added successfully!");
    }
}
