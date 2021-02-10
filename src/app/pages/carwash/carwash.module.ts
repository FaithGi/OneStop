import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarwashPageRoutingModule } from './carwash-routing.module';

import { CarwashPage } from './carwash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarwashPageRoutingModule
  ],
  declarations: [CarwashPage]
})
export class CarwashPageModule {}
