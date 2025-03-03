import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AgMaterialModule } from 'src/app/agMaterial/ag-material/ag-material.module';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() productClicked = new EventEmitter<void>();

  onButtonClick() {
    this.productClicked.emit();
  }
}
