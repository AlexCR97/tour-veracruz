import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-routes',
  templateUrl: './tab-routes.page.html',
  styleUrls: ['./tab-routes.page.scss'],
})
export class TabRoutesPage implements OnInit {

  routes: Array<object> = [
    {
      title: "Ruta 0",
      img: "../../assets/images/6.jpeg",
      rating: 3.8,
      time: "2 hrs",
      price: 629.00,
    },
    {
      title: "Ruta 1",
      img: "../../assets/images/7.jpeg",
      rating: 4.5,
      time: "2 hrs",
      price: 629.00,
    },
    {
      title: "Ruta 2",
      img: "../../assets/images/8.jpeg",
      rating: 4.1,
      time: "2 hrs",
      price: 629.00,
    },
    {
      title: "Ruta 3",
      img: "../../assets/images/9.jpeg",
      rating: 3.2,
      time: "2 hrs",
      price: 629.00,
    },
    {
      title: "Ruta 4",
      img: "../../assets/images/10.jpeg",
      rating: 4.4,
      time: "2 hrs",
      price: 629.00,
    },
    {
      title: "Ruta 5",
      img: "../../assets/images/11.jpeg",
      rating: 4.8,
      time: "2 hrs",
      price: 629.00,
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  onClick(route: object) {
    console.log("Clicked: " + JSON.stringify(route));
    this.router.navigateByUrl("/details-route");
  }

}
