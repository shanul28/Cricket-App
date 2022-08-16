import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../services/favorites.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  userData = localStorage.getItem('userData');
  userEmail = JSON.parse(this.userData || '{}').email;
  favoritePlayers: Array<any> = [];
  constructor(private favoritesService: FavoritesService,
    private router: Router) { }

  ngOnInit(): void {
    this.favoritesService.getPlayer(this.userEmail).subscribe((data: any) => {
      this.favoritePlayers = data;
      //console.log(this.favoritePlayers[0].player);
      
    });
  }

  onView(id: string){
    //console.log(id);
    this.router.navigate(['/player', id]);
  }

   onDelete(name: string){
    this.favoritesService.deletePlayer(this.userEmail, name).subscribe((data)=>{
      //console.log(data);
      this.ngOnInit();
    });
   }
  }
