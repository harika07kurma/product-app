import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductdetailsRoutingModule } from './product-details-routing.module';
import { ProductdetailsComponent } from './product-details.component';


@NgModule({
  declarations: [
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    ProductdetailsRoutingModule
  ]
})
export class ProductdetailsModule { }
