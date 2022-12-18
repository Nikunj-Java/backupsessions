package com.simplilearn.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

@Service
public class UserService {
	
	@Autowired
	private UserRepo repo;
	
	//add method or CREATE RECORD(POST)
	public User addUser(User u) {
		return repo.save(u);
	}
	//List user Method
	public List<User> getAllUser(){
		return repo.findAll();
	}
	
	//get user by id
	public User getUserById(int id)
	{
		if(repo.findById(id).isPresent())
			return repo.findById(id).get();
		else
			return null;
	}
	
	//update user by id
	public User updateUser(User user,int id) {
		if(repo.findById(id).isPresent())
		{
			User old= repo.findById(id).get();
			old.setCountry(user.getCountry());
			old.setEmail(user.getEmail());
			old.setName(user.getName());
			return repo.save(old);
		}
		else
			return null;
	}
	//delete user by id
	
	public boolean deleteUser(int id) {
		
		if(repo.findById(id).isPresent()){
			repo.deleteById(id);
			return true;
		}
		else
			return false;
	}
	
	
	

}
