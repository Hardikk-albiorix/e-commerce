import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartLength!: number;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.cartCount$.subscribe((count) => {
      this.cartLength = count;
    });
  }
}
