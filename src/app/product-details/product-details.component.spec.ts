import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailsComponent } from './product-details.component';

describe('ProductdetailsComponent', () => {
  let component: ProductdetailsComponent;
  let fixture: ComponentFixture<ProductdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdetailsComponent]
    });
    fixture = TestBed.createComponent(ProductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
