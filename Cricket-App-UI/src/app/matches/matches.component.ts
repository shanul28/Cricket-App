import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatchesService} from './matches.service'
interface Teams{
  id: string;
  name: string;
  status: string;
  venue:string;
  date:string
}
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  public teams:Teams[]=[];
  public allTeams:Teams[]=[];
  public type:any;
  searchTerm = '';
  filter = new FormControl('');
  constructor(private matchService:  MatchesService) { }
  ngOnInit(): void {
    this.matchService.getMatches().subscribe((data:any)=>{
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
