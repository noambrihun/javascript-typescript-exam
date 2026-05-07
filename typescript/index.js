"use strict";
function sortAvailableProducts(products) {
    let availableProducts = products.filter(product => product.isAvailable);
    availableProducts.sort((a, b) => a.price - b.price);
    return availableProducts;
}
const products = [
    { id: 1, name: 'Laptop', price: 1000, isAvailable: true },
    { id: 1, name: 'Keyboard', price: 100, isAvailable: false },
    { id: 1, name: 'Mouse', price: 50, isAvailable: true },
];
console.log(products);
