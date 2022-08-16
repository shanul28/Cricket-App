package com.stackroute.myfavouriteservice.service;

import java.util.List;

import com.stackroute.myfavouriteservice.exception.PlayerAlreadyExistsException;
import com.stackroute.myfavouriteservice.exception.PlayerNotFoundException;
import com.stackroute.myfavouriteservice.model.Cplayer;
import com.stackroute.myfavouriteservice.model.User;


public interface FavouriteService {
	
	public User savePlayerToFavorite(Cplayer Cplayer, String email) throws PlayerAlreadyExistsException;
	public User deletePlayerFromFavorite(String trackId , String email ) throws PlayerNotFoundException;
	public List<Cplayer> getPlayerList(String email ) throws Exception;

}
