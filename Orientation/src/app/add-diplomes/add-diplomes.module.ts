import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDiplomesPageRoutingModule } from './add-diplomes-routing.module';

import { AddDiplomesPage } from './add-diplomes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddDiplomesPageRoutingModule
  ],
  declarations: [AddDiplomesPage]
})
export class AddDiplomesPageModule {}
