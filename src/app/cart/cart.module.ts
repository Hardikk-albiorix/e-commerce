import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule,MaterialModule],
})
export class CartModule {}
