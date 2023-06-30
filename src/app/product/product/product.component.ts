import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProductsData();
    if (!this.products?.length) {
      this.getProducts();
    }
    this.productService.getCartLength();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
    this.productService.saveProducts(this.products);
  }

  addToCart(product: Product, isAdd: boolean) {
    product.quantity += isAdd ? 1 : -1;
    this.productService.saveProducts(this.products);
    this.productService.getCartLength();
  }
}
