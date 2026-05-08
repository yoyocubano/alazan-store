import re

def update_html():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add "AÑADIR A LA CESTA" button to each product
    # We will look for <div class="color-picker">...</div> and add the button right after it.
    
    # We need to extract the product ID, name and price for the addToCart function.
    # Actually, we can just let JS read the DOM.
    # We'll just add <button class="add-to-cart-btn" onclick="addToCart(this)">AÑADIR A LA CESTA</button>
    
    content = re.sub(
        r'(<div class="color-picker">.*?</div>)',
        r'\1\n                        <button class="add-to-cart-btn" onclick="addToCart(this)">AÑADIR A LA CESTA</button>',
        content,
        flags=re.DOTALL
    )

    # 2. Add Cart Offcanvas
    cart_html = """
    <!-- Cart Offcanvas -->
    <div id="cart-menu" class="cart-offcanvas">
        <div class="cart-header">
            <h3>CESTA (<span id="cart-count">0</span>)</h3>
            <div class="close-cart" id="close-cart">✕</div>
        </div>
        <div class="cart-items" id="cart-items">
            <!-- Items will be injected here -->
            <p class="empty-cart-msg">Tu cesta está vacía</p>
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>TOTAL</span>
                <span id="cart-total-price">0 ARS</span>
            </div>
            <button class="checkout-btn" id="checkout-btn" disabled>PROCEDER AL PAGO</button>
        </div>
    </div>

    <!-- Checkout Modal (Simulated Secure Gateway) -->
    <div id="checkout-modal" class="checkout-modal">
        <div class="checkout-container">
            <div class="checkout-header">
                <h2>PAGO SEGURO</h2>
                <div class="close-checkout" id="close-checkout">✕</div>
            </div>
            <div class="checkout-body">
                <div class="payment-methods">
                    <div class="payment-method active">Mercado Pago</div>
                    <div class="payment-method">Tarjeta de Crédito</div>
                </div>
                <form id="checkout-form">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" required placeholder="tu@email.com">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Número de Tarjeta</label>
                            <input type="text" required placeholder="0000 0000 0000 0000" maxlength="19">
                        </div>
                        <div class="form-group small">
                            <label>CVV</label>
                            <input type="text" required placeholder="123" maxlength="3">
                        </div>
                    </div>
                    <div class="secure-badge">
                        <span>🔒 Transacción encriptada de extremo a extremo</span>
                    </div>
                    <button type="submit" class="pay-btn">PAGAR <span id="pay-amount">0 ARS</span></button>
                </form>
                <div id="payment-processing" class="hidden">
                    <div class="spinner"></div>
                    <p>Procesando pago seguro...</p>
                </div>
                <div id="payment-success" class="hidden">
                    <div class="success-icon">✓</div>
                    <h3>¡PAGO COMPLETADO!</h3>
                    <p>Tu pedido ha sido procesado con éxito.</p>
                    <button class="continue-btn" id="continue-shopping">SEGUIR COMPRANDO</button>
                </div>
            </div>
        </div>
    </div>
"""
    
    # Insert cart HTML before </main>
    content = content.replace('</main>', f'{cart_html}\n    </main>')
    
    # Update CART (0) id in header so JS can update it
    content = content.replace('<a href="#">CART (0)</a>', '<a href="#" id="open-cart">CART (<span id="nav-cart-count">0</span>)</a>')

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

update_html()
