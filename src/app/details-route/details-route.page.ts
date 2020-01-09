import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-route',
  templateUrl: './details-route.page.html',
  styleUrls: ['./details-route.page.scss'],
})
export class DetailsRoutePage implements OnInit {

  private places: Array<any> = [ 0, 1, 2, 3, 4, 5, ];

  constructor() { }

  ngOnInit() {
  }

}
