import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SeriesService } from './series.service';
import { DecimalPipe } from '@angular/common';
interface Series{
  id: string;
  name: string;
  startDate: string;
  endDate:string;
  matches:string
}
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public teams:Series[]=[];
  public allTeams:Series[]=[];
  public type:any;
  searchTerm = '';
  filter = new FormControl('');
  constructor(private seriesService: SeriesService) { }
  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data:any)=>{
      console.log(data)
      this.teams=data.data;
      this.allTeams=this.teams;
      console.log(this.teams)
    })
  }
  search(value: string): void {
    this.allTeams = this.teams.filter((val) =>
      val.name.toLowerCase().includes(value) || val.name.toUpperCase().includes(value) || val.name.includes(value)
    );
  }


}
