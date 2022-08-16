import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritePlayers } from 'src/app/favorites/favorite-players';
import { FavoriteService } from 'src/app/favorites/favorite.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { PlayerInfoService } from './player-info.service';
import Swal from 'sweetalert2';
interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'danger',
  message: 'Already in Favorites',
  },
  {
    type: 'success',
    message: 'Added to favorites',
  }]
  


@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css'],
})
export class ViewPlayerComponent implements OnInit {
  public playerInfo: any;
  favorites: FavoritePlayers[] = [];


  constructor(
    private playerInfoService: PlayerInfoService,
    private route: ActivatedRoute,
    private favoritesService: FavoritesService
  ) {
    
  }
  playerDetails = {
    player: '',
    id: '',
    role:''
  };
  status = false;


  
  ngOnInit(): void {
    this.playerDetails.id = this.route.snapshot.params['id'];
    this.playerInfoService
      .getPlayerInfo(this.playerDetails.id)
      .subscribe((data: any) => {
        console.log(data);
        this.playerInfo = data.data;
        this.playerDetails.player = this.playerInfo.name;
        this.playerDetails.role = this.playerInfo.role;
        
      });
  }

  userData = localStorage.getItem('userData');
  userEmail = JSON.parse(this.userData || '{}').email;
  onAdd() {
    this.favoritesService
      .addPlayer(this.userEmail, this.playerDetails)
      .subscribe((data) => {
      });
      Swal.fire(this.playerDetails.player, 'Added succesfully!', 'success');
  }
}
