import re

def append_products():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    new_products_html = """
                <!-- Product 7: Sub-Zero -->
                <div class="product-card" id="p7">
                    <div class="product-image">
                        <div class="image-wrapper">
                            <img src="zara_tshirt_transparent.png?v=1" alt="Fabric Texture" class="fabric-texture">
                            <div class="color-overlay"></div>
                            <img src="alazan_subzero.png" alt="Grandmaster" class="shirt-graphic">
                            <img src="zara_cotton_texture.png" alt="Composite Details" class="t-shirt-composite">
                        </div>
                        <div class="product-views">
                            <img src="zara_tshirt_transparent.png?v=1" class="thumb-item active thumb-color-sync" onclick="changeView('p7', 'front', this)">
                            <img src="zara_tshirt_back_transparent.png" class="thumb-item thumb-color-sync" onclick="changeView('p7', 'back', this)">
                            <img src="alazan_subzero.png" class="thumb-item thumb-graphic" onclick="changeView('p7', 'details', this)">
                            <img src="zara_cotton_texture.png" class="thumb-item thumb-texture" onclick="changeView('p7', 'texture', this)">
                        </div>
                        <div class="product-info-container">
                            <div class="product-info">
                                <h4>GRANDMASTER</h4>
                                <p>Sub-Zero</p>
                            </div>
                            <div class="product-price">30.000 ARS</div>
                        </div>
                        <div class="color-picker">
                            <div class="swatch" data-color="#ffffff" style="background: #ffffff;" title="Blanco"></div>
                            <div class="swatch active" data-color="#050505" style="background: #050505;" title="Negro"></div>
                            <div class="swatch" data-color="#0a1b2a" style="background: #0a1b2a;" title="Azul Hielo"></div>
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(this)">AÑADIR A LA CESTA</button>
                    </div>
                </div>

                <!-- Product 8: Raiden -->
                <div class="product-card" id="p8">
                    <div class="product-image">
                        <div class="image-wrapper">
                            <img src="zara_tshirt_transparent.png?v=1" alt="Fabric Texture" class="fabric-texture">
                            <div class="color-overlay"></div>
                            <img src="alazan_raiden.png" alt="Thunder God" class="shirt-graphic">
                            <img src="zara_cotton_texture.png" alt="Composite Details" class="t-shirt-composite">
                        </div>
                        <div class="product-views">
                            <img src="zara_tshirt_transparent.png?v=1" class="thumb-item active thumb-color-sync" onclick="changeView('p8', 'front', this)">
                            <img src="zara_tshirt_back_transparent.png" class="thumb-item thumb-color-sync" onclick="changeView('p8', 'back', this)">
                            <img src="alazan_raiden.png" class="thumb-item thumb-graphic" onclick="changeView('p8', 'details', this)">
                            <img src="zara_cotton_texture.png" class="thumb-item thumb-texture" onclick="changeView('p8', 'texture', this)">
                        </div>
                        <div class="product-info-container">
                            <div class="product-info">
                                <h4>THUNDER GOD</h4>
                                <p>Raiden</p>
                            </div>
                            <div class="product-price">30.000 ARS</div>
                        </div>
                        <div class="color-picker">
                            <div class="swatch active" data-color="#ffffff" style="background: #ffffff;" title="Blanco"></div>
                            <div class="swatch" data-color="#050505" style="background: #050505;" title="Negro"></div>
                            <div class="swatch" data-color="#2c2c2c" style="background: #2c2c2c;" title="Gris Tormenta"></div>
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(this)">AÑADIR A LA CESTA</button>
                    </div>
                </div>

                <!-- Product 9: Kitana -->
                <div class="product-card" id="p9">
                    <div class="product-image">
                        <div class="image-wrapper">
                            <img src="zara_tshirt_transparent.png?v=1" alt="Fabric Texture" class="fabric-texture">
                            <div class="color-overlay"></div>
                            <img src="alazan_kitana.png" alt="Edenian Princess" class="shirt-graphic">
                            <img src="zara_cotton_texture.png" alt="Composite Details" class="t-shirt-composite">
                        </div>
                        <div class="product-views">
                            <img src="zara_tshirt_transparent.png?v=1" class="thumb-item active thumb-color-sync" onclick="changeView('p9', 'front', this)">
                            <img src="zara_tshirt_back_transparent.png" class="thumb-item thumb-color-sync" onclick="changeView('p9', 'back', this)">
                            <img src="alazan_kitana.png" class="thumb-item thumb-graphic" onclick="changeView('p9', 'details', this)">
                            <img src="zara_cotton_texture.png" class="thumb-item thumb-texture" onclick="changeView('p9', 'texture', this)">
                        </div>
                        <div class="product-info-container">
                            <div class="product-info">
                                <h4>EDENIAN PRINCESS</h4>
                                <p>Kitana</p>
                            </div>
                            <div class="product-price">30.000 ARS</div>
                        </div>
                        <div class="color-picker">
                            <div class="swatch" data-color="#ffffff" style="background: #ffffff;" title="Blanco"></div>
                            <div class="swatch active" data-color="#050505" style="background: #050505;" title="Negro"></div>
                            <div class="swatch" data-color="#001433" style="background: #001433;" title="Azul Real"></div>
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(this)">AÑADIR A LA CESTA</button>
                    </div>
                </div>

                <!-- Product 10: Shao Kahn -->
                <div class="product-card" id="p10">
                    <div class="product-image">
                        <div class="image-wrapper">
                            <img src="zara_tshirt_transparent.png?v=1" alt="Fabric Texture" class="fabric-texture">
                            <div class="color-overlay"></div>
                            <img src="alazan_shaokahn.png" alt="Outworld Emperor" class="shirt-graphic">
                            <img src="zara_cotton_texture.png" alt="Composite Details" class="t-shirt-composite">
                        </div>
                        <div class="product-views">
                            <img src="zara_tshirt_transparent.png?v=1" class="thumb-item active thumb-color-sync" onclick="changeView('p10', 'front', this)">
                            <img src="zara_tshirt_back_transparent.png" class="thumb-item thumb-color-sync" onclick="changeView('p10', 'back', this)">
                            <img src="alazan_shaokahn.png" class="thumb-item thumb-graphic" onclick="changeView('p10', 'details', this)">
                            <img src="zara_cotton_texture.png" class="thumb-item thumb-texture" onclick="changeView('p10', 'texture', this)">
                        </div>
                        <div class="product-info-container">
                            <div class="product-info">
                                <h4>OUTWORLD EMPEROR</h4>
                                <p>Shao Kahn</p>
                            </div>
                            <div class="product-price">30.000 ARS</div>
                        </div>
                        <div class="color-picker">
                            <div class="swatch" data-color="#ffffff" style="background: #ffffff;" title="Blanco"></div>
                            <div class="swatch active" data-color="#050505" style="background: #050505;" title="Negro"></div>
                            <div class="swatch" data-color="#3b0000" style="background: #3b0000;" title="Rojo Sangre"></div>
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(this)">AÑADIR A LA CESTA</button>
                    </div>
                </div>
"""

    content = content.replace('            </div>\n        </section>', f'{new_products_html}            </div>\n        </section>')

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

append_products()
