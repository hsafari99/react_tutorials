console.warn("INSIDE CART REPO...");
const cartText = `<div>You have ${Math.ceil(Math.random() * 100)} items in Cart.`;

document.querySelector('#cart').innerHTML = cartText;