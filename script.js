// Importing Module

// import { totalPrice, totalquantity } from './shoppingCart';

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

// import shoppingCart, { totalPrice, totalquantity } from './shoppingCart.js';
// import add, { cart } from './shoppingCart.js';

/*

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

// const lastPost = getLastPost();
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

*/

const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalQuantity = 23;
  const totalPrice = 273;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('pizza', 2);
ShoppingCart2.addToCart('apples', 4);
