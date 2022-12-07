import { GamesService } from './../games.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gamdetailse-',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      // 400: {
      //   items: 2
      // },
      // 740: {
      //   items: 3
      // },
      // 940: {
      //   items: 4
      // }
    },
    nav: true,
  };

  details: any = null;
  minimum: any = {};
  platform: any={}
  //game: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _gamesservice: GamesService
  ) {
    let { id } = this._activatedRoute.snapshot.params;
    // console.log(id);
    this.getDetails(id);
  }

  getDetails(id: string) {
    this._gamesservice.getDetails(id).subscribe({
      next: (res) => {
        this.details = res;
        this.minimum = res.minimum_system_requirements;
        console.log(this.details);
      },
    });
  }

  ngOnInit(): void {}
}
