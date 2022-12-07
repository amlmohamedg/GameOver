import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
 count:number=1
  allGames:any=[]
  constructor(private _gamesservice:GamesService) { }

  ngOnInit(): void {


    this._gamesservice.getAllGames().subscribe({
      next:(data)=>{
        this.allGames =data;
        console.log(data);
      }
      })
      



  }

}
