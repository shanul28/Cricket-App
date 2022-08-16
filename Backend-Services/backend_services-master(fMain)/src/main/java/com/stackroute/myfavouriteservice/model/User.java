package com.stackroute.myfavouriteservice.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {
	
	@Id
	private String email;
	
	private List<Cplayer> cplayerList;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public List<Cplayer> getCplayerList() {
		return cplayerList;
	}

	public void setCplayerList(List<Cplayer> cplayerList) {
		this.cplayerList = cplayerList;
	}

	@Override
	public String toString() {
		return "User [email=" + email + ", covidList=" + cplayerList + "]";
	}


	public User(String email, List<Cplayer> cplayerList) {
		super();
		this.email = email;
		this.cplayerList = cplayerList;
	}


	public User() {
		super();
		//TODO Auto-generated constructor stub
	}

	
}
