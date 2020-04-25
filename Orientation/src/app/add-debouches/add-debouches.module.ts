import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDebouchesPageRoutingModule } from './add-debouches-routing.module';

import { AddDebouchesPage } from './add-debouches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddDebouchesPageRoutingModule
  ],
  declarations: [AddDebouchesPage]
})
export class AddDebouchesPageModule {}
