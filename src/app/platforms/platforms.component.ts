import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss'],
})
export class PlatformsComponent implements OnInit {
  count:number=1
  platform: any = [];
  constructor(private route:ActivatedRoute,private _gamesservice:GamesService) {

    this.route.paramMap.subscribe(
      params => {
        this.getplatform(params.get('platform'))
      }
    );
    
  }

  getplatform(platform:any) {
    this._gamesservice.getplatform(platform).subscribe({
      next: (data) => {
        this.platform = data;
        console.log(this.platform);
      },
    });
  }

  ngOnInit(): void {}
}
