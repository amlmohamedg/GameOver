import { GamesService } from './../games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

allGames:any=[]

  constructor(private _gamesservice:GamesService) { }

  ngOnInit(): void {

this._gamesservice.getAllGames().subscribe({
next:(data)=>{
  this.allGames =data.splice(0,3);
  console.log(data);
}
})


} 

}
