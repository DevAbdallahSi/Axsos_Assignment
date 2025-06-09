package com.BookClub.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.BookClub.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	Optional<User> findByEmail(String email);
//	🔒 Why Optional<User>?
//			It's safer than returning null.
//
//			You can use .isPresent() or .orElseThrow() in your service for better error handling.
	List<User> findAll();


}
