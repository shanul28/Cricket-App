import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FavoritePlayers } from '../favorites/favorite-players';
import {RecommendedService} from '../services/recommended.service'
import { FavoritesService } from '../services/favorites.service';
import { PlayerInfoService } from '../statistics/view-player/player-info.service';
import RecommendedJson from '../../assets/json/recommended.json';

interface Players{
  id: string;
  name: string;
  country: string;
}


@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css'],
  providers:[DecimalPipe]
})


export class RecommendedComponent implements OnInit {

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


 
  playerDetails = {
    player: '',
    id: '',
    role:''
  };

  constructor(private route:ActivatedRoute, private favoritesService: FavoritesService,
    private playerInfoService: PlayerInfoService, private recommendedService: RecommendedService) { }
  ngOnInit(): void {
    this.recommendedService.getRecommendation().subscribe((data: any) => {

      console.log(data);
      //this.players.push(...data.data);
      this.players = data.data
      this.allPlayers = this.players;
      //console.log(this.players);
      //console.log(this.allPlayers);
      //console.log(data.data);
    
  });
  
  }
 
  search(value: string): void {
    this.allPlayers= this.players.filter((val) =>
      val.name.toLowerCase().includes(value) || val.name.toUpperCase().includes(value) || val.name.includes(value)
    );
  }

    playerInfo={
      player: '',
      id: '',
      role:''
    }

    onAdd(id: any, name: any) {
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
  }