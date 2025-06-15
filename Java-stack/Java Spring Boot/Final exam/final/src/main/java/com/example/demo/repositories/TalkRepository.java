package com.example.demo.repositories;


import java.util.List;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Talk;
import com.example.demo.models.User;


@Repository
public interface TalkRepository extends CrudRepository<Talk, Long> {


    List<Talk> findAll();                                // All Talk
    List<Talk> findByMembersNotContains(User user);      // Talk the user is NOT a member of
    List<Talk> findByMembersContains(User user);                 // Talk the user is a member of
    List<Talk> findByOwner(User user);                   // Talk the user owns
}