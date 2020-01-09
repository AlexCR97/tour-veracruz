import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabRoutesPage } from './tab-routes.page';

const routes: Routes = [
  {
    path: '',
    component: TabRoutesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabRoutesPageRoutingModule {}
