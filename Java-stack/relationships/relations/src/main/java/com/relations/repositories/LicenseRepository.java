package com.relations.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.relations.models.License;

@Repository
public interface LicenseRepository extends CrudRepository<License, Long> {
}