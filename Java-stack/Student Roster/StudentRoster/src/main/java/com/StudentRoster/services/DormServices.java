package com.StudentRoster.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.StudentRoster.models.Dorm;
import com.StudentRoster.repositories.DormRepositories;

import jakarta.transaction.Transactional;

@Service
public class DormServices {
	@Autowired
	private DormRepositories dormRepositories;

	public Dorm createDorm(Dorm dorm) {
		return dormRepositories.save(dorm);
	}
	@Transactional
	public Dorm findDorm(Long id) {
		return dormRepositories.findById(id).orElse(null);
	}

	public List<Dorm> findAllDorms() {
		return dormRepositories.findAll();
	}

	public void deleteStudent(Long id) {
		Optional<Dorm> optionalDorm = dormRepositories.findById(id);
		if (optionalDorm.isPresent()) {
			dormRepositories.deleteById(id);
		}

	}

}
