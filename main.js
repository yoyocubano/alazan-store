// --- PRODUCT DATA ---
const characterData = [
    // --- STREET FIGHTER ---
    { id: 'ryu', name: 'Ryu (Elite)', img: 'graphic_ryu_elite_hifi.png', cat: 'sf', fighter: 'RYU' },
    { id: 'chunli', name: 'Chun-Li (Elite)', img: 'graphic_chunli_elite_hifi.png', cat: 'sf', fighter: 'CHUNLI' },
    { id: 'akuma', name: 'Akuma (Elite)', img: 'graphic_akuma_elite_nano_hifi.png', cat: 'sf', fighter: 'AKUMA' },
    { id: 'blanka', name: 'Blanka (Elite)', img: 'graphic_blanka_elite_nano_hifi.png', cat: 'sf', fighter: 'BLANKA' },
    { id: 'cammy', name: 'Cammy (Elite)', img: 'graphic_cammy_elite_nano_hifi.png', cat: 'sf', fighter: 'CAMMY' },
    { id: 'sagat', name: 'Sagat (Elite)', img: 'graphic_sagat_elite_nano_hifi.png', cat: 'sf', fighter: 'SAGAT' },
    { id: 'vega', name: 'Vega (Elite)', img: 'graphic_vega_elite_nano_hifi.png', cat: 'sf', fighter: 'VEGA' },
    { id: 'mbison', name: 'M. Bison (Elite)', img: 'graphic_mbison_elite_nano_hifi.png', cat: 'sf', fighter: 'MBISON' },
    { id: 'guile', name: 'Guile (Elite)', img: 'graphic_guile_elite_nano_hifi.png', cat: 'sf', fighter: 'GUILE' },
    { id: 'dhalsim', name: 'Dhalsim (Elite)', img: 'graphic_dhalsim_elite_hifi.png', cat: 'sf', fighter: 'DHALSIM' },
    { id: 'sagat_alt', name: 'Sagat (Classic)', img: 'graphic_sagat_elite_alt_hifi.png', cat: 'sf', fighter: 'SAGAT' },

    // --- MORTAL KOMBAT ---
    { id: 'scorpion', name: 'Scorpion (Elite)', img: 'graphic_scorpion.png', cat: 'mk', fighter: 'SCORPION' },
    { id: 'subzero', name: 'Sub-Zero (Elite)', img: 'graphic_subzero.png', cat: 'mk', fighter: 'SUBZERO' },
    { id: 'kitana', name: 'Kitana (Elite)', img: 'graphic_kitana_elite_hifi.png', cat: 'mk', fighter: 'KITANA' },
    { id: 'mileena', name: 'Mileena (Elite)', img: 'graphic_mileena.png', cat: 'mk', fighter: 'MILEENA' },
    { id: 'jax', name: 'Jax (Elite)', img: 'graphic_jax_elite_hifi.png', cat: 'mk', fighter: 'JAX' },
    { id: 'noob', name: 'Noob Saibot (Elite)', img: 'graphic_noob_elite_hifi.png', cat: 'mk', fighter: 'NOOB' },
    { id: 'smoke', name: 'Smoke (Elite)', img: 'graphic_smoke_elite_hifi.png', cat: 'mk', fighter: 'SMOKE' },
    { id: 'rain', name: 'Rain (Elite)', img: 'graphic_rain_elite_hifi.png', cat: 'mk', fighter: 'RAIN' },
    { id: 'cyrax', name: 'Cyrax (Elite)', img: 'graphic_cyrax_elite_hifi.png', cat: 'mk', fighter: 'CYRAX' },
    { id: 'spawn', name: 'Spawn (Elite)', img: 'graphic_spawn_elite_hifi.png', cat: 'mk', fighter: 'SPAWN' },
    { id: 'robocop', name: 'RoboCop (Elite)', img: 'graphic_robocop_elite_hifi.png', cat: 'mk', fighter: 'ROBOCOP' },
    { id: 'terminator', name: 'Terminator (Elite)', img: 'graphic_terminator_elite_hifi.png', cat: 'mk', fighter: 'TERMINATOR' },
    { id: 'rambo', name: 'Rambo (Elite)', img: 'graphic_rambo_hifi.png', cat: 'mk', fighter: 'RAMBO' },
    { id: 'fujin', name: 'Fujin (Elite)', img: 'graphic_fujin_elite_hifi.png', cat: 'mk', fighter: 'FUJIN' },
    { id: 'kollector', name: 'Kollector (Elite)', img: 'graphic_kollector_elite_hifi.png', cat: 'mk', fighter: 'KOLLECTOR' },
    { id: 'baraka', name: 'Baraka (Elite)', img: 'graphic_baraka_elite_hifi.png', cat: 'mk', fighter: 'BARAKA' },
    { id: 'nightwolf', name: 'Nightwolf (Elite)', img: 'graphic_nightwolf_elite_hifi.png', cat: 'mk', fighter: 'NIGHTWOLF' },
    { id: 'erron', name: 'Erron Black (Elite)', img: 'graphic_erron_elite_hifi.png', cat: 'mk', fighter: 'ERRON' },
    { id: 'cassie', name: 'Cassie Cage (Elite)', img: 'graphic_cassie_elite_hifi.png', cat: 'mk', fighter: 'CASSIE' },
    { id: 'sindel', name: 'Sindel (Elite)', img: 'graphic_sindel.png', cat: 'mk', fighter: 'SINDEL' },
    { id: 'kotal', name: 'Kotal Kahn (Elite)', img: 'graphic_kotal.png', cat: 'mk', fighter: 'KOTAL' },
    { id: 'raiden', name: 'Raiden (Elite)', img: 'graphic_raiden.png', cat: 'mk', fighter: 'RAIDEN' },
    { id: 'liukang', name: 'Liu Kang (Elite)', img: 'graphic_liukang.png', cat: 'mk', fighter: 'LIUKANG' },
    { id: 'johnny', name: 'Johnny Cage (Elite)', img: 'graphic_johnny.png', cat: 'mk', fighter: 'JOHNNY' },
    { id: 'kano', name: 'Kano (Elite)', img: 'graphic_kano.png', cat: 'mk', fighter: 'KANO' },
    { id: 'shangtsung', name: 'Shang Tsung (Elite)', img: 'graphic_shangtsung.png', cat: 'mk', fighter: 'SHANGTSUNG' },
    { id: 'geras', name: 'Geras (Elite)', img: 'graphic_geras_elite_hifi.png', cat: 'mk', fighter: 'GERAS' },
    { id: 'cetrion', name: 'Cetrion (Elite)', img: 'graphic_cetrion_elite_hifi.png', cat: 'mk', fighter: 'CETRION' },
    { id: 'sheeva', name: 'Sheeva (Elite)', img: 'graphic_sheeva_elite_hifi.png', cat: 'mk', fighter: 'SHEEVA' },
    { id: 'dvorah', name: 'D\'Vorah (Elite)', img: 'graphic_dvorah_elite_hifi.png', cat: 'mk', fighter: 'DVORAH' },
    { id: 'quanchi', name: 'Quan Chi (Elite)', img: 'graphic_quanchi_elite_hifi.png', cat: 'mk', fighter: 'QUANCHI' },
    { id: 'goro', name: 'Goro (Elite)', img: 'graphic_goro_elite_hifi.png', cat: 'mk', fighter: 'GORO' },
    { id: 'sz_burst', name: 'Sub-Zero (Burst)', img: 'graphic_subzero_burst_hifi.png', cat: 'mk', fighter: 'SUBZERO' },
    { id: 'kabal', name: 'Kabal (Elite)', img: 'graphic_kabal_elite_nano_hifi.png', cat: 'mk', fighter: 'KABAL' },
    { id: 'kunglao', name: 'Kung Lao (Elite)', img: 'graphic_kunglao.png', cat: 'mk', fighter: 'KUNGLAO' },
    { id: 'skarlet', name: 'Skarlet (Elite)', img: 'graphic_skarlet_elite_hifi.png', cat: 'mk', fighter: 'SKARLET' },
    { id: 'jacqui', name: 'Jacqui Briggs (Elite)', img: 'graphic_jacqui_hifi.png', cat: 'mk', fighter: 'JACQUI' },
    { id: 'kano_v2', name: 'Kano (V2 Elite)', img: 'graphic_kano_elite_hifi.png', cat: 'mk', fighter: 'KANO' },

    // --- DC ---
    { id: 'joker', name: 'The Joker (Elite)', img: 'graphic_joker_elite_nano_hifi.png', cat: 'dc', fighter: 'JOKER' }
];

const kidsData = [
    { id: 'rain_babality', name: 'Rain vs Robocop', img: 'graphic_babality_rain.png', cat: 'kids', fighter: 'RAIN' },
    { id: 'kunglao_babality', name: 'Kung Lao vs Terminator', img: 'graphic_babality_kunglao.png', cat: 'kids', fighter: 'KUNGLAO' },
    { id: 'kollector_babality', name: 'Kollector Babality', img: 'graphic_babality_kollector.png', cat: 'kids', fighter: 'KOLLECTOR' },
    { id: 'raiden_babality', name: 'Raiden vs Rambo', img: 'graphic_babality_raiden.png', cat: 'kids', fighter: 'RAIDEN' },
    { id: 'scorpion_babality', name: 'Scorpion Babality', img: 'graphic_babality_scorpion.png', cat: 'kids', fighter: 'SCORPION' },
    { id: 'reptile_babality', name: 'Reptile Babality', img: 'graphic_babality_reptile.png', cat: 'kids', fighter: 'REPTILE' },
    { id: 'johnny_babality', name: 'Johnny Cage Babality', img: 'graphic_babality_johnny_v2.png', cat: 'kids', fighter: 'JOHNNY' },
    { id: 'subzero_babality', name: 'Sub-Zero Babality', img: 'graphic_babality_subzero_v2.png', cat: 'kids', fighter: 'SUBZERO' }
];

const products = [
    ...characterData.map(c => ({ 
        ...c, 
        id: `p_${c.id}_tshirt`, 
        name: `${c.name} · T-Shirt`, 
        type: 'tshirt', 
        price: 34900,
        baseImg: 'zara_tshirt_transparent.png'
    })),
    ...characterData.map(c => ({ 
        ...c, 
        id: `p_${c.id}_sweatshirt`, 
        name: `${c.name} · Sweatshirt`, 
        type: 'sweatshirt', 
        price: 54900,
        baseImg: 'sweatshirt_mastered_v2.png'
    })),
    ...characterData.map(c => ({ 
        ...c, 
        id: `p_${c.id}_hoodie`, 
        name: `${c.name} · Hoodie`, 
        type: 'hoodie', 
        price: 64900,
        baseImg: 'hoodie_v5_final.png'
    })),
    ...kidsData.map(c => ({ 
        ...c, 
        id: `p_${c.id}_kids`, 
        name: `${c.name} · Kids T-Shirt`, 
        type: 'kids', 
        price: 24900,
        baseImg: 'kids_tshirt_v2_final.png'
    }))
];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initProducts();
    initUI();
    initCart();
    initCursor();
});

function initProducts() {
    const tshirtGrid = document.getElementById('product-grid');
    const sweatshirtGrid = document.getElementById('sweatshirt-grid');
    const hoodieGrid = document.getElementById('hoodie-grid');
    const kidsGrid = document.getElementById('kids-grid');
    const mkRoster = document.getElementById('mk-roster');
    const sfRoster = document.getElementById('sf-roster');

    if (tshirtGrid) tshirtGrid.innerHTML = '';
    if (sweatshirtGrid) sweatshirtGrid.innerHTML = '';
    if (hoodieGrid) hoodieGrid.innerHTML = '';
    if (kidsGrid) kidsGrid.innerHTML = '';
    if (mkRoster) mkRoster.innerHTML = '';
    if (sfRoster) sfRoster.innerHTML = '';

    products.forEach(p => {
        const card = document.createElement('div');
        card.className = `product-card type-${p.type}`;
        card.setAttribute('data-fighter', p.fighter);
        card.setAttribute('data-type', p.type);
        card.id = p.id;

        const isHeavy = p.type === 'sweatshirt' || p.type === 'hoodie';
        const isKids = p.type === 'kids';
        
        let graphicScale = 'scale(1)';
        let graphicMargin = '-5%';

        if (p.type === 'hoodie') {
            graphicScale = 'scale(0.7)';
            graphicMargin = '0%';
        } else if (p.type === 'sweatshirt') {
            graphicScale = 'scale(0.8)';
            graphicMargin = '-15%';
        } else if (p.type === 'kids') {
            graphicScale = 'scale(1.1)';
            graphicMargin = '-5%';
        }

        card.innerHTML = `
            <div class="zalando-gallery">
                <div class="main-image">
                    <div class="t-shirt-composite">
                        <img src="${p.baseImg}" class="fabric-texture">
                        <img src="${p.img}" class="shirt-graphic" style="transform: translate(-50%, -50%) ${graphicScale}; margin-top: ${graphicMargin};">
                    </div>
                </div>
                <div class="thumbnails">
                    <div class="thumb-item active" onclick="changeView('${p.id}', 'front', this)">
                        <img src="${p.baseImg}" style="opacity: 0.5;">
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
                        <p>${p.type === 'tshirt' ? 'LIMITED ELITE SERIES · 240 GSM' : (p.type === 'kids' ? 'KIDS BABALITY SERIES · 100% COTTON' : 'PREMIUM HEAVYWEIGHT · 400 GSM')}</p>
                    </div>
                    <div class="product-price">${p.price.toLocaleString('es-AR')} ARS</div>
                </div>
                <div class="color-picker">
                    <div class="swatch active" style="background: #000;" data-color="#000000" title="Negro"></div>
                    <div class="swatch" style="background: #ffffff;" data-color="#ffffff" title="Blanco"></div>
                    <div class="swatch" style="background: #f0f0f0;" data-color="#f0f0f0" title="Gris"></div>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(this)">AÑADIR A LA CESTA</button>
            </div>
        `;
        
        if (p.type === 'tshirt' && tshirtGrid) tshirtGrid.appendChild(card);
        else if (p.type === 'sweatshirt' && sweatshirtGrid) sweatshirtGrid.appendChild(card);
        else if (p.type === 'hoodie' && hoodieGrid) hoodieGrid.appendChild(card);
        else if (p.type === 'kids' && kidsGrid) kidsGrid.appendChild(card);

        // Populate roster
        if (p.type === 'tshirt' && mkRoster && sfRoster) {
            const li = document.createElement('li');
            li.innerHTML = `<a href="javascript:void(0)" onclick="filterByFighter('${p.fighter}')">${p.fighter}</a>`;
            if(p.cat === 'mk') mkRoster.appendChild(li);
            else if(p.cat === 'sf') sfRoster.appendChild(li);
        }
    });

    // Re-bind swatches
    document.querySelectorAll('.product-card').forEach(card => {
        const swatches = card.querySelectorAll('.swatch');
        const texture = card.querySelector('.fabric-texture');
        const colorSync = card.querySelector('.thumb-color-sync');

        const isHeavy = card.classList.contains('type-sweatshirt') || card.classList.contains('type-hoodie');
        const isKids = card.classList.contains('type-kids');
        
        // Initial black filter
        if (isHeavy) texture.style.filter = 'brightness(0.12) contrast(1)';
        else texture.style.filter = 'brightness(0.15) contrast(1.2)';

        swatches.forEach(swatch => {
            swatch.addEventListener('click', (e) => {
                e.stopPropagation();
                swatches.forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                
                const color = swatch.getAttribute('data-color');
                if (color === '#000000') {
                    texture.style.filter = isHeavy ? 'brightness(0.12) contrast(1)' : 'brightness(0.15) contrast(1.2)';
                } else if (color === '#ffffff') {
                    texture.style.filter = 'brightness(1) contrast(1)';
                } else if (color === '#f0f0f0') {
                    texture.style.filter = isHeavy ? 'brightness(0.6) contrast(1)' : 'brightness(0.7) contrast(1)';
                }
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
        
        // Init tab indicator
        const activeTab = document.querySelector('.tab-btn.active');
        const indicator = document.querySelector('.tab-indicator');
        if(activeTab && indicator) {
            indicator.style.left = activeTab.offsetLeft + 'px';
            indicator.style.width = activeTab.offsetWidth + 'px';
        }
    }

    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            const body = this.nextElementSibling;
            const plus = this.querySelector('.plus');
            if(body && body.classList.contains('accordion-body')) {
                if(body.classList.contains('open')) {
                    body.classList.remove('open');
                    plus.textContent = '+';
                } else {
                    body.classList.add('open');
                    plus.textContent = '-';
                }
            }
        });
    });

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
                if(zaraMenu) zaraMenu.classList.remove('open');
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

window.switchTab = function(tabName) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const indicator = document.querySelector('.tab-indicator');
    
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));
    
    const activeBtn = Array.from(tabBtns).find(btn => btn.textContent.toLowerCase() === tabName);
    if(activeBtn) {
        activeBtn.classList.add('active');
        indicator.style.left = activeBtn.offsetLeft + 'px';
        indicator.style.width = activeBtn.offsetWidth + 'px';
    }
    
    if (tabName === 'niños') {
        document.getElementById('tab-niños').classList.add('active');
    } else {
        document.getElementById('tab-adultos').classList.add('active');
    }
};

