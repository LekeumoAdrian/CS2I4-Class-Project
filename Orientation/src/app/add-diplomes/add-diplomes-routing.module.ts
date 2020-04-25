import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDiplomesPage } from './add-diplomes.page';

const routes: Routes = [
  {
    path: '',
    component: AddDiplomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDiplomesPageRoutingModule {}
