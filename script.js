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
import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('braed', 5);
add('apples', 4);

console.log(cart);

/*

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

/*

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

*/

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

// creating a copy of the state using the Object method

const stateClone = Object.assign({}, state);
console.log(stateClone);
// creating a copy of the state using lodash module
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

state.user.loggedIn = false;

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting} ${this.name}`);
  }
}

const jonas = new Person('Jonas');

import 'core-js/stable';

// Pollyfilling async functions
import 'regenerator-runtime/runtime.js';
