import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {

  constructor(private http: HttpClient) { }
  getPlayerInfo(id: string){
    return this.http.get(`https://api.cricapi.com/v1/players_info?apikey=${environment.apiKey2}&id=`+id);
  }
}
