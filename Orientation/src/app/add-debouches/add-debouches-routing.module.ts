import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDebouchesPage } from './add-debouches.page';

const routes: Routes = [
  {
    path: '',
    component: AddDebouchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDebouchesPageRoutingModule {}
