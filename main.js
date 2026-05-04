// --- PRODUCT DATA (Total 50 Characters) ---
const products = [
    // --- STREET FIGHTER ELITE (10) ---
    { id: 'p_ryu_elite', name: 'Ryu (Elite Edition)', img: 'graphic_ryu_elite_hifi.png', cat: 'sf', fighter: 'RYU' },
    { id: 'p_chunli_elite', name: 'Chun-Li (Elite Edition)', img: 'graphic_chunli_elite_hifi.png', cat: 'sf', fighter: 'CHUNLI' },
    { id: 'p_akuma_elite', name: 'Akuma (Elite Edition)', img: 'graphic_akuma_elite_nano_hifi.png', cat: 'sf', fighter: 'AKUMA' },
    { id: 'p_blanka_elite', name: 'Blanka (Elite Edition)', img: 'graphic_blanka_elite_nano_hifi.png', cat: 'sf', fighter: 'BLANKA' },
    { id: 'p_cammy_elite', name: 'Cammy (Elite Edition)', img: 'graphic_cammy_elite_nano_hifi.png', cat: 'sf', fighter: 'CAMMY' },
    { id: 'p_sagat_elite', name: 'Sagat (Elite Edition)', img: 'graphic_sagat_elite_nano_hifi.png', cat: 'sf', fighter: 'SAGAT' },
    { id: 'p_vega_elite', name: 'Vega (Elite Edition)', img: 'graphic_vega_elite_nano_hifi.png', cat: 'sf', fighter: 'VEGA' },
    { id: 'p_mbison_elite', name: 'M. Bison (Elite Edition)', img: 'graphic_mbison_elite_nano_hifi.png', cat: 'sf', fighter: 'MBISON' },
    { id: 'p_guile_elite', name: 'Guile (Elite Edition)', img: 'graphic_guile_elite_nano_hifi.png', cat: 'sf', fighter: 'GUILE' },
    { id: 'p_dhalsim_elite', name: 'Dhalsim (Elite Edition)', img: 'graphic_dhalsim_elite_hifi.png', cat: 'sf', fighter: 'DHALSIM' },
    
    // --- MORTAL KOMBAT ELITE (30) ---
    { id: 'p_scorpion_elite', name: 'Scorpion (Elite)', img: 'graphic_scorpion.png', cat: 'mk', fighter: 'SCORPION' },
    { id: 'p_subzero_elite', name: 'Sub-Zero (Elite)', img: 'graphic_subzero.png', cat: 'mk', fighter: 'SUBZERO' },
    { id: 'p_kitana_elite', name: 'Kitana (Elite)', img: 'graphic_kitana_elite_hifi.png', cat: 'mk', fighter: 'KITANA' },
    { id: 'p_mileena_elite', name: 'Mileena (Elite)', img: 'graphic_mileena.png', cat: 'mk', fighter: 'MILEENA' },
    { id: 'p_jax_elite', name: 'Jax (Elite)', img: 'graphic_jax_elite_hifi.png', cat: 'mk', fighter: 'JAX' },
    { id: 'p_noob_elite', name: 'Noob Saibot (Elite)', img: 'graphic_noob_elite_hifi.png', cat: 'mk', fighter: 'NOOB' },
    { id: 'p_smoke_elite', name: 'Smoke (Elite)', img: 'graphic_smoke_elite_hifi.png', cat: 'mk', fighter: 'SMOKE' },
    { id: 'p_rain_elite', name: 'Rain (Elite)', img: 'graphic_rain_elite_hifi.png', cat: 'mk', fighter: 'RAIN' },
    { id: 'p_cyrax_elite', name: 'Cyrax (Elite)', img: 'graphic_cyrax_elite_hifi.png', cat: 'mk', fighter: 'CYRAX' },
    { id: 'p_spawn_elite', name: 'Spawn (Elite)', img: 'graphic_spawn_elite_hifi.png', cat: 'mk', fighter: 'SPAWN' },
    { id: 'p_robocop_elite', name: 'RoboCop (Elite)', img: 'graphic_robocop_elite_hifi.png', cat: 'mk', fighter: 'ROBOCOP' },
    { id: 'p_terminator_elite', name: 'Terminator (Elite)', img: 'graphic_terminator_elite_hifi.png', cat: 'mk', fighter: 'TERMINATOR' },
    { id: 'p_rambo_elite', name: 'Rambo (Elite)', img: 'graphic_rambo_hifi.png', cat: 'mk', fighter: 'RAMBO' },
    { id: 'p_fujin_elite', name: 'Fujin (Elite)', img: 'graphic_fujin_elite_hifi.png', cat: 'mk', fighter: 'FUJIN' },
    { id: 'p_kollector_elite', name: 'Kollector (Elite)', img: 'graphic_kollector_elite_hifi.png', cat: 'mk', fighter: 'KOLLECTOR' },
    { id: 'p_baraka_elite', name: 'Baraka (Elite)', img: 'graphic_baraka_elite_hifi.png', cat: 'mk', fighter: 'BARAKA' },
    { id: 'p_nightwolf_elite', name: 'Nightwolf (Elite)', img: 'graphic_nightwolf_elite_hifi.png', cat: 'mk', fighter: 'NIGHTWOLF' },
    { id: 'p_erron_elite', name: 'Erron Black (Elite)', img: 'graphic_erron_elite_hifi.png', cat: 'mk', fighter: 'ERRON' },
    { id: 'p_cassie_elite', name: 'Cassie Cage (Elite)', img: 'graphic_cassie_elite_hifi.png', cat: 'mk', fighter: 'CASSIE' },
    { id: 'p_sindel_elite', name: 'Sindel (Elite)', img: 'graphic_sindel.png', cat: 'mk', fighter: 'SINDEL' },
    { id: 'p_kotal_elite', name: 'Kotal Kahn (Elite)', img: 'graphic_kotal.png', cat: 'mk', fighter: 'KOTAL' },
    { id: 'p_raiden_elite', name: 'Raiden (Elite)', img: 'graphic_raiden.png', cat: 'mk', fighter: 'RAIDEN' },
    { id: 'p_liukang_elite', name: 'Liu Kang (Elite)', img: 'graphic_liukang.png', cat: 'mk', fighter: 'LIUKANG' },
    { id: 'p_johnny_elite', name: 'Johnny Cage (Elite)', img: 'graphic_johnny.png', cat: 'mk', fighter: 'JOHNNY' },
    { id: 'p_kano_elite', name: 'Kano (Elite)', img: 'graphic_kano.png', cat: 'mk', fighter: 'KANO' },
    { id: 'p_shangtsung_elite', name: 'Shang Tsung (Elite)', img: 'graphic_shangtsung.png', cat: 'mk', fighter: 'SHANGTSUNG' },
    { id: 'p_geras_elite', name: 'Geras (Elite)', img: 'graphic_geras_elite_hifi.png', cat: 'mk', fighter: 'GERAS' },
    { id: 'p_cetrion_elite', name: 'Cetrion (Elite)', img: 'graphic_cetrion_elite_hifi.png', cat: 'mk', fighter: 'CETRION' },
    { id: 'p_sheeva_elite', name: 'Sheeva (Elite)', img: 'graphic_sheeva_elite_hifi.png', cat: 'mk', fighter: 'SHEEVA' },
    { id: 'p_dvorah_elite', name: 'D\'Vorah (Elite)', img: 'graphic_dvorah_elite_hifi.png', cat: 'mk', fighter: 'DVORAH' },
    
    // --- SPECIAL EDITIONS & DC (10) ---
    { id: 'p_quanchi_elite', name: 'Quan Chi (Elite)', img: 'graphic_quanchi_elite_hifi.png', cat: 'mk', fighter: 'QUANCHI' },
    { id: 'p_goro_elite', name: 'Goro (Elite)', img: 'graphic_goro_elite_hifi.png', cat: 'mk', fighter: 'GORO' },
    { id: 'p_sz_burst', name: 'Sub-Zero (Ice Burst)', img: 'graphic_subzero_burst_hifi.png', cat: 'mk', fighter: 'SUBZERO' },
    { id: 'p_kabal_elite', name: 'Kabal (Elite Edition)', img: 'graphic_kabal_elite_nano_hifi.png', cat: 'mk', fighter: 'KABAL' },
    { id: 'p_joker_elite', name: 'The Joker (Elite)', img: 'graphic_joker_elite_nano_hifi.png', cat: 'dc', fighter: 'JOKER' },
    { id: 'p_sagat_alt', name: 'Sagat (Classic Muay Thai)', img: 'graphic_sagat_elite_alt_hifi.png', cat: 'sf', fighter: 'SAGAT' },
    { id: 'p_kunglao_elite', name: 'Kung Lao (Elite)', img: 'graphic_kunglao.png', cat: 'mk', fighter: 'KUNGLAO' },
    { id: 'p_skarlet_elite', name: 'Skarlet (Elite)', img: 'graphic_skarlet_elite_hifi.png', cat: 'mk', fighter: 'SKARLET' },
    { id: 'p_jacqui_elite', name: 'Jacqui Briggs (Elite)', img: 'graphic_jacqui_hifi.png', cat: 'mk', fighter: 'JACQUI' },
    { id: 'p_kano_elite_v2', name: 'Kano (Elite Edition V2)', img: 'graphic_kano_elite_hifi.png', cat: 'mk', fighter: 'KANO' }
];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initProducts();
    initUI();
    initCart();
    initCursor();
});

function initProducts() {
    const grid = document.getElementById('product-grid');
    const mkRoster = document.getElementById('mk-roster');
    const sfRoster = document.getElementById('sf-roster');
    const dcRoster = document.getElementById('dc-roster');

    if (!grid) return;
    grid.innerHTML = '';

    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-fighter', p.fighter);
        card.id = p.id;

        card.innerHTML = `
            <div class="zalando-gallery">
                <div class="main-image">
                    <div class="t-shirt-composite">
                        <div class="color-overlay" style="background-color: #222222;"></div>
                        <img src="zara_tshirt_transparent.png?v=1" class="fabric-texture">
                        <img src="${p.img}" class="shirt-graphic">
                    </div>
                </div>
                <div class="thumbnails">
                    <div class="thumb-item active" onclick="changeView('${p.id}', 'front', this)">
                        <img src="zara_tshirt_transparent.png?v=1" style="opacity: 0.5;">
                    </div>
                    <div class="thumb-item" onclick="changeView('${p.id}', 'back', this)">
                        <img src="zara_tshirt_back_transparent.png" style="opacity: 0.5;">
                    </div>
                    <div class="thumb-item" onclick="changeView('${p.id}', 'details', this)">
                        <div class="thumb-color-sync"></div>
                    </div>
                </div>
            </div>
            <div class="product-info-container">
                <div class="product-meta">
                    <div class="product-info">
                        <h4>${p.name}</h4>
                        <p>LIMITED ELITE SERIES · 240 GSM</p>
                    </div>
                    <div class="product-price">34.900 ARS</div>
                </div>
                <div class="color-picker">
                    <div class="swatch active" style="background: #222;" data-color="#222222" title="Negro"></div>
                    <div class="swatch" style="background: #ffffff;" data-color="#ffffff" title="Blanco"></div>
                    <div class="swatch" style="background: #f0f0f0;" data-color="#f0f0f0" title="Gris"></div>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(this)">AÑADIR A LA CESTA</button>
            </div>
        `;
        grid.appendChild(card);

        // Menu items
        if (mkRoster && sfRoster && dcRoster) {
            const li = document.createElement('li');
            li.innerHTML = `<a href="javascript:void(0)" onclick="filterByFighter('${p.fighter}')">${p.name}</a>`;
            if(p.cat === 'mk') mkRoster.appendChild(li);
            else if(p.cat === 'sf') sfRoster.appendChild(li);
            else if(p.cat === 'dc') dcRoster.appendChild(li);
        }
    });

    // Re-bind swatches for dynamic cards
    const cardElements = document.querySelectorAll('.product-card');
    cardElements.forEach(card => {
        const swatches = card.querySelectorAll('.swatch');
        const colorOverlay = card.querySelector('.color-overlay');
        const colorSync = card.querySelector('.thumb-color-sync');

        swatches.forEach(swatch => {
            swatch.addEventListener('click', (e) => {
                e.stopPropagation();
                swatches.forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                const color = swatch.getAttribute('data-color');
                colorOverlay.style.backgroundColor = color;
                if(colorSync) colorSync.style.backgroundColor = color;
            });
        });
    });
}

function initUI() {
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const zaraMenu = document.getElementById('zara-menu');
    
    if(openMenuBtn && closeMenuBtn && zaraMenu) {
        openMenuBtn.addEventListener('click', () => zaraMenu.classList.add('open'));
        closeMenuBtn.addEventListener('click', () => zaraMenu.classList.remove('open'));
    }

    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            const body = this.nextElementSibling;
            const plus = this.querySelector('.plus');
            if(body.classList.contains('open')) {
                body.classList.remove('open');
                plus.textContent = '+';
            } else {
                body.classList.add('open');
                plus.textContent = '-';
            }
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#' || targetId === '') return;
            e.preventDefault();
            const targetEl = document.querySelector(targetId);
            if(targetEl) {
                const headerOffset = 100;
                const elementPosition = targetEl.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });
}

function initCursor() {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .swatch, .thumb-item, .accordion-header').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// --- GLOBAL FUNCTIONS ---

window.changeView = function(productId, viewType, element) {
    const card = document.getElementById(productId);
    const graphic = card.querySelector('.shirt-graphic');
    const fabricTexture = card.querySelector('.fabric-texture');
    const colorOverlay = card.querySelector('.color-overlay');
    const composite = card.querySelector('.t-shirt-composite');
    const thumbs = card.querySelectorAll('.thumb-item');
    
    thumbs.forEach(thumb => thumb.classList.remove('active'));
    if(element) element.classList.add('active');
    
    // Reset
    composite.style.transform = 'scale(1)';
    fabricTexture.style.objectFit = 'contain';
    colorOverlay.style.webkitMaskImage = "url('zara_tshirt_transparent.png?v=1')";
    colorOverlay.style.maskImage = "url('zara_tshirt_transparent.png?v=1')";
    colorOverlay.style.width = '130%';
    colorOverlay.style.height = '130%';
    fabricTexture.style.width = '130%';
    fabricTexture.style.height = '130%';
    graphic.style.opacity = '1';
    graphic.style.display = 'block';
    
    if (viewType === 'front') {
        fabricTexture.src = 'zara_tshirt_transparent.png?v=1';
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
        graphic.style.transform = 'translate(-50%, -50%) scale(1.5)';
    }
};

let cart = [];

window.addToCart = function(buttonElement) {
    const card = buttonElement.closest('.product-card');
    const title = card.querySelector('h4').textContent;
    const price = 34900;
    const activeColorSwatch = card.querySelector('.swatch.active');
    const colorName = activeColorSwatch ? activeColorSwatch.getAttribute('title') : 'Negro';
    const imgSrc = card.querySelector('.shirt-graphic').src;
    
    cart.push({ title, color: colorName, price, img: imgSrc });
    
    buttonElement.textContent = '✓ AÑADIDO';
    setTimeout(() => buttonElement.textContent = 'AÑADIR A LA CESTA', 1500);
    
    updateCartUI();
    document.getElementById('cart-menu').classList.add('open');
};

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const navCartCount = document.getElementById('nav-cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    const payAmount = document.getElementById('pay-amount');
    
    if (cartCount) cartCount.textContent = cart.length;
    if (navCartCount) navCartCount.textContent = cart.length;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Tu cesta está vacía</p>';
        if (cartTotalPrice) cartTotalPrice.textContent = '0 ARS';
        if (checkoutBtn) checkoutBtn.disabled = true;
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
    if (cartTotalPrice) cartTotalPrice.textContent = total.toLocaleString('es-AR') + ' ARS';
    if (payAmount) payAmount.textContent = total.toLocaleString('es-AR') + ' ARS';
    if (checkoutBtn) checkoutBtn.disabled = false;
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartUI();
};

window.filterByFighter = function(fighterName) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const cardFighter = card.getAttribute('data-fighter');
        card.style.display = (fighterName === 'ALL' || cardFighter === fighterName) ? 'flex' : 'none';
    });

    const zaraMenu = document.getElementById('zara-menu');
    if(zaraMenu) zaraMenu.classList.remove('open');

    setTimeout(() => {
        const collection = document.getElementById('collection');
        if (collection) {
            const headerHeight = 100;
            const elementPosition = collection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - headerHeight - 20, behavior: 'smooth' });
        }
    }, 300);
};

function initCart() {
    const cartMenu = document.getElementById('cart-menu');
    const openCartBtn = document.getElementById('open-cart');
    const closeCartBtn = document.getElementById('close-cart');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckoutBtn = document.getElementById('close-checkout');
    
    if(openCartBtn) openCartBtn.addEventListener('click', (e) => { e.preventDefault(); cartMenu.classList.add('open'); });
    if(closeCartBtn) closeCartBtn.addEventListener('click', () => cartMenu.classList.remove('open'));
    if(checkoutBtn) checkoutBtn.addEventListener('click', () => { cartMenu.classList.remove('open'); checkoutModal.classList.add('open'); });
    if(closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', () => checkoutModal.classList.remove('open'));

    // Payment method toggle
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(pm => {
        pm.addEventListener('click', () => {
            paymentMethods.forEach(m => m.classList.remove('active'));
            pm.classList.add('active');
        });
    });

    const finalPayBtn = document.getElementById('final-pay-btn');
    if(finalPayBtn) {
        finalPayBtn.addEventListener('click', () => {
            document.getElementById('payment-processing').classList.remove('hidden');
            finalPayBtn.classList.add('hidden');
            document.querySelector('.payment-methods').classList.add('hidden');
            
            setTimeout(() => {
                document.getElementById('payment-processing').classList.add('hidden');
                document.getElementById('payment-success').classList.remove('hidden');
            }, 2000);
        });
    }
    
    const continueShopping = document.getElementById('continue-shopping');
    if(continueShopping) {
        continueShopping.addEventListener('click', () => {
            checkoutModal.classList.remove('open');
            // Reset
            setTimeout(() => {
                document.getElementById('payment-success').classList.add('hidden');
                document.getElementById('checkout-form').classList.remove('hidden');
                finalPayBtn.classList.remove('hidden');
                document.querySelector('.payment-methods').classList.remove('hidden');
            }, 500);
        });
    }
}
