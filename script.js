const products = [
    {
        id: 1,
        name: 'Casual Sneaker',
        price: 49.99,
        image: 'img/image.1.webp',
        width: 300,  // example width
        height: 300  // example height
    },
    {
        id: 2,
        name: 'Leather Loafers',
        price: 59.99,
        image: 'img/image.2.jpg',
        width: 300,
        height: 300
    },
    {
        id: 3,
        name: 'Canvas Shoes',
        price: 39.99,
        image: 'img/image.3.jpg',
        width: 300,
        height: 300
    },
    {
        id: 4,
        name: 'Sporty Sneakers',
        price: 54.99,
        image: 'img/image.4.jpg',
        width: 300,
        height: 300
    },
    {
        id: 5,
        name: 'Slip-on Shoes',
        price: 44.99,
        image: 'img/image.5.webp',
        width: 300,
        height: 300
    },
    {
        id: 6,
        name: 'Brogue Shoes',
        price: 64.99,
        image: 'img/image.6.jfif',
        width: 300,
        height: 300
    },
    {
        id: 7,
        name: 'Desert Boots',
        price: 69.99,
        image: 'img/image.7.jfif',
        width: 300,
        height: 300
    },
    {
        id: 8,
        name: 'Sporty Sandals',
        price: 29.99,
        image: 'img/image.8.jfif',
        width: 300,
        height: 300
    },
    {
        id: 9,
        name: 'Chelsea Boots',
        price: 74.99,
        image: 'img/image.9.avif',
        width: 300,
        height: 300
    },
    {
        id: 10,
        name: 'Work Boots',
        price: 89.99,
        image: 'img/image.10.webp',
        width: 300,
        height: 300
    }
];

let cart = [];

function displayProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function addToCart(productId) {
    cart.push(productId);
    document.getElementById('cart-count').innerText = cart.length;
    alert('Product added to cart!');
}

function goToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Clear the main content
    document.querySelector('main').innerHTML = '<h1>Checkout</h1>';

    // Show a simple order confirmation
    const confirmationDiv = document.createElement('div');
    confirmationDiv.innerHTML = `
        <h2>Order Confirmed!</h2>
        <img src="img/image.11.jpg" alt="Thank You">
        <p>Thank you for your order! You will receive a confirmation email shortly.</p>
    `;
    document.querySelector('main').appendChild(confirmationDiv);

    // Clear cart
    cart = [];
    document.getElementById('cart-count').innerText = 0;
}

displayProducts();