// index2.js - Full functionality for Asgaard Sofa product page

document.addEventListener('DOMContentLoaded', function () {
    // Size selection functionality
    const sizeButtons = document.querySelectorAll('.sizes button');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            console.log('Selected size:', this.textContent);
        });
    });

    // Color selection functionality
    const colorSpans = document.querySelectorAll('.colors .c');
    colorSpans.forEach(span => {
        span.addEventListener('click', function () {
            // Remove active class from all colors
            colorSpans.forEach(c => c.classList.remove('active'));
            // Add active class to clicked color
            this.classList.add('active');
            console.log('Selected color:', this.className.split(' ')[1]);
        });
    });

    // Quantity controls
    const qtyMinus = document.querySelector('.qty button:first-child');
    const qtyPlus = document.querySelector('.qty button:last-child');
    const qtyDisplay = document.querySelector('.qty span');

    qtyMinus.addEventListener('click', function () {
        let currentQty = parseInt(qtyDisplay.textContent);
        if (currentQty > 1) {
            qtyDisplay.textContent = currentQty - 1;
        }
    });

    qtyPlus.addEventListener('click', function () {
        let currentQty = parseInt(qtyDisplay.textContent);
        qtyDisplay.textContent = currentQty + 1;
    });

    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = {
        'Description': document.querySelector('.info-content'),
        'Additional Information': document.querySelector('.info-content'), // Placeholder
        'Reviews [5]': document.querySelector('.info-content') // Placeholder
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            // Update content based on tab (placeholder for now)
            const tabName = this.textContent;
            console.log('Switched to tab:', tabName);

            // You can expand this to show different content for each tab
            if (tabName === 'Description') {
                // Show description content
            } else if (tabName === 'Additional Information') {
                // Show additional info content
            } else if (tabName === 'Reviews [5]') {
                // Show reviews content
            }
        });
    });

    // Product card overlay actions
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const addToCartBtn = card.querySelector('.overlay button');
        const shareSpan = card.querySelector('.actions span:nth-child(1)');
        const compareSpan = card.querySelector('.actions span:nth-child(2)');
        const likeSpan = card.querySelector('.actions span:nth-child(3)');

        addToCartBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            const productName = card.querySelector('h3').textContent;
            alert(`Added ${productName} to cart!`);
            console.log('Added to cart:', productName);
        });

        shareSpan.addEventListener('click', function (e) {
            e.stopPropagation();
            const productName = card.querySelector('h3').textContent;
            alert(`Sharing ${productName}`);
            console.log('Sharing:', productName);
        });

        compareSpan.addEventListener('click', function (e) {
            e.stopPropagation();
            const productName = card.querySelector('h3').textContent;
            alert(`Added ${productName} to compare`);
            console.log('Comparing:', productName);
        });

        likeSpan.addEventListener('click', function (e) {
            e.stopPropagation();
            const productName = card.querySelector('h3').textContent;
            alert(`Liked ${productName}`);
            console.log('Liked:', productName);
        });
    });

    // Newsletter subscribe functionality
    const subscribeBtn = document.querySelector('.newsletter-box button');
    const emailInput = document.querySelector('.newsletter-box input');

    subscribeBtn.addEventListener('click', function () {
        const email = emailInput.value.trim();
        if (email && email.includes('@')) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
            console.log('Subscribed with email:', email);
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Show more button functionality (placeholder)
    const showMoreBtn = document.querySelector('.show-more');
    showMoreBtn.addEventListener('click', function () {
        alert('Loading more products... (This is a placeholder)');
        console.log('Show more clicked');
    });

    // Add to cart button in main product
    const mainAddToCartBtn = document.querySelector('.cart');
    mainAddToCartBtn.addEventListener('click', function () {
        const qty = parseInt(qtyDisplay.textContent);
        const selectedSize = document.querySelector('.sizes .active').textContent;
        const selectedColor = document.querySelector('.colors .active') ?
            document.querySelector('.colors .active').className.split(' ')[1] : 'none';

        alert(`Added ${qty} Asgaard sofa(s) (Size: ${selectedSize}, Color: ${selectedColor}) to cart!`);
        console.log('Main product added to cart:', { qty, selectedSize, selectedColor });
    });

    // Compare button in main product
    const compareBtn = document.querySelector('.compare');
    compareBtn.addEventListener('click', function () {
        alert('Added Asgaard sofa to compare list!');
        console.log('Added to compare');
    });

    console.log('index2.js loaded successfully - All functionalities initialized');
});
