import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabRoutesPageRoutingModule } from './tab-routes-routing.module';

import { TabRoutesPage } from './tab-routes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabRoutesPageRoutingModule
  ],
  declarations: [TabRoutesPage]
})
export class TabRoutesPageModule {}
