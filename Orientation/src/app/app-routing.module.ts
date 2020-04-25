import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'diplomes',
    loadChildren: () => import('./diplomes/diplomes.module').then( m => m.DiplomesPageModule)
  },
  {
    path: 'debouches',
    loadChildren: () => import('./debouches/debouches.module').then( m => m.DebouchesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'add-diplomes',
    loadChildren: () => import('./add-diplomes/add-diplomes.module').then( m => m.AddDiplomesPageModule)
  },
  {
    path: 'add-debouches',
    loadChildren: () => import('./add-debouches/add-debouches.module').then( m => m.AddDebouchesPageModule)
  },
  {
    path: 'detail-deb',
    loadChildren: () => import('./detail-deb/detail-deb.module').then( m => m.DetailDebPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
