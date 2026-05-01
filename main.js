// Custom Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Color Selector Logic
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const swatches = product.querySelectorAll('.swatch');
        const colorOverlay = product.querySelector('.color-overlay');
        const colorSync = product.querySelector('.thumb-color-sync');

        swatches.forEach(swatch => {
            swatch.addEventListener('click', (e) => {
                e.stopPropagation(); // prevent triggering other click events on the card
                // Remove active class from all swatches in this product
                swatches.forEach(s => s.classList.remove('active'));
                // Add active class to clicked swatch
                swatch.classList.add('active');
                // Change overlay color
                const color = swatch.getAttribute('data-color');
                colorOverlay.style.backgroundColor = color;
                if(colorSync) colorSync.style.backgroundColor = color;
            });
        });
    });
});

// Simple Log
console.log('Alazan Store Lookbook Loaded');

// Global function for gallery views
window.changeView = function(productId, viewType, element) {
    const card = document.getElementById(productId);
    const graphic = card.querySelector('.shirt-graphic');
    const fabricTexture = card.querySelector('.fabric-texture');
    const colorOverlay = card.querySelector('.color-overlay');
    const composite = card.querySelector('.t-shirt-composite');
    const thumbs = card.querySelectorAll('.thumb-item');
    
    // Update active thumb state
    thumbs.forEach(thumb => thumb.classList.remove('active'));
    if(element) element.classList.add('active');
    
    // Reset defaults
    composite.style.transform = 'scale(1)';
    fabricTexture.style.objectFit = 'contain';
    colorOverlay.style.webkitMaskImage = "url('zara_tshirt_transparent.png?v=1')";
    colorOverlay.style.maskImage = "url('zara_tshirt_transparent.png?v=1')";
    colorOverlay.style.width = '130%';
    colorOverlay.style.height = '130%';
    fabricTexture.style.width = '130%';
    fabricTexture.style.height = '130%';
    graphic.style.opacity = '0.95';
    
    if (viewType === 'front') {
        fabricTexture.src = 'zara_tshirt_transparent.png?v=1';
        graphic.style.display = 'block';
        graphic.style.transform = 'translate(-50%, -50%) scale(1)';
    } else if (viewType === 'back') {
        fabricTexture.src = 'zara_tshirt_back_transparent.png';
        colorOverlay.style.webkitMaskImage = "url('zara_tshirt_back_transparent.png')";
        colorOverlay.style.maskImage = "url('zara_tshirt_back_transparent.png')";
        graphic.style.display = 'none';
    } else if (viewType === 'details') {
        fabricTexture.src = 'zara_cotton_texture.png';
        colorOverlay.style.webkitMaskImage = 'none';
        colorOverlay.style.maskImage = 'none';
        colorOverlay.style.width = '100%';
        colorOverlay.style.height = '100%';
        fabricTexture.style.width = '100%';
        fabricTexture.style.height = '100%';
        fabricTexture.style.objectFit = 'cover';
        graphic.style.display = 'block';
        graphic.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else if (viewType === 'texture') {
        fabricTexture.src = 'zara_cotton_texture.png';
        colorOverlay.style.webkitMaskImage = 'none';
        colorOverlay.style.maskImage = 'none';
        colorOverlay.style.width = '100%';
        colorOverlay.style.height = '100%';
        fabricTexture.style.width = '100%';
        fabricTexture.style.height = '100%';
        fabricTexture.style.objectFit = 'cover';
        graphic.style.display = 'none';
    }
};
