import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [];

  constructor(
    private productService: ProductService, 
    private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
      this.products = data;
      },
      error: (err) => {
      console.error('Error fetching products', err);
      }
    });
  }
  onProductClicked(productId: number): void {
    this.router.navigate(['/products', productId]);
  }

}
