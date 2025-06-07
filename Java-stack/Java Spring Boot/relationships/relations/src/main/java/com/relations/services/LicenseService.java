package com.relations.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.relations.models.License;
import com.relations.repositories.LicenseRepository;

@Service
public class LicenseService {
    @Autowired
    private LicenseRepository licenseRepository;

    public License createLicense(License license) {
        return licenseRepository.save(license);
    }
}
