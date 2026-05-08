import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to remove the broken products 7, 8, 9, 10
# They start at "<!-- Product 7: Sub-Zero -->" and go until "</div>\n        </section>"
start_idx = content.find('<!-- Product 7: Sub-Zero -->')
end_idx = content.find('            </div>\n        </section>')

if start_idx != -1 and end_idx != -1:
    clean_content = content[:start_idx]
else:
    clean_content = content.replace('            </div>\n        </section>', '') # Fallback

new_products_html = """
                <!-- Product 7: Sub-Zero -->
                <div class="product-card" id="p7">
                    <div class="zalando-gallery">
                        <div class="main-image">
                            <div class="image-wrapper t-shirt-composite">
                                <div class="color-overlay" style="background-color: #050505;"></div>
                                <img src="alazan_subzero.png" class="shirt-graphic" alt="Grandmaster Graphic">
                                <img src="zara_tshirt_transparent.png?v=1" class="fabric-texture" alt="T-Shirt Texture">
                            </div>
                        </div>
                        <div class="thumbnails">
                            <div class="thumb-item active" onclick="changeView('p7', 'front', this)">
                                <img src="zara_tshirt_transparent.png?v=1" alt="Frontal">
                            </div>
                            <div class="thumb-item" onclick="changeView('p7', 'back', this)">
                                <img src="zara_tshirt_back_transparent.png?v=1" alt="Dorsal">
                            </div>
                            <div class="thumb-item" onclick="changeView('p7', 'details', this)">
                                <div style="position:relative; width:100%; height:100%;">
                                    <img src="alazan_subzero.png" style="position:absolute; width:150%; top:50%; left:50%; transform:translate(-50%,-50%); z-index:2;">
                                    <img src="zara_cotton_texture.png" style="position:absolute; width:100%; height:100%; object-fit:cover; mix-blend-mode:multiply; opacity:0.5; z-index:3;">
                                </div>
                            </div>
                            <div class="thumb-item" onclick="changeView('p7', 'texture', this)">
                                <div style="position:relative; width:100%; height:100%;">
                                    <div class="thumb-color-sync" style="position:absolute; width:100%; height:100%; background:#050505;"></div>
                                    <img src="zara_cotton_texture.png" style="position:absolute; width:100%; height:100%; object-fit:cover; mix-blend-mode:multiply; z-index:2;">
                                </div>
                            </div>
                        </div>
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

                <!-- Product 8: Raiden -->
                <div class="product-card" id="p8">
                    <div class="zalando-gallery">
                        <div class="main-image">
                            <div class="image-wrapper t-shirt-composite">
                                <div class="color-overlay" style="background-color: #050505;"></div>
                                <img src="alazan_raiden.png" class="shirt-graphic" alt="Thunder God Graphic">
                                <img src="zara_tshirt_transparent.png?v=1" class="fabric-texture" alt="T-Shirt Texture">
                            </div>
                        </div>
                        <div class="thumbnails">
                            <div class="thumb-item active" onclick="changeView('p8', 'front', this)">
                                <img src="zara_tshirt_transparent.png?v=1" alt="Frontal">
                            </div>
                            <div class="thumb-item" onclick="changeView('p8', 'back', this)">
                                <img src="zara_tshirt_back_transparent.png?v=1" alt="Dorsal">
                            </div>
                            <div class="thumb-item" onclick="changeView('p8', 'details', this)">
                                <div style="position:relative; width:100%; height:100%;">
                                    <img src="alazan_raiden.png" style="position:absolute; width:150%; top:50%; left:50%; transform:translate(-50%,-50%); z-index:2;">
                                    <img src="zara_cotton_texture.png" style="position:absolute; width:100%; height:100%; object-fit:cover; mix-blend-mode:multiply; opacity:0.5; z-index:3;">
                                </div>
                            </div>
                            <div class="thumb-item" onclick="changeView('p8', 'texture', this)">
                                <div style="position:relative; width:100%; height:100%;">
                                    <div class="thumb-color-sync" style="position:absolute; width:100%; height:100%; background:#050505;"></div>
                                    <img src="zara_cotton_texture.png" style="position:absolute; width:100%; height:100%; object-fit:cover; mix-blend-mode:multiply; z-index:2;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-info-container">
                        <div class="product-info">
                            <h4>THUNDER GOD</h4>
                            <p>Raiden</p>
                        </div>
                        <div class="product-price">30.000 ARS</div>
                    </div>
                    <div class="color-picker">
                        <div class="swatch" data-color="#ffffff" style="background: #ffffff;" title="Blanco"></div>
                        <div class="swatch active" data-color="#050505" style="background: #050505;" title="Negro"></div>
                        <div class="swatch" data-color="#2c2c2c" style="background: #2c2c2c;" title="Gris Tormenta"></div>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(this)">AÑADIR A LA CESTA</button>
                </div>

                <!-- Product 9: Kitana -->
                <div class="product-card" id="p9">
                    <div class="zalando-gallery">
                        <div class="main-image">
                            <div class="image-wrapper t-shirt-composite">
                                <div class="color-overlay" style="background-color: #050505;"></div>
                                <img src="alazan_kitana.png" class="shirt-graphic" alt="Edenian Princess Graphic">
                                <img src="zara_tshirt_transparent.png?v=1" class="fabric-texture" alt="T-Shirt Texture">
                            </div>
                        </div>
                        <div class="thumbnails">
                            <div class="thumb-item active" onclick="changeView('p9', 'front', this)">
                                <img src="zara_tshirt_transparent.png?v=1" alt="Frontal">
                            </div>
                            <div class="thumb-item" onclick="changeView('p9', 'back', this)">
                                <img src="zara_tshirt_back_transparent.png?v=1" alt="Dorsal">
                            </div>
                            <div class="thumb-item" onclick="changeView('p9', 'details', this)">
                                <div style="position:relative; width:100%; height:100%;">
                                    <img src="alazan_kitana.png" style="position:absolute; width:150%; top:50%; left:50%; transform:translate(-50%,-50%); z-index:2;">
                                    <img src="zara_cotton_texture.png" style="position:absolute; width:100%; height:100%; object-fit:cover; mix-blend-mode:multiply; opacity:0.5; z-index:3;">
                                </div>
                            </div>
                            <div class="thumb-item" onclick="changeView('p9', 'texture', this)">
                                <div style="position:relative; width:100%; height:100%;">
                                    <div class="thumb-color-sync" style="position:absolute; width:100%; height:100%; background:#050505;"></div>
                                    <img src="zara_cotton_texture.png" style="position:absolute; width:100%; height:100%; object-fit:cover; mix-blend-mode:multiply; z-index:2;">
                                </div>
                            </div>
                        </div>
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

                <!-- Product 10: Shao Kahn -->
                <div class="product-card" id="p10">
                    <div class="zalando-gallery">
                        <div class="main-image">
                            <div class="image-wrapper t-shirt-composite">
                                <div class="color-overlay" style="background-color: #050505;"></div>
                                <img src="alazan_shaokahn.png" class="shirt-graphic" alt="Outworld Emperor Graphic">
                                <img src="zara_tshirt_transparent.png?v=1" class="fabric-texture" alt="T-Shirt Texture">
                            </div>
                        </div>
                        <div class="thumbnails">
                            <div class="thumb-item active" onclick="changeView('p10', 'front', this)">
                                <img src="zara_tshirt_transparent.png?v=1" alt="Frontal">
                            </div>
                            <div class="thumb-item" onclick="changeView('p10', 'back', this)">
                                <img src="zara_tshirt_back_transparent.png?v=1" alt="Dorsal">
                            </div>
                            <div class="thumb-item" onclick="changeView('p10', 'details', this)">
                                <div style="position:relative; width:100%; height:100%;">
                                    <img src="alazan_shaokahn.png" style="position:absolute; width:150%; top:50%; left:50%; transform:translate(-50%,-50%); z-index:2;">
                                    <img src="zara_cotton_texture.png" style="position:absolute; width:100%; height:100%; object-fit:cover; mix-blend-mode:multiply; opacity:0.5; z-index:3;">
                                </div>
                            </div>
                            <div class="thumb-item" onclick="changeView('p10', 'texture', this)">
                                <div style="position:relative; width:100%; height:100%;">
                                    <div class="thumb-color-sync" style="position:absolute; width:100%; height:100%; background:#050505;"></div>
                                    <img src="zara_cotton_texture.png" style="position:absolute; width:100%; height:100%; object-fit:cover; mix-blend-mode:multiply; z-index:2;">
                                </div>
                            </div>
                        </div>
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
        </section>
"""

new_content = clean_content + new_products_html

# Update version tag
new_content = new_content.replace('main.js?v=13', 'main.js?v=14')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
