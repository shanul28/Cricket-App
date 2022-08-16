package com.stackroute.myfavouriteservice.service;

import java.util.ArrayList;
import java.util.List;

import com.stackroute.myfavouriteservice.exception.PlayerAlreadyExistsException;
import com.stackroute.myfavouriteservice.exception.PlayerNotFoundException;
import com.stackroute.myfavouriteservice.model.Cplayer;
import com.stackroute.myfavouriteservice.model.User;
import com.stackroute.myfavouriteservice.repository.FavouriteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class FavouriteServiceImpl implements FavouriteService{
	
//	@Autowired
	private FavouriteRepository favRepository;
	
	@Autowired
	public FavouriteServiceImpl(FavouriteRepository favRepository) {
		super();
		this.favRepository = favRepository;
	}

	@Override
	public User savePlayerToFavorite(Cplayer cplayer, String email) throws PlayerAlreadyExistsException {
		
		/**
		 * this will check from repository 
		 * and return user object if available 
		 * otherwise it will return null object
		 */
		User user1 = favRepository.findByEmail(email);
		
		if (user1 == null) {
			user1 = new User(email, new ArrayList<Cplayer>());
		}
		
		List<Cplayer> cplayerList = user1.getCplayerList();

		if (cplayerList != null) {
			for (Cplayer p : cplayerList) {

				if (p.getPlayer().equals(cplayer.getPlayer())) {
					throw new PlayerAlreadyExistsException();
				}
			}
			
			cplayerList.add(cplayer);
			user1.setCplayerList(cplayerList);
			favRepository.save(user1);
		}

		else {
			cplayerList = new ArrayList();
			cplayerList.add(cplayer);

			user1.setCplayerList(cplayerList);
			favRepository.save(user1);
		}
		return user1;

	}
	
	

	@Override
	public User deletePlayerFromFavorite(String player, String email) throws PlayerNotFoundException {
		User user1 = favRepository.findByEmail(email);
		boolean trackFound = false;
		int indexnum = 0;
		List<Cplayer> cplayerList = user1.getCplayerList();

		if (cplayerList != null && cplayerList.size() > 0) {
			for (Cplayer t : cplayerList) {
				indexnum++;
				if (t.getPlayer().equals(player)) {
					cplayerList.remove(indexnum - 1);
					user1.setCplayerList(cplayerList);
					favRepository.save(user1);
					break;
				}
			}

		}

		else {
			throw new PlayerNotFoundException();
		}
		return user1;
	}

	@Override
	public List<Cplayer> getPlayerList(String email) throws Exception {
		User user1 = favRepository.findByEmail(email);
		return user1.getCplayerList();
	}


}
