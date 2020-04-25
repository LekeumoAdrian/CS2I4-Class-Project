import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebouchesPageRoutingModule } from './debouches-routing.module';

import { DebouchesPage } from './debouches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebouchesPageRoutingModule
  ],
  declarations: [DebouchesPage]
})
export class DebouchesPageModule {}
