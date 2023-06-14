import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/interfaces/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productCart!: Product[];
  displayedColumns: string[] = ['item', 'price', 'quantity', 'action'];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartProduct();
  }

  getCartProduct(){
    this.productCart = this.cartService.getCartProducts();
    return this.productCart
  }

  removeProduct(i:number){
    this.cartService.removeCartProduct(i);
    this.getCartProduct();
  }
}
