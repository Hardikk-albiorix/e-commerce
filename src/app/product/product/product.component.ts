import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    if (!this.products?.length) {
      this.productService.saveProducts(this.productService.products);
      this.products = this.productService.getProducts();
    }
    this.productService.getCartLength();
  }

  addToCart(product: Product, isAdd: boolean) {
    product.quantity += isAdd ? 1 : -1;
    this.productService.saveProducts(this.products);
    if (product.quantity <= 1) {
      this.productService.getCartLength();
    }
  }
}
