import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProductsData();
    if (!this.products?.length) {
      this.getProducts();
    }
    this.productService.getCartLength();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.products.forEach((item: Product) => {
        item.rating.rate = Math.floor(item.rating.rate);
      });
    });
    console.log(this.products);
    this.productService.saveProducts(this.products);
  }

  addToCart(product: Product, isAdd: boolean) {
    product.quantity += isAdd ? 1 : -1;
    this.productService.saveProducts(this.products);
    this.productService.getCartLength();
  }
}
