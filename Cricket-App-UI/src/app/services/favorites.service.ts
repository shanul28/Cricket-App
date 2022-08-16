import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  url = "/api/v1/favorite"
  constructor(private http: HttpClient) { }

  getPlayer(email: string){
    return this.http.get(`${this.url}/${email}/player`);
  }

  addPlayer(email: string, playerInfo: any){
    return this.http.post(`${this.url}/${email}/player`, playerInfo);
  }

  deletePlayer(email: string, name: string){
    //console.log(`${this.url}/${email}/${name}`);
    
    return this.http.delete(`${this.url}/${email}/${name}`);
  }
}
