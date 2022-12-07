import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
//game: any;
//title: any;
@Input()game:any


  constructor() { }

  ngOnInit(): void {
  }

}
