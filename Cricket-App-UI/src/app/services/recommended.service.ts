import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecommendedService {

  constructor(private http: HttpClient) { }
getRecommendation()
{
  return this.http.get(`https://api.cricapi.com/v1/players?apikey=${environment.apiKey2}`);
}
}
