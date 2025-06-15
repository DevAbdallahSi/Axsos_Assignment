package com.example.demo.services;


import java.util.ArrayList;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Talk;
import com.example.demo.models.User;
import com.example.demo.repositories.TalkRepository;


@Service
public class TalkServices {

	@Autowired
	private TalkRepository talkRepo;
	@Autowired
	private UserService userServ;

	public Talk createTalk(Talk talk, User user) {
		talk.setOwner(user);

		talk.getMembers().add(user); // 👈 add creator to members
		return talkRepo.save(talk);
	}

	public Talk updateTalk(Talk updatedTalk, User user) {
		// Fetch existing project
		Talk existingTalk = talkRepo.findById(updatedTalk.getId()).orElse(null);
		if (existingTalk == null)
			return null;

		// Only update allowed fields (e.g. title, description, dueDate)
		existingTalk.setTitle(updatedTalk.getTitle());
		existingTalk.setDetails(updatedTalk.getDetails());
		existingTalk.setDate(updatedTalk.getDate());

		// DO NOT change the owner here unless you're allowing ownership transfers
		// DO NOT re-add the user to members if he's already in

		return talkRepo.save(existingTalk);
	}

	public List<Talk> allTalk() {
		return talkRepo.findAll();
	}

	public Talk findTalkById(Long id) {
		return talkRepo.findById(id).orElse(null);
	}

	public Talk save(Talk talk) {
		return talkRepo.save(talk);
	}

	public void joinTalk(Long talkId, User user) {
		Talk talk = findTalkById(talkId);
		if (talk != null && !talk.getMembers().contains(user)) {
			talk.getMembers().add(user);
			talkRepo.save(talk);
		}
	}

	public void leaveTalk(Long talkId, User user) {
		User dbUser = userServ.findUserById(user.getId());
		Talk talk = findTalkById(talkId);

		if (!(talk.getOwner().getId() == dbUser.getId())) {
			boolean removed = talk.getMembers().remove(dbUser);
//			System.out.println("Removed from members list? " + removed); // DEBUG
			talkRepo.save(talk);
		}
	}

	public List<Talk> findByMembersNotContains(User user) {
		return talkRepo.findByMembersNotContains(user);
	}



	public List<Talk> findUserTalks(User user) {
		List<Talk> created = talkRepo.findByOwner(user);
		List<Talk> joined = talkRepo.findByMembersContains(user);

		Set<Talk> combined = new HashSet<>();
		combined.addAll(created);
		combined.addAll(joined);

		return new ArrayList<>(combined);
	}

	public void deleteTalk(Long id) {
		talkRepo.deleteById(id);
	}

}
