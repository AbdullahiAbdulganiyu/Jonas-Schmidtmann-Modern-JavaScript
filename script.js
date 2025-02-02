// Importing Module

// import {
//   addToCart,
//   totalPrice as price,
//   totalquantity,
// } from './shoppingCart.js';
// console.log('Importing Module');

// addToCart('bread', 5);

// console.log(price, totalquantity);

import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
