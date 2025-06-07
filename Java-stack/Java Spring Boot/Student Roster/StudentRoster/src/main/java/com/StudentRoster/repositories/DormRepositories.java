package com.StudentRoster.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.StudentRoster.models.Dorm;

@Repository

public interface DormRepositories extends CrudRepository<Dorm, Long> {
 List<Dorm> findAll();
}
