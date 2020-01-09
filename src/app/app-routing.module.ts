import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab-home',
    loadChildren: () => import('./tab-home/tab-home.module').then( m => m.TabHomePageModule)
  },
  {
    path: 'tab-places',
    loadChildren: () => import('./tab-places/tab-places.module').then( m => m.TabPlacesPageModule)
  },
  {
    path: 'tab-routes',
    loadChildren: () => import('./tab-routes/tab-routes.module').then( m => m.TabRoutesPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'popover-details',
    loadChildren: () => import('./popover-details/popover-details.module').then( m => m.PopoverDetailsPageModule)
  },
  {
    path: 'details-route',
    loadChildren: () => import('./details-route/details-route.module').then( m => m.DetailsRoutePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
