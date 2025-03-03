import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgMaterialModule } from './agMaterial/ag-material/ag-material.module';
import { ProductCardComponent } from './component/product-card-component/product-card.component';
import { ProductListComponent } from './component/product-list-component/product-list.component';
import { ProductdetailsModule } from './product-details/product-details.module';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductdetailsModule,
    BrowserAnimationsModule,
    AgMaterialModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
