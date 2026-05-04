import os

js_to_add = """
// --- CART & CHECKOUT LOGIC ---

let cart = [];

window.addToCart = function(buttonElement) {
    const card = buttonElement.closest('.product-card');
    const title = card.querySelector('.product-info h4').textContent;
    const priceText = card.querySelector('.product-price').textContent;
    const price = parseInt(priceText.replace(/\D/g, ''));
    const activeColorSwatch = card.querySelector('.swatch.active');
    const colorName = activeColorSwatch ? activeColorSwatch.getAttribute('title') : 'Blanco';
    const imgSrc = card.querySelector('.shirt-graphic').src;
    
    cart.push({
        title: title,
        color: colorName,
        price: price,
        img: imgSrc
    });
    
    updateCartUI();
    document.getElementById('cart-menu').classList.add('open');
};

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const navCartCount = document.getElementById('nav-cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    cartCount.textContent = cart.length;
    navCartCount.textContent = cart.length;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Tu cesta está vacía</p>';
        cartTotalPrice.textContent = '0 ARS';
        checkoutBtn.disabled = true;
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        html += `
            <div class="cart-item">
                <img src="${item.img}" class="cart-item-img">
                <div class="cart-item-details">
                    <div>
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-color">${item.color}</div>
                        <div class="cart-item-price">${item.price.toLocaleString('es-AR')} ARS</div>
                    </div>
                    <div class="remove-item" onclick="removeFromCart(${index})">ELIMINAR</div>
                </div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = html;
    cartTotalPrice.textContent = total.toLocaleString('es-AR') + ' ARS';
    document.getElementById('pay-amount').textContent = total.toLocaleString('es-AR') + ' ARS';
    checkoutBtn.disabled = false;
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartUI();
};

document.addEventListener('DOMContentLoaded', () => {
    const cartMenu = document.getElementById('cart-menu');
    const openCartBtn = document.getElementById('open-cart');
    const closeCartBtn = document.getElementById('close-cart');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckoutBtn = document.getElementById('close-checkout');
    const checkoutForm = document.getElementById('checkout-form');
    
    if(openCartBtn) {
        openCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cartMenu.classList.add('open');
        });
    }
    
    if(closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            cartMenu.classList.remove('open');
        });
    }
    
    if(checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            cartMenu.classList.remove('open');
            checkoutModal.classList.add('open');
        });
    }
    
    if(closeCheckoutBtn) {
        closeCheckoutBtn.addEventListener('click', () => {
            checkoutModal.classList.remove('open');
        });
    }
    
    if(checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            checkoutForm.classList.add('hidden');
            document.getElementById('payment-processing').classList.remove('hidden');
            
            // Simulate secure API request to Mercado Pago
            setTimeout(() => {
                document.getElementById('payment-processing').classList.add('hidden');
                document.getElementById('payment-success').classList.remove('hidden');
                cart = []; // Empty cart after payment
                updateCartUI();
            }, 2500);
        });
    }
    
    const continueShopping = document.getElementById('continue-shopping');
    if(continueShopping) {
        continueShopping.addEventListener('click', () => {
            checkoutModal.classList.remove('open');
            // Reset modal state
            setTimeout(() => {
                document.getElementById('payment-success').classList.add('hidden');
                checkoutForm.classList.remove('hidden');
                checkoutForm.reset();
            }, 500);
        });
    }
    
    // Payment method toggle
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(pm => {
        pm.addEventListener('click', () => {
            paymentMethods.forEach(m => m.classList.remove('active'));
            pm.classList.add('active');
        });
    });
});
"""

with open('main.js', 'a', encoding='utf-8') as f:
    f.write(js_to_add)

# Update index.html version tag
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('main.js?v=4', 'main.js?v=5')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
