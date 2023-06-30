import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();
  url = 'https://fakestoreapi.com';
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.url + '/products').pipe(
      map((item: any) =>
        item.map((res: any) => {
          res.quantity = 0;
          return res;
        })
      )
    );
  }

  saveProducts(products: Product[]) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  getProductsData() {
    return JSON.parse(localStorage.getItem('products') as any) || [];
  }

  getCartLength() {
    const Products = this.getProductsData();
    const length = Products.filter((item: Product) => item.quantity > 0).length;
    this.cartCount.next(length);
  }
}
