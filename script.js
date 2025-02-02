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

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();

// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
lastPost.then(last => console.log(last));
