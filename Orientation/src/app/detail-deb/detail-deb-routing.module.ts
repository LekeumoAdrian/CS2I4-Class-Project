import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailDebPage } from './detail-deb.page';

const routes: Routes = [
  {
    path: '',
    component: DetailDebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDebPageRoutingModule {}
