import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class  MatchesService {

  constructor(private http:HttpClient) { }
  getMatches()
  {
    return this.http.get(`https://api.cricapi.com/v1/currentMatches?apikey=${environment.apiKey2}`);
  }
}
