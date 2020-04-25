import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailDebPageRoutingModule } from './detail-deb-routing.module';

import { DetailDebPage } from './detail-deb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDebPageRoutingModule
  ],
  declarations: [DetailDebPage]
})
export class DetailDebPageModule {}
