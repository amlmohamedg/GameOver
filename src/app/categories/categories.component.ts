import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  count:number=1
  category: any = [];
  constructor(private route:ActivatedRoute,private _gamesservice:GamesService) { 

    this.route.paramMap.subscribe(
      params => {
        this.getcategory(params.get('category'))
      }
    );
  }

  getcategory(category:any) {
    this._gamesservice.getcategory(category).subscribe({
      next: (data) => {
        this.category = data;
        console.log(this.category);
      },
    });
  }

  ngOnInit(): void {
  }

}
