import { DecimalPipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FavoritePlayers } from '../favorites/favorite-players';
import { FavoriteService } from '../favorites/favorite.service';
import { FavoritesService } from '../services/favorites.service';
import { PlayerServiceService } from './player-service.service';
import { PlayerInfoService } from './view-player/player-info.service';

interface Players{
  id: string;
  name: string;
  country: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  providers: [DecimalPipe]
})
export class StatisticsComponent implements OnInit {

  userData = localStorage.getItem('userData');
  userEmail = JSON.parse(this.userData || '{}').email;
  totalLength: any;
  page: number = 1;
  searchTerm = '';
  public players:Players[]=[];
  public allPlayers:Players[]=[];
  favorites: FavoritePlayers[]=[];
  // PLAYERS$: Observable<Players[]>;
  filter = new FormControl('');

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((data: any) => {

      console.log(data);
      //this.players.push(...data.data);
      this.players = data.data
      this.allPlayers = this.players;
      //console.log(this.players);
      //console.log(this.allPlayers);
      //console.log(data.data);
      this.totalLength = this.allPlayers.length;
  });
  }

  
    

  //  search(text: string): Players[] {
  //   return this.players.filter(player => {
  //     const term = text.toLowerCase();
  //     return player.name.toLowerCase().slice().includes(term);
  //   });
  // }
  search(value: string): void {
    this.allPlayers = this.players.filter((val) =>
      val.name.toLowerCase().includes(value) || val.name.toUpperCase().includes(value) || val.name.includes(value)
    );
  }


  constructor(private playerService: PlayerServiceService,
    private favoritesService: FavoritesService,
    private playerInfoService: PlayerInfoService){
  }

  
  playerInfo = {
    player: '',
    id: '',
    role:''
  }
  

  onAdd(id: any, name: any){
    this.playerInfoService.getPlayerInfo(id).subscribe((role: any) => {
      //console.log(role.data.role);
      
      this.playerInfo.player = name;
      this.playerInfo.id = id;
      this.playerInfo.role = role.data.role;
      
      this.favoritesService.addPlayer( this.userEmail, this.playerInfo).subscribe(data => {
        //console.log(data);
      }
        ,error=>{
          //console.log(error);
          if(error.status==409){
            alert("Already in Favorites");
          }
          
        });
    });
    
  }


  // gty(page: any){
  //   console.log(page);
  //   this.offset = (page-1)*25;
  //   this.ngOnInit();
  // }
}
