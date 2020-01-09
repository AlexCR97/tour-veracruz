import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-home/tab-home.module').then(m => m.TabHomePageModule)
          }
        ]
      },
      {
        path: 'tab-places',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-places/tab-places.module').then(m => m.TabPlacesPageModule)
          }
        ]
      },
      {
        path: 'tab-routes',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-routes/tab-routes.module').then(m => m.TabRoutesPageModule)
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
