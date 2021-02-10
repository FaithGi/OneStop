import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarwashPage } from './carwash.page';

const routes: Routes = [
  {
    path: '',
    component: CarwashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarwashPageRoutingModule {}
