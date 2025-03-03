import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductdetailsComponent {
product: any;
  constructor( private productService: ProductService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    const productId=+this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(productId).subscribe(data=>{
      this.product = data;
    })
  }
}
