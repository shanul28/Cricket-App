import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  constructor(private http: HttpClient) { }
  getPlayers() {
    
    return this.http.get(`https://api.cricapi.com/v1/players?apikey=${environment.apiKey2}`);
  }

  // getPlayers2() {
    
  //   return this.http.get(`https://api.cricapi.com/v1/favplayer?apikey=${environment.apiKey}`);
  // }
}
