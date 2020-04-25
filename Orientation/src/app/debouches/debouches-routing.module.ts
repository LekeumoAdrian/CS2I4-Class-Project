import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebouchesPage } from './debouches.page';

const routes: Routes = [
  {
    path: '',
    component: DebouchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebouchesPageRoutingModule {}
