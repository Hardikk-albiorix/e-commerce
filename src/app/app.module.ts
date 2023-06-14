import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductModule } from './product/product.module';
import { MaterialModule } from './shared/material/material.module';
import { CartModule } from './cart/cart.module';
import { HeaderComponent } from './shared/component/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductModule,
    MaterialModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
