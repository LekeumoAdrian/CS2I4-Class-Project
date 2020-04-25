import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiplomesPageRoutingModule } from './diplomes-routing.module';

import { DiplomesPage } from './diplomes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiplomesPageRoutingModule
  ],
  declarations: [DiplomesPage]
})
export class DiplomesPageModule {}
