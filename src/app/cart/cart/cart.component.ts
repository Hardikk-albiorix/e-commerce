import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/interfaces/product';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['item', 'price', 'quantity', 'action'];
  productCart!: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    const productCart = this.productService.getProducts();
    this.productCart = productCart.filter((item) => item.quantity > 0);
  }

  productCounter(product: Product, isIncrease: boolean) {
    isIncrease ? (product.quantity += 1) : (product.quantity -= 1);
    const products = this.productService.getProducts();
    products.forEach((item) => {
      if (item.id == product.id) {
        item.quantity = product.quantity;
      }
    });
    this.productService.saveProducts(products);
    this.productCart = products.filter((item) => item.quantity > 0);
    if (product.quantity == 0) {
      this.productService.getCartLength();
    }
  }

  removeFromCart(product: Product) {
    const products = this.productService.getProducts();
    products.forEach((item) => {
      if (item.id == product.id) {
        item.quantity = 0;
      }
    });
    this.productService.saveProducts(products);
    this.productCart = products.filter((item) => item.quantity > 0);
    this.productService.getCartLength();
  }
}
