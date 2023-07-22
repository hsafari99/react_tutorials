console.log("Reading ProductRepo...");

const cartText = `<div>You have ${Math.ceil(Math.random() * 100)} items in product.`;

document.querySelector('#products').innerHTML = cartText;