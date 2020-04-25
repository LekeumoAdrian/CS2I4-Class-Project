import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiplomesPage } from './diplomes.page';

const routes: Routes = [
  {
    path: '',
    component: DiplomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiplomesPageRoutingModule {}
