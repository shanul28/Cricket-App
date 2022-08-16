import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import {ScoresService} from './scores.service';


interface Teams{
  id: string;
  matchType: string;
  status: string;
  t1:string;
  t2:string
}
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  providers:[DecimalPipe]
})

export class ScoreComponent implements OnInit {
  public teams:Teams[]=[];
  public allTeams:Teams[]=[];
  public type:any;
  searchTerm = '';
  filter = new FormControl('');
  constructor(private scoreService: ScoresService) { }
  ngOnInit(): void {
    this.scoreService.getTeams().subscribe((data:any)=>{
      console.log(data)
      this.teams=data.data;
      console.log(this.teams)
    })
  }
  search(value: string): void {
    this.allTeams = this.teams.filter((val) =>
      val.matchType.toLowerCase().includes(value) || val.matchType.toUpperCase().includes(value) || val.matchType.includes(value)
    );
  }


}
