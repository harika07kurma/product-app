import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';

const Agmaterial=[MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatDividerModule,
  MatGridListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Agmaterial

  ],
  exports:[Agmaterial]
})
export class AgMaterialModule { }
