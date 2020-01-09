import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-places',
  templateUrl: './tab-places.page.html',
  styleUrls: ['./tab-places.page.scss'],
})
export class TabPlacesPage implements OnInit {

  places: Array<object> = [
    {
      title: "Lugar 0",
      img: "../../assets/images/0.jpeg",
      rating: 3.8,
    },
    {
      title: "Lugar 1",
      img: "../../assets/images/1.jpeg",
      rating: 4.5,
    },
    {
      title: "Lugar 2",
      img: "../../assets/images/2.jpeg",
      rating: 4.1,
    },
    {
      title: "Lugar 3",
      img: "../../assets/images/3.jpeg",
      rating: 3.2,
    },
    {
      title: "Lugar 4",
      img: "../../assets/images/4.jpeg",
      rating: 4.4,
    },
    {
      title: "Lugar 5",
      img: "../../assets/images/5.jpeg",
      rating: 4.8,
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  onClick(place: any) {
    console.log("Clicked: " + JSON.stringify(place));

    this.router.navigateByUrl("/details");
  }

}
