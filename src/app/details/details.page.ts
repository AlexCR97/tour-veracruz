import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverDetailsInfoComponent } from '../popover-details-info/popover-details-info.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  private readonly containers = new Map<string, boolean>([
    ["contacto", false],
    ["acerca-de", true],
    ["resena", true],
  ]);

  private resenas: Array<object> = [
    {
      img: "",
      username: "Alejandro CR",
      time: "Hace 3 horas",
      rating: 4.2,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sapiente rerum velit, adipisci fuga ex modi repellat iure vel! Fuga tempora dicta expedita quibusdam numquam placeat laudantium consectetur, ipsam quisquam.",
    },
    {
      img: "",
      username: "Diana Gallegos",
      time: "Hace 2 días",
      rating: 3.8,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officiis, modi eaque quia numquam, doloribus dignissimos, alias sit dolorum quod libero rem atque? Iste vitae fugiat ullam molestiae accusamus cumque?",
    },
    {
      img: "",
      username: "Edgar Barragan",
      time: "Hace 1 semana",
      rating: 4.5,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum, recusandae in hic sit mollitia. Inventore iusto perferendis doloribus laboriosam ipsum veniam quibusdam maiores quaerat ducimus minus sunt, corporis exercitationem?",
    },
  ];

  constructor(
    private router: Router,
    private popoverController: PopoverController
  ) { }

  ngOnInit() { 
    this.changeActiveContainer("contacto");

    const ionButtonMore = document.getElementById("ion-button-more");
    //ionButtonMore.addEventListener("click", this.presentPopover);
  }

  changeActiveContainer(id: string) {
    let containerIds = Array.from(this.containers.keys());

    containerIds.forEach(currentId => {
      this.containers.set(currentId, currentId == id);
      let visibility: boolean = this.containers.get(currentId);
      this.changeContainerVisibility(currentId, visibility);
    });
  }

  changeContainerVisibility(id: string, visible: boolean) {
    let container = document.getElementById(id);

    if (visible) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  }

  onClickCamera() {
    console.log("Clicked camera icon");

    this.router.navigateByUrl("/gallery");
  }

  async presentPopover(ev: any) {
    console.log("Event is: " + ev);
    console.log("Popover controller: " + this.popoverController);

    const popover = await this.popoverController.create({
      component: PopoverDetailsInfoComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  segmentChanged(ev: any) {
    let containerId = ev.detail.value;
    console.log('Segment: ' + containerId);
    this.changeActiveContainer(containerId);
  }

}
