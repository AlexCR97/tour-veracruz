import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  categories: Array<string> = [
    "pizza",
    "camera",
    "football",
    "bed",
    "build",
    "desktop",
    "fitness",
    "heart",
    "paw",
    "wine",
  ];

  places: Array<object> = [
    {
      title: "Lugar 0",
      img: "../../assets/images/0.jpeg",
    },
    {
      title: "Lugar 1",
      img: "../../assets/images/1.jpeg",
    },
    {
      title: "Lugar 2",
      img: "../../assets/images/2.jpeg",
    },
    {
      title: "Lugar 3",
      img: "../../assets/images/3.jpeg",
    },
    {
      title: "Lugar 4",
      img: "../../assets/images/4.jpeg",
    },
    {
      title: "Lugar 5",
      img: "../../assets/images/5.jpeg",
    },
  ];

  routes: Array<object> = [
    {
      title: "Lugar 6",
      img: "../../assets/images/6.jpeg",
    },
    {
      title: "Lugar 7",
      img: "../../assets/images/7.jpeg",
    },
    {
      title: "Lugar 8",
      img: "../../assets/images/8.jpeg",
    },
    {
      title: "Lugar 9",
      img: "../../assets/images/9.jpeg",
    },
    {
      title: "Lugar 10",
      img: "../../assets/images/10.jpeg",
    },
    {
      title: "Lugar 11",
      img: "../../assets/images/11.jpeg",
    },
  ]

  constructor(private router: Router) { }

  ngOnInit() { }

  onClickPlace(place: string) {
    console.log("Clicked: " + JSON.stringify(place));

    this.router.navigateByUrl('/details');
  }

  onClickRoute(route: string) {
    console.log("Clicked: " + JSON.stringify(route));

    this.router.navigateByUrl('/details-route');
  }

}
