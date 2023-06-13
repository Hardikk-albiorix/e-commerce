import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    {
      img: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      price: 5000,
      selectedRating: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1513540870164-07649a1d676f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxiaWN5Y2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      price: 7000,
      selectedRating: 4,
    },
    {
      img: 'https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwdHZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      price: 15000,
      selectedRating: 3,
    },
    {
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      price: 12000,
      selectedRating: 3,
    },
    {
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/smartwatch/a/p/t/-original-imagkf45zukmgcdp.jpeg?q=70',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      price: 8000,
      selectedRating: 2,
    },
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }
}
