package com.stackroute.myfavouriteservice.model;

import org.springframework.data.annotation.Id;

public class Cplayer {
	
	@Id
    private String id;
	
	private String player;

	private String role;
	
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPlayer() {
		return player;
	}

	public void setPlayer(String player) {
		this.player = player;
	}

	public Cplayer(String player, String id, String role) {
		this.player = player;
		this.id = id;
		this.role = role;
	}

	public Cplayer() {
	}
}