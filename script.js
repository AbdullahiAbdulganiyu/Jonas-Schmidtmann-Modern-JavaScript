// Importing Module

// import {
//   addToCart,
//   totalPrice as price,
//   totalquantity,
// } from './shoppingCart.js';
// console.log('Importing Module');

// addToCart('bread', 5);

// console.log(price, totalquantity);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { totalPrice, totalquantity } from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('braed', 5);
add('apples', 4);

console.log(cart);
