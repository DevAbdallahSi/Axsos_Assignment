package com.BookClub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.BookClub.models.LoginUser;
import com.BookClub.models.User;
import com.BookClub.repositories.UserRepository;

@Service
public class UserService {
@Autowired UserRepository userRepository;

public User register(User newUser, BindingResult result) {
	Optional<User> existingUser = userRepository.findByEmail(newUser.getEmail());

if (existingUser.isPresent()) {
	result.rejectValue("email", "Unique", "This email is already registered!");
}
if(!newUser.getPassword().equals(newUser.getConfirm())) {
    result.rejectValue("confirm", "Matches", "Passwords must match!");
}
if (result.hasErrors()) {
	return null;
}
String hashed = BCrypt.hashpw(newUser.getPassword(),BCrypt.gensalt());
newUser.setPassword(hashed);
return userRepository.save(newUser);}



public User login(LoginUser newLogin, BindingResult result) {
	Optional<User> potentialUser = userRepository.findByEmail(newLogin.getEmail());
	if(!potentialUser.isPresent()) {
		  result.rejectValue("email", "NotFound", "Invalid credentials");
          return null;
	}
	User user = potentialUser.get();
	if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
        result.rejectValue("password", "Invalid", "Invalid credentials");
    }

    if(result.hasErrors()) {
        return null;
    }
    return user;
	
}



public User findUserById(Long id) {
    return userRepository.findById(id).orElse(null);
}
public List<User> findAllUsers() {
    return userRepository.findAll();

}
}

