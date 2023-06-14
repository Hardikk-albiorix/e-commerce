import { Injectable } from '@angular/core';
import { Product } from 'src/app/product/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productCart = [
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
    {
      name: 'Action Casuals ShoesFor Men (White)',
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/g/k/9-atg-757-9-action-grey-original-imagn4dmh8rky7zz.jpeg?q=70',
      description:
        'Action Athleo is a spectacular range of footwear from the house of ACTION SHOES. ATHLEO is dedicated to the application of sports science and innovation in the development of high performance, comfortable sports shoes the ground breaking materials and innovative with new technology.',
      price: 3000,
      selectedRating: 3,
    },
  ];

  constructor() {}

  get getCartProducts():Product[] {
    return this.productCart;
  }

  removeCartProduct(i: number) {
    this.productCart.splice(i, 1);
  }
}
