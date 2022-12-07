import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss'],
})
export class SortByComponent implements OnInit {
  count: number = 1;
  sort_by: any = [];
  constructor(
    private route: ActivatedRoute,
    private _gamesservice: GamesService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.getsort_by(params.get('sort_by'));
    });
  }

  getsort_by(sort_by: any) {
    this._gamesservice.getsort_by(sort_by).subscribe({
      next: (data) => {
        this.sort_by = data;
        console.log(this.sort_by);
      },
    });
  }

  ngOnInit(): void {}
}