window.changeView = function(productId, viewType, element) {
    const product = products.find(p => p.id === productId);
    const card = document.getElementById(productId);
    const graphic = card.querySelector('.shirt-graphic');
    const fabricTexture = card.querySelector('.fabric-texture');
    const composite = card.querySelector('.t-shirt-composite');
    const thumbs = card.querySelectorAll('.thumb-item');
    
    thumbs.forEach(thumb => thumb.classList.remove('active'));
    if(element) element.classList.add('active');
    
    composite.style.transform = 'scale(1)';
    fabricTexture.style.objectFit = 'contain';
    fabricTexture.style.width = '130%';
    fabricTexture.style.height = '130%';
    graphic.style.opacity = '1';
    graphic.style.display = 'block';
    
    if (viewType === 'front') {
        fabricTexture.src = product.baseImg;
        const activeSwatch = card.querySelector('.swatch.active');
        if (activeSwatch) {
            const color = activeSwatch.getAttribute('data-color');
            const isHeavy = card.classList.contains('type-sweatshirt') || card.classList.contains('type-hoodie');
            if (color === '#000000') fabricTexture.style.filter = isHeavy ? 'brightness(0.12) contrast(1)' : 'brightness(0.15) contrast(1.2)';
            else if (color === '#ffffff') fabricTexture.style.filter = 'brightness(1) contrast(1)';
            else if (color === '#f0f0f0') fabricTexture.style.filter = isHeavy ? 'brightness(0.6) contrast(1)' : 'brightness(0.7) contrast(1)';
        }
    } else if (viewType === 'details') {
        fabricTexture.src = 'zara_cotton_texture.png';
        fabricTexture.style.filter = 'none';
        fabricTexture.style.width = '100%';
        fabricTexture.style.height = '100%';
        fabricTexture.style.objectFit = 'cover';
        graphic.style.transform = 'translate(-50%, -50%) scale(1.5)';
    }
};

let cart = [];

window.addToCart = function(buttonElement) {
    const card = buttonElement.closest('.product-card');
    const product = products.find(p => p.id === card.id);
    const title = product.name;
    const price = product.price;
    const activeColorSwatch = card.querySelector('.swatch.active');
    const colorName = activeColorSwatch ? activeColorSwatch.getAttribute('title') : 'Negro';
    const imgSrc = product.img;
    
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
        const collection = document.getElementById('tshirts');
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
            setTimeout(() => {
                document.getElementById('payment-success').classList.add('hidden');
                document.getElementById('checkout-form').classList.remove('hidden');
                finalPayBtn.classList.remove('hidden');
                document.querySelector('.payment-methods').classList.remove('hidden');
            }, 500);
        });
    }
}
