import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsRoutePageRoutingModule } from './details-route-routing.module';

import { DetailsRoutePage } from './details-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsRoutePageRoutingModule
  ],
  declarations: [DetailsRoutePage]
})
export class DetailsRoutePageModule {}
