import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  constructor(private http:HttpClient) { }
  getSeries()
  {
    return this.http.get(`https://api.cricapi.com/v1/series?apikey=${environment.apiKey2}`);
  }
}
