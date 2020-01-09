import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverDetailsPage } from './popover-details.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverDetailsPageRoutingModule {}
