// Exporting module
console.log('Exporting Module');

const shoppingCost = 10;
const cart = [];

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
