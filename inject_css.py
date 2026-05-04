import os

css_to_add = """

/* --- CART & CHECKOUT STYLES --- */

.add-to-cart-btn {
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    background: #000;
    color: #fff;
    border: none;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.3s ease;
}

.add-to-cart-btn:hover {
    background: #333;
}

.cart-offcanvas {
    position: fixed;
    top: 0;
    right: -100%;
    width: 400px;
    height: 100vh;
    background: #fff;
    color: #000;
    z-index: 2000;
    transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    display: flex;
    flex-direction: column;
    box-shadow: -2px 0 15px rgba(0,0,0,0.1);
}

.cart-offcanvas.open {
    right: 0;
}

.cart-header {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.cart-header h3 {
    font-size: 14px;
    font-weight: 600;
    margin: 0;
}

.close-cart {
    font-size: 1.2rem;
    cursor: pointer;
}

.cart-items {
    flex: 1;
    overflow-y: auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.empty-cart-msg {
    text-align: center;
    color: #888;
    font-size: 12px;
    margin-top: 2rem;
}

.cart-item {
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 1rem;
}

.cart-item-img {
    width: 80px;
    height: 106px;
    object-fit: contain;
    background: #f5f5f5;
}

.cart-item-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.cart-item-title {
    font-size: 12px;
    font-weight: 600;
}

.cart-item-color {
    font-size: 11px;
    color: #666;
    margin-top: 0.3rem;
}

.cart-item-price {
    font-size: 12px;
    font-weight: 500;
}

.remove-item {
    font-size: 10px;
    color: #999;
    cursor: pointer;
    text-decoration: underline;
    align-self: flex-start;
}

.cart-footer {
    padding: 2rem;
    border-top: 1px solid #eee;
    background: #fff;
}

.cart-total {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

.checkout-btn {
    width: 100%;
    padding: 1.2rem;
    background: #000;
    color: #fff;
    border: none;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
}

.checkout-btn:hover:not(:disabled) {
    background: #333;
}

.checkout-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
}

/* Checkout Modal */
.checkout-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.8);
    z-index: 3000;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.checkout-modal.open {
    opacity: 1;
    pointer-events: auto;
}

.checkout-container {
    background: #fff;
    width: 90%;
    max-width: 500px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.checkout-header {
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.checkout-header h2 {
    font-size: 16px;
    margin: 0;
}

.close-checkout {
    font-size: 1.2rem;
    cursor: pointer;
}

.checkout-body {
    padding: 2rem;
}

.payment-methods {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.payment-method {
    flex: 1;
    text-align: center;
    padding: 0.8rem;
    border: 1px solid #ddd;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.2s;
}

.payment-method.active {
    border-color: #000;
    background: #f9f9f9;
    font-weight: 600;
}

.form-group {
    margin-bottom: 1.2rem;
}

.form-group label {
    display: block;
    font-size: 11px;
    margin-bottom: 0.5rem;
    color: #666;
}

.form-group input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    font-size: 13px;
    font-family: inherit;
    box-sizing: border-box;
}

.form-row {
    display: flex;
    gap: 1rem;
}

.form-row .form-group {
    flex: 2;
}

.form-row .form-group.small {
    flex: 1;
}

.secure-badge {
    text-align: center;
    margin: 1.5rem 0;
    font-size: 10px;
    color: #28a745;
}

.pay-btn {
    width: 100%;
    padding: 1.2rem;
    background: #000;
    color: #fff;
    border: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
}

.hidden {
    display: none !important;
}

#payment-processing {
    text-align: center;
    padding: 3rem 0;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #000;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1.5rem auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

#payment-success {
    text-align: center;
    padding: 2rem 0;
}

.success-icon {
    width: 60px;
    height: 60px;
    background: #28a745;
    color: white;
    font-size: 30px;
    line-height: 60px;
    border-radius: 50%;
    margin: 0 auto 1.5rem auto;
}

.continue-btn {
    margin-top: 2rem;
    padding: 1rem 2rem;
    background: transparent;
    border: 1px solid #000;
    color: #000;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
}

@media (max-width: 768px) {
    .cart-offcanvas {
        width: 100%;
    }
}
"""

with open('styles.css', 'a', encoding='utf-8') as f:
    f.write(css_to_add)

# Update index.html version tag
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('styles.css?v=7', 'styles.css?v=8')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
