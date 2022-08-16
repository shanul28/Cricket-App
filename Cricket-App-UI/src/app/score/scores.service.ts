import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor(private http:HttpClient) { }
  getTeams()
  {
    return this.http.get(`https://api.cricapi.com/v1/cricScore?apikey=${environment.apiKey2}`);
  }
}
