// Exporting module
console.log('Exporting Module');

// Blocking code
console.log('Start fetching');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finished fetch');

const shoppingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 273;
const totalquantity = 27;

export { totalPrice, totalquantity };

export default function (product, quantity) {
  cart.push({ quantity, product });
  console.log(`${quantity} ${product} added to cart`);
}
