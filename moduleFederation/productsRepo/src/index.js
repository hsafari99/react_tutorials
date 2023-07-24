console.log("Reading ProductRepo...");

const productText = `<div>You have ${Math.ceil(Math.random() * 100)} products.`;

const mount = (el) => {
    el.innerHTML = productText;
}

// Situation #1
// App runs locally and we are sure we have a DIV element with specified ID
if (process.env.NODE_ENV == 'development') {
    const el = document.querySelector('#products'); // Should be a kind of unique ID to test and make sure that the app is running in isolation
    if (el) {
        mount(el);
    }
}

// Situation #2
// Run MFE in another app with no guarantee of having that DIV with specified ID

export { mount };