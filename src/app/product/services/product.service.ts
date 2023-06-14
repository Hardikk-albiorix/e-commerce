import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    {
      name: '',
      img: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      price: 5000,
      selectedRating: 2,
    },
    {
      name: '',
      img: 'https://images.unsplash.com/photo-1513540870164-07649a1d676f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxiaWN5Y2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      price: 7000,
      selectedRating: 4,
    },
    {
      name: '',
      img: 'https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwdHZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      price: 15000,
      selectedRating: 3,
    },
    {
      name: '',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      price: 12000,
      selectedRating: 3,
    },
    {
      name: '',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/smartwatch/a/p/t/-original-imagkf45zukmgcdp.jpeg?q=70',
      description:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      price: 8000,
      selectedRating: 2,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 2000,
      selectedRating: 3,
    },
    {
      name: '',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/sofa-sectional/o/b/i/symmetrical-190-maroon-82-chenille-no-60-sofa-rio-3seater-original-imagntqmhqxg66hd.jpeg?q=70',
      description:
        'Seventh Heaven Rio 3 Seater Sofa, Extra Spacious, Chenille Molfino Fabric: 3 Year Warranty Fabric 3 Seater Sofa  (Finish Color - Maroon, DIY(Do-It-Yourself))',
      price: 1500,
      selectedRating: 4,
    },
    {
      name: '',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/refrigerator-new/f/u/h/-original-imagpnfvtrbfaets.jpeg?q=70',
      description:
        'LG 688 L Frost Free Side by Side Refrigerator with Smart Inverter Multi Digital Sensors and Express Freezing  (Dark Graphite Steel, GC-B257KQDV)',
      price: 36500,
      selectedRating: 4,
    },
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }
}
