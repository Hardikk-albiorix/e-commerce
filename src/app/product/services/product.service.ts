import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  products: Product[] = [
    {
      id: Math.random().toString(16).slice(2),
      name: 'HERO Skyper 26T 26 T Mountain/Hardtail Cycle  (Single Speed, Black)',
      img: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
      description:
        'Hero Skyper cycle is meant for you. Featuring V brakes, this cycle is perfect for riding on the mountains. Its light steel frame, hand bar end grips, integrated carrier, V brakes and an ergonomic saddle will offer you a smooth and safe ride.',
      price: 5000,
      selectedRating: 2,
      quantity: 0,
    },
    {
      id: Math.random().toString(16).slice(2),
      name: 'HERCULES Stimulus Pro RF 26 T Road Cycle  (Single Speed)',
      img: 'https://images.unsplash.com/photo-1513540870164-07649a1d676f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxiaWN5Y2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
      description:
        'Hercules cycle is ideal for you. Its double alloy rims boast enhanced strength-to-weight ratio. Moreover, it comes with a Quick Release lever that allows you to adjust the height of the seat according to your convenience and comfort.',
      price: 7000,
      selectedRating: 4,
      quantity: 0,
    },
    {
      id: Math.random().toString(16).slice(2),
      name: 'SAMSUNG 80 cm (32 inch) HD Ready LED Smart Tizen TV  (UA32T4340AKXXL / UA32T4340BKXXL)',
      img: 'https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwdHZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
      description:
        'Take your entertainment to the next level with this Samsung TV. With the Content Guide on this TV, you now have access to content from the top-rated TV shows. The HD picture quality, in combination with Pure Color.',
      price: 25000,
      selectedRating: 3,
      quantity: 0,
    },
    {
      id: Math.random().toString(16).slice(2),
      name: 'Realme 10 Pro 5G (Nebula Blue, 128 GB)  (8 GB RAM)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70',
      description:
        "Carry the Realme 10 Pro 5G with you wherever you go to catch people's attention. You can enjoy a large screen size with a significantly compact frame thanks to the 17.06 cm (6.72) screen and 93.76% screen-to-body ratio, and the 120 Hz refresh rate provides you with a fantastic user experience.",
      price: 28000,
      selectedRating: 3,
      quantity: 0,
    },
    {
      id: Math.random().toString(16).slice(2),
      name: 'Noise Icon Buzz 1.69" Display with Bluetooth Calling Smartwatch(Pink Strap, Regular)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/smartwatch/a/p/t/-original-imagkf45zukmgcdp.jpeg?q=70',
      description:
        'Noise Icon Buzz 1.69" Display with Bluetooth Calling, Built-In Games, Voice Assistant Smartwatch  (Pink Strap, Regular)',
      price: 8000,
      selectedRating: 2,
      quantity: 0,
    },
    {
      id: Math.random().toString(16).slice(2),
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 2000,
      selectedRating: 3,
      quantity: 0,
    },
    {
      id: Math.random().toString(16).slice(2),
      name: 'Seventh Heaven Rio 3 Seater Sofa(Finish Color-Marron)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/sofa-sectional/o/b/i/symmetrical-190-maroon-82-chenille-no-60-sofa-rio-3seater-original-imagntqmhqxg66hd.jpeg?q=70',
      description:
        'Seventh Heaven Rio 3 Seater Sofa, Extra Spacious, Chenille Molfino Fabric: 3 Year Warranty Fabric 3 Seater Sofa  (Finish Color - Maroon, DIY(Do-It-Yourself))',
      price: 15000,
      selectedRating: 4,
      quantity: 0,
    },
    {
      id: Math.random().toString(16).slice(2),
      name: 'LG 688 L Frost Free Side by Side Refrigerator',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/refrigerator-new/f/u/h/-original-imagpnfvtrbfaets.jpeg?q=70',
      description:
        'LG 688 L Frost Free Side by Side Refrigerator with Smart Inverter Multi Digital Sensors and Express Freezing  (Dark Graphite Steel, GC-B257KQDV)',
      price: 36500,
      selectedRating: 4,
      quantity: 0,
    },
  ];

  constructor() {}

  saveProducts(products: Product[]) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  getProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products') as any);
  }

  getCartLength() {
    const Products = this.getProducts();
    const length = Products.filter((item) => item.quantity > 0).length;
    this.cartCount.next(length);
  }
}
