import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverDetailsPageRoutingModule } from './popover-details-routing.module';

import { PopoverDetailsPage } from './popover-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverDetailsPageRoutingModule
  ],
  declarations: [PopoverDetailsPage]
})
export class PopoverDetailsPageModule {}
