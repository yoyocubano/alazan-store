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
    { id: 'ken', name: 'Ken (Elite)', img: 'graphic_ken_elite_hifi.png', cat: 'sf', fighter: 'KEN' },

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
    { id: 'shaokahn', name: 'Shao Kahn (Elite)', img: 'graphic_shaokahn_elite_hifi.png', cat: 'mk', fighter: 'SHAOKAHN' },
    { id: 'sonya', name: 'Sonya Blade (Elite)', img: 'graphic_sonya_elite_hifi.png', cat: 'mk', fighter: 'SONYA' },

    // --- DC ---
    { id: 'joker', name: 'The Joker (Elite)', img: 'graphic_joker_elite_nano_hifi.png', cat: 'dc', fighter: 'JOKER' },

    // --- TEKKEN --- (coming soon)
    { id: 'paul', name: 'Paul Phoenix (Elite)', img: null, cat: 'tekken', fighter: 'PAUL', comingSoon: true },
    { id: 'king', name: 'King (Elite)', img: null, cat: 'tekken', fighter: 'KING', comingSoon: true },
    { id: 'marshall', name: 'Marshall Law (Elite)', img: null, cat: 'tekken', fighter: 'MARSHALL', comingSoon: true },
    { id: 'eddy', name: 'Eddy Gordo (Elite)', img: null, cat: 'tekken', fighter: 'EDDY', comingSoon: true },
    { id: 'heihachi', name: 'Heihachi Mishima (Elite)', img: null, cat: 'tekken', fighter: 'HEIHACHI', comingSoon: true },
    { id: 'kazuya', name: 'Kazuya Mishima (Elite)', img: null, cat: 'tekken', fighter: 'KAZUYA', comingSoon: true },

    // --- GOD OF WAR --- (coming soon)
    { id: 'kratos_classic', name: 'Kratos (Classic)', img: null, cat: 'gow', fighter: 'KRATOS', comingSoon: true },
    { id: 'kratos_blade', name: 'Kratos (Blade of Chaos)', img: null, cat: 'gow', fighter: 'KRATOS', comingSoon: true },
    { id: 'kratos_dual', name: 'Kratos (Dual Blades)', img: null, cat: 'gow', fighter: 'KRATOS', comingSoon: true },
    { id: 'kratos_norse', name: 'Kratos (Norse)', img: null, cat: 'gow', fighter: 'KRATOS', comingSoon: true },
    { id: 'thor_gow', name: 'Thor (Ragnarok)', img: null, cat: 'gow', fighter: 'THOR', comingSoon: true },

    // --- HORIZON --- (coming soon)
    { id: 'aloy', name: 'Aloy (Elite)', img: null, cat: 'horizon', fighter: 'ALOY', comingSoon: true },

    // --- PLAYSTATION --- (coming soon)
    { id: 'playstation', name: 'PlayStation (Elite)', img: null, cat: 'ps', fighter: 'PLAYSTATION', comingSoon: true }
];

const kidsData = [
    { id: 'rain_babality', name: 'Rain vs Robocop', img: 'graphic_babality_rain.png', cat: 'kids', fighter: 'RAIN' },
    { id: 'kunglao_babality', name: 'Kung Lao vs Terminator', img: 'graphic_babality_kunglao.png', cat: 'kids', fighter: 'KUNGLAO' },
    { id: 'kollector_babality', name: 'Kollector Babality', img: 'graphic_babality_kollector.png', cat: 'kids', fighter: 'KOLLECTOR' },
    { id: 'raiden_babality', name: 'Raiden vs Rambo', img: 'graphic_babality_raiden.png', cat: 'kids', fighter: 'RAIDEN' },
    { id: 'scorpion_babality', name: 'Scorpion Babality', img: 'graphic_babality_scorpion.png', cat: 'kids', fighter: 'SCORPION' },
    { id: 'reptile_babality', name: 'Reptile Babality', img: 'graphic_babality_reptile.png', cat: 'kids', fighter: 'REPTILE' },
    { id: 'johnny_babality', name: 'Johnny Cage Babality', img: 'graphic_babality_johnny_v2.png', cat: 'kids', fighter: 'JOHNNY' },
    { id: 'subzero_babality', name: 'Sub-Zero Babality', img: 'graphic_babality_subzero_v2.png', cat: 'kids', fighter: 'SUBZERO' },
    { id: 'jax_babality', name: 'Jax vs Kabal', img: 'graphic_babality_jax.png', cat: 'kids', fighter: 'JAX' }
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


// ── I18N — EN / PT-BR ────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    // Nav
    nav_search:          'SEARCH',
    nav_cart:            'CART',
    nav_all:             'ALL PRODUCTS',
    nav_mk_roster:       'MORTAL KOMBAT ROSTER',
    nav_sf_roster:       'STREET FIGHTER ROSTER',
    nav_garments:        'GARMENTS',
    nav_tshirts:         'ELITE T-SHIRTS (240 GSM)',
    nav_sweatshirts:     'SWEATSHIRTS (400 GSM)',
    nav_hoodies:         'HOODED SWEATSHIRTS',
    nav_kids:            'BABALITY COLLECTION',
    nav_kids_roster:     'KIDS ROSTER',
    nav_kids_tshirts:    'KIDS T-SHIRTS',
    nav_kids_access:     'BABALITY ACCESSORIES',
    nav_kids_info:       'Garments designed for comfort and style for the little ones.',
    nav_help:            'HELP',
    nav_shipping:        'SHIPPING & RETURNS',
    nav_size_guide:      'SIZE GUIDE',
    nav_contact:         'CONTACT',
    // Hero
    hero_eyebrow:        'WEAR WHAT YOU PLAY',
    hero_sub:            'HIGH GRAMMAGE PREMIUM COTTON\nARTISAN PRINTED',
    hero_cta:            'EXPLORE CATALOG',
    // Section titles
    sec_tshirts:         'T-SHIRTS',
    sec_sweatshirts:     'ELITE CREWNECK SERIES · SWEATSHIRTS',
    sec_hoodies:         'PREMIUM HOODIE SERIES · HOODIES',
    sec_kids:            'KIDS BABALITY SERIES · T-SHIRTS',
    // Product card
    tag_tshirt:          'LIMITED ELITE SERIES · 240 GSM',
    tag_kids:            'KIDS BABALITY SERIES · 100% COTTON',
    tag_heavy:           'PREMIUM HEAVYWEIGHT · 400 GSM',
    color_black:         'Black',
    color_white:         'White',
    color_gray:          'Gray',
    btn_add:             'ADD TO CART',
    btn_added:           '✓ ADDED',
    // Cart
    cart_title:          'YOUR CART',
    cart_empty:          'Your cart is empty',
    cart_total:          'TOTAL',
    btn_checkout:        'PROCEED TO CHECKOUT',
    btn_remove:          'Remove',
    // Checkout modal
    checkout_title:      'SECURE CHECKOUT',
    label_name:          'FULL NAME',
    label_email:         'EMAIL',
    label_address:       'SHIPPING ADDRESS',
    label_city:          'CITY',
    label_zip:           'ZIP CODE',
    label_cpf:           'CPF (required for Brazil)',
    ssl_badge:           '🔒 SSL ENCRYPTED PAYMENT · TOTAL:',
    btn_pay:             'CONFIRM & PAY',
    processing:          'PROCESSING PAYMENT...',
    success_title:       'THANK YOU FOR YOUR ORDER!',
    success_body:        'We have sent an email with your order details.',
    btn_continue:        'BACK TO STORE',
    err_required:        'Please fill in all required fields.',
    err_cpf:             'Invalid CPF. Required format: XXX.XXX.XXX-XX',
    err_payment:         'Payment error:',
    // Footer
    footer_buy:          'SHOP',
    footer_support:      'SUPPORT',
    footer_legal:        'LEGAL',
    footer_shipping_f:   'SHIPPING & RETURNS',
    footer_size_guide:   'SIZE GUIDE',
    footer_returns:      'RETURNS',
    footer_terms:        'TERMS OF SERVICE',
    footer_privacy:      'PRIVACY POLICY',
    footer_legal_notice: 'LEGAL NOTICE',
    footer_tagline:      'PREMIUM GAMING APPAREL. HIGH-END STREETWEAR DESIGNED FOR THE ELITE.',
    // Menu tabs
    tab_women:           'WOMEN',
    tab_men:             'MEN',
    tab_kids_tab:        'KIDS',
  },
  pt: {
    nav_search:          'BUSCAR',
    nav_cart:            'CARRINHO',
    nav_all:             'TODOS OS PRODUTOS',
    nav_mk_roster:       'ELENCO MORTAL KOMBAT',
    nav_sf_roster:       'ELENCO STREET FIGHTER',
    nav_garments:        'PEÇAS',
    nav_tshirts:         'CAMISETAS ELITE (240 GSM)',
    nav_sweatshirts:     'MOLETONS (400 GSM)',
    nav_hoodies:         'MOLETONS COM CAPUZ',
    nav_kids:            'COLEÇÃO BABALITY',
    nav_kids_roster:     'ELENCO INFANTIL',
    nav_kids_tshirts:    'CAMISETAS INFANTIS',
    nav_kids_access:     'ACESSÓRIOS BABALITY',
    nav_kids_info:       'Peças criadas para o conforto e estilo dos pequenos.',
    nav_help:            'AJUDA',
    nav_shipping:        'ENVIOS E DEVOLUÇÕES',
    nav_size_guide:      'GUIA DE MEDIDAS',
    nav_contact:         'CONTATO',
    hero_eyebrow:        'VISTA O QUE VOCÊ JOGA',
    hero_sub:            'ALGODÃO PREMIUM DE ALTO GRAMATURA\nIMPRESSO ARTESANALMENTE',
    hero_cta:            'EXPLORAR CATÁLOGO',
    sec_tshirts:         'CAMISETAS',
    sec_sweatshirts:     'SÉRIE ELITE CREWNECK · MOLETONS',
    sec_hoodies:         'SÉRIE PREMIUM · MOLETONS COM CAPUZ',
    sec_kids:            'SÉRIE BABALITY INFANTIL · CAMISETAS',
    tag_tshirt:          'SÉRIE ELITE LIMITADA · 240 GSM',
    tag_kids:            'SÉRIE BABALITY KIDS · 100% ALGODÃO',
    tag_heavy:           'PESO PREMIUM · 400 GSM',
    color_black:         'Preto',
    color_white:         'Branco',
    color_gray:          'Cinza',
    btn_add:             'ADICIONAR AO CARRINHO',
    btn_added:           '✓ ADICIONADO',
    cart_title:          'SEU CARRINHO',
    cart_empty:          'Seu carrinho está vazio',
    cart_total:          'TOTAL',
    btn_checkout:        'FINALIZAR COMPRA',
    btn_remove:          'Remover',
    checkout_title:      'CHECKOUT SEGURO',
    label_name:          'NOME COMPLETO',
    label_email:         'E-MAIL',
    label_address:       'ENDEREÇO DE ENTREGA',
    label_city:          'CIDADE',
    label_zip:           'CEP',
    label_cpf:           'CPF (obrigatório para o Brasil)',
    ssl_badge:           '🔒 PAGAMENTO CRIPTOGRAFADO SSL · TOTAL:',
    btn_pay:             'CONFIRMAR E PAGAR',
    processing:          'PROCESSANDO PAGAMENTO...',
    success_title:       'OBRIGADO PELA SUA COMPRA!',
    success_body:        'Enviamos um e-mail com os detalhes do seu pedido.',
    btn_continue:        'VOLTAR À LOJA',
    err_required:        'Por favor, preencha todos os campos obrigatórios.',
    err_cpf:             'CPF inválido. Formato exigido: XXX.XXX.XXX-XX',
    err_payment:         'Erro no pagamento:',
    footer_buy:          'COMPRAR',
    footer_support:      'SUPORTE',
    footer_legal:        'JURÍDICO',
    footer_shipping_f:   'ENVIOS E DEVOLUÇÕES',
    footer_size_guide:   'GUIA DE MEDIDAS',
    footer_returns:      'DEVOLUÇÕES',
    footer_terms:        'TERMOS DE SERVIÇO',
    footer_privacy:      'POLÍTICA DE PRIVACIDADE',
    footer_legal_notice: 'AVISO LEGAL',
    footer_tagline:      'MODA GAMER PREMIUM. STREETWEAR DE ALTO NÍVEL CRIADO PARA A ELITE.',
    tab_women:           'MULHER',
    tab_men:             'HOMEM',
    tab_kids_tab:        'KIDS',
  },
  es: {
    nav_search:          'BUSCAR',
    nav_cart:            'CESTA',
    nav_all:             'TODOS LOS PRODUCTOS',
    nav_mk_roster:       'ELENCO MORTAL KOMBAT',
    nav_sf_roster:       'ELENCO STREET FIGHTER',
    nav_garments:        'PRENDAS',
    nav_tshirts:         'CAMISETAS ELITE (240 GSM)',
    nav_sweatshirts:     'SUDADERAS (400 GSM)',
    nav_hoodies:         'SUDADERAS CON CAPUCHA',
    nav_kids:            'COLECCIÓN BABALITY',
    nav_kids_roster:     'ELENCO INFANTIL',
    nav_kids_tshirts:    'CAMISETAS NIÑOS',
    nav_kids_access:     'ACCESORIOS BABALITY',
    nav_kids_info:       'Prendas diseñadas para la comodidad y el estilo de los más pequeños.',
    nav_help:            'AYUDA',
    nav_shipping:        'ENVÍOS Y DEVOLUCIONES',
    nav_size_guide:      'GUÍA DE TALLAS',
    nav_contact:         'CONTACTO',
    hero_eyebrow:        'VISTE LO QUE JUEGAS',
    hero_sub:            'ALGODÓN PREMIUM DE ALTO GRAMAJE\nIMPRESO ARTESANALMENTE EN ARGENTINA',
    hero_cta:            'EXPLORAR CATÁLOGO',
    sec_tshirts:         'T-SHIRTS',
    sec_sweatshirts:     'ELITE CREWNECK SERIES · SUDADERAS',
    sec_hoodies:         'PREMIUM HOODIE SERIES · HOODIES',
    sec_kids:            'KIDS BABALITY SERIES · T-SHIRTS',
    tag_tshirt:          'SERIE ELITE LIMITADA · 240 GSM',
    tag_kids:            'SERIE BABALITY KIDS · 100% ALGODÓN',
    tag_heavy:           'PESO PREMIUM · 400 GSM',
    color_black:         'Negro',
    color_white:         'Blanco',
    color_gray:          'Gris',
    btn_add:             'AGREGAR AL CARRO',
    btn_added:           '✓ AGREGADO',
    cart_title:          'TU CESTA',
    cart_empty:          'Tu cesta está vacía',
    cart_total:          'TOTAL',
    btn_checkout:        'PROCEDER AL PAGO',
    btn_remove:          'Eliminar',
    checkout_title:      'CHECKOUT SEGURO',
    label_name:          'NOMBRE COMPLETO',
    label_email:         'EMAIL',
    label_address:       'DIRECCIÓN DE ENVÍO',
    label_city:          'CIUDAD',
    label_zip:           'CÓDIGO POSTAL',
    label_cpf:           'CPF (requerido para Brasil)',
    ssl_badge:           '🔒 PAGO ENCRIPTADO SSL · TOTAL:',
    btn_pay:             'CONFIRMAR Y PAGAR',
    processing:          'PROCESANDO PAGO...',
    success_title:       '¡GRACIAS POR TU PEDIDO!',
    success_body:        'Enviamos un email con los detalles de tu pedido.',
    btn_continue:        'VOLVER A LA TIENDA',
    err_required:        'Por favor completá todos los campos requeridos.',
    err_cpf:             'CPF inválido. Formato requerido: XXX.XXX.XXX-XX',
    err_payment:         'Error en el pago:',
    footer_buy:          'COMPRAR',
    footer_support:      'SOPORTE',
    footer_legal:        'LEGAL',
    footer_shipping_f:   'ENVÍOS Y DEVOLUCIONES',
    footer_size_guide:   'GUÍA DE TALLAS',
    footer_returns:      'DEVOLUCIONES',
    footer_terms:        'TÉRMINOS DE SERVICIO',
    footer_privacy:      'POLÍTICA DE PRIVACIDAD',
    footer_legal_notice: 'AVISO LEGAL',
    footer_tagline:      'ROPA GAMER PREMIUM. STREETWEAR DE ALTO NIVEL DISEÑADO PARA LA ÉLITE.',
    tab_women:           'MUJER',
    tab_men:             'HOMBRE',
    tab_kids_tab:        'NIÑOS',
  }
};

// Auto-detect language from browser (defaults to EN)
let currentLang = (() => {
  const saved = localStorage.getItem('alazan_lang');
  if (saved && TRANSLATIONS[saved]) return saved;
  const browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (browser.startsWith('pt')) return 'pt';
  if (browser.startsWith('es')) return 'es';
  return 'en';
})();

function t(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS.en)[key] || TRANSLATIONS.en[key] || key;
}

function applyTranslations() {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' && el.placeholder) {
      el.placeholder = t(key);
    } else {
      el.innerHTML = t(key).replace(/\n/g, '<br>');
    }
  });
  // Update lang switcher active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
  // Update html lang attr
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : currentLang === 'es' ? 'es' : 'en';
  // Re-render product grids (they use t() inline)
  if (typeof renderProducts === 'function') renderProducts();
  // Update cart UI strings
  if (typeof updateCartUI === 'function') updateCartUI();
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('alazan_lang', lang);
  applyTranslations();
}

// ── ALAZAN STORE API CLIENT ───────────────────────────────────
const AlazanAPI = {
    BASE: window.ALAZAN_API_URL || 'https://backend-production-00e6.up.railway.app/api',

    async _post(path, body) {
        const res = await fetch(`${this.BASE}${path}`, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify(body)
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({ error: res.statusText }));
            throw new Error(err.error || `API error ${res.status}`);
        }
        return res.json();
    },

    async _get(path) {
        const res = await fetch(`${this.BASE}${path}`);
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json();
    },

    // Detect country from browser locale (fallback: AR)
    detectCountry() {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        if (tz.includes('Buenos_Aires') || tz.includes('Cordoba')) return 'AR';
        if (tz.includes('Sao_Paulo') || tz.includes('Brasilia'))   return 'BR';
        if (tz.includes('Mexico'))                                   return 'MX';
        if (tz.includes('Toronto') || tz.includes('Vancouver'))     return 'CA';
        if (tz.includes('America/') && !tz.includes('Mexico') &&
            !tz.includes('Argentina') && !tz.includes('Sao_Paulo')) return 'US';
        return 'AR'; // Default to Argentina
    },

    // Get available payment providers for detected country
    async getPaymentConfig() {
        const country = this.detectCountry();
        return this._get(`/checkout/config?country=${country}`);
    },

    // Get shipping rates (Printful)
    async getShippingRates({ items, recipient }) {
        return this._post('/checkout/shipping', { items, recipient });
    },

    // Initiate Stripe Checkout Session (redirect)
    async checkoutStripe({ items, customer }) {
        return this._post('/checkout/stripe', { items, customer });
    },

    // Initiate MercadoPago Preference (redirect)
    async checkoutMercadoPago({ items, customer, countryCode }) {
        return this._post('/checkout/mercadopago', { items, customer, countryCode });
    },

    // Get order status by ref
    async getOrder(ref) {
        return this._get(`/orders/${ref}`);
    }
};

// --- CORE APPLICATION LOGIC (REINFORCED) ---
(function() {
    'use strict';

    // Internal State
    let cart = [];

    // Initialization
    // Make renderProducts globally accessible for i18n re-render
    function renderProducts() { initProducts(); }

    document.addEventListener('DOMContentLoaded', () => {
        try {
            initProducts();
            initUI();
            initSearch();
            initCart();
            initCursor();
            initLegalModal();
            initLangSwitcher();
            applyTranslations();
            console.log('Alazan Store: Core initialized.');
        } catch (error) {
            console.error('Alazan Store: Initialization failed:', error);
        }
    });

    function initLangSwitcher() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                setLang(btn.getAttribute('data-lang'));
            });
        });
    }

    // --- FUNCTIONS ---

    function initLegalModal() {
        const modal = document.getElementById('legal-modal');
        if (!modal) return;
        
        const legalTitle = modal.querySelector('.legal-h2');
        const legalBody = modal.querySelector('.legal-body');
        const closeBtn = document.querySelector('.close-legal');

        const legalContent = {
            terms: {
                title: 'TÉRMINOS DE SERVICIO',
                content: `
                    <p><strong>1. Descripción General</strong><br>
                    Bienvenido a Alazan Store. Este sitio web es operado por Alazan Store. En todo el sitio, los términos "nosotros", "nos" y "nuestro" se refieren a Alazan Store. Ofrecemos este sitio web, incluyendo toda la información, herramientas y servicios disponibles para ti, el usuario, condicionado a tu aceptación de todos los términos, condiciones, políticas y avisos aquí establecidos.</p>
                    
                    <p>Al visitar nuestro sitio y/o comprarnos algo, participas en nuestro "Servicio" y aceptas estar sujeto a los siguientes términos y condiciones ("Términos de Servicio", "Términos"), incluidos los términos y condiciones adicionales y las políticas a las que se hace referencia en el presente documento. Estos Términos se aplican a todos los usuarios del sitio, incluyendo navegadores, proveedores, clientes y comerciantes.</p>

                    <p><strong>2. Condiciones Generales</strong><br>
                    Nos reservamos el derecho de rechazar la prestación del servicio a cualquier persona, por cualquier motivo y en cualquier momento.<br>
                    Entiendes que tu contenido (sin incluir la información de tu tarjeta de crédito o métodos de pago), puede ser transferido sin encriptar e implicar (a) transmisiones a través de varias redes; y (b) cambios para adaptarse a los requisitos técnicos de conexión de redes o dispositivos. La información de pago siempre se encripta durante la transferencia a través de las redes (mediante pasarelas seguras como Stripe, PayPal o Revolut).</p>

                    <p>Estás de acuerdo con no reproducir, duplicar, copiar, vender, revender o explotar cualquier parte del Servicio, uso del Servicio, o acceso al Servicio o cualquier contacto en el sitio web a través del cual se presta el servicio, sin el expreso permiso por escrito de nuestra parte.</p>

                    <p><strong>3. Productos y Servicios</strong><br>
                    Nuestros productos ("Premium Gaming Apparel" y colecciones derivadas) están disponibles exclusivamente en línea a través de nuestro sitio web. Estos productos pueden tener cantidades limitadas y están sujetos a devolución o cambio únicamente de acuerdo con nuestra Política de Devoluciones.<br>
                    Hemos hecho todo lo posible para mostrar con la mayor precisión posible los colores y las imágenes de nuestros productos. No podemos garantizar que la visualización de cualquier color en el monitor de tu computadora o dispositivo móvil sea exacta.<br>
                    Nos reservamos el derecho, pero no estamos obligados, a limitar las ventas de nuestros productos o servicios a cualquier persona, región geográfica o jurisdicción.</p>

                    <p><strong>4. Precios y Modificaciones al Servicio</strong><br>
                    Los precios de nuestros productos están sujetos a cambios sin previo aviso.<br>
                    Nos reservamos el derecho en cualquier momento de modificar o discontinuar el Servicio (o cualquier parte o contenido del mismo) sin previo aviso.<br>
                    No seremos responsables ante ti ni ante ningún tercero por ninguna modificación, cambio de precio, suspensión o interrupción del Servicio.</p>

                    <p><strong>5. Exactitud de Facturación e Información de la Cuenta</strong><br>
                    Nos reservamos el derecho de rechazar cualquier pedido que realices con nosotros. Podemos, a nuestra discreción, limitar o cancelar las cantidades compradas por persona, por hogar o por pedido. En el caso de que hagamos un cambio o cancelemos un pedido, intentaremos notificarte poniéndonos en contacto vía correo electrónico o dirección de facturación proporcionada en el momento en que se hizo el pedido.<br>
                    Te comprometes a proporcionar información de compra y de cuenta actual, completa y precisa para todas las compras realizadas en nuestra tienda.</p>

                    <p><strong>6. Herramientas y Enlaces de Terceros</strong><br>
                    Es posible que te proporcionemos acceso a herramientas o pasarelas de pago de terceros (por ejemplo, Stripe, PayPal, Revolut) sobre los cuales no supervisamos ni tenemos ningún control.<br>
                    Reconoces y aceptas que proporcionamos acceso a dichas herramientas "tal cual" y "según disponibilidad" sin garantías, representaciones ni condiciones de ningún tipo y sin ningún respaldo.</p>

                    <p><strong>7. Usos Prohibidos</strong><br>
                    Además de otras prohibiciones establecidas en los Términos de Servicio, se te prohíbe usar el sitio o su contenido: (a) para cualquier propósito ilegal; (b) para solicitar a otros que realicen o participen en actos ilegales; (c) para infringir cualquier regulación, regla, ley o normativa local o internacional; (d) para acosar, abusar, insultar, dañar, difamar, calumniar, menospreciar, intimidar o discriminar por motivos de género, orientación sexual, religión, etnia, raza, edad, origen nacional o discapacidad; (e) para enviar información falsa o engañosa; o (f) para cargar o transmitir virus o cualquier otro tipo de código malicioso.</p>

                    <p><strong>8. Limitación de Responsabilidad</strong><br>
                    No garantizamos ni aseguramos que el uso de nuestro servicio será ininterrumpido, puntual, seguro o libre de errores. En ningún caso Alazan Store, nuestros directores, empleados o proveedores serán responsables por cualquier lesión, pérdida, reclamo, o cualquier daño directo, indirecto, incidental, punitivo, especial o consecuente de cualquier tipo, incluyendo, sin limitación, pérdida de beneficios, pérdida de ingresos, pérdida de ahorros, pérdida de datos o costos de reemplazo, que surjan de tu uso de cualquiera de los servicios o productos adquiridos mediante el servicio.</p>

                    <p><strong>9. Ley Aplicable</strong><br>
                    Estos Términos de Servicio y cualquier acuerdo separado por el cual te proporcionemos Servicios se regirán e interpretarán de acuerdo con las leyes aplicables en la República Argentina.</p>

                    <p><strong>10. Cambios en los Términos de Servicio</strong><br>
                    Puedes revisar la versión más reciente de los Términos de Servicio en cualquier momento en esta página. Nos reservamos el derecho, a nuestra sola discreción, de actualizar, cambiar o reemplazar cualquier parte de estos Términos de Servicio mediante la publicación de actualizaciones y cambios en nuestro sitio web. Es tu responsabilidad revisar nuestro sitio web periódicamente para ver si hay cambios.</p>

                    <p><strong>11. Información de Contacto</strong><br>
                    Cualquier pregunta sobre los Términos de Servicio debe ser enviada a nosotros a través del siguiente correo electrónico:<br>
                    <strong>info@alazanstore.shop</strong></p>
                `
            },
            privacy: {
                title: 'POLÍTICA DE PRIVACIDAD',
                content: `
                    <p><strong>1. ¿Qué hacemos con tu información?</strong><br>
                    Cuando compras algo en nuestra tienda, como parte del proceso de compra y venta, recopilamos la información personal que nos proporcionas, como tu nombre, dirección y correo electrónico. Cuando navegas por nuestra tienda, también recibimos automáticamente la dirección de protocolo de Internet (IP) de tu computadora para proporcionarnos información que nos ayude a conocer tu navegador y sistema operativo.</p>
                    
                    <p><strong>2. Consentimiento</strong><br>
                    ¿Cómo obtienen mi consentimiento? Cuando nos proporcionas información personal para completar una transacción, verificar tu tarjeta de crédito, realizar un pedido, organizar una entrega o devolver una compra, implicamos que aceptas que la recopilemos y la usemos solo por ese motivo específico. Si solicitamos tu información personal por un motivo secundario, como marketing, te pediremos directamente tu consentimiento expreso.</p>

                    <p><strong>3. Divulgación</strong><br>
                    Podemos divulgar tu información personal si la ley nos obliga a hacerlo o si violas nuestros Términos de Servicio.</p>

                    <p><strong>4. Servicios de Terceros</strong><br>
                    En general, los proveedores de terceros utilizados por nosotros solo recopilarán, usarán y divulgarán tu información en la medida necesaria para permitirles realizar los servicios que nos brindan. Sin embargo, algunos proveedores de servicios de terceros, como las pasarelas de pago y otros procesadores de transacciones de pago, tienen sus propias políticas de privacidad con respecto a la información que debemos proporcionarles para tus transacciones relacionadas con las compras.</p>

                    <p><strong>5. Seguridad</strong><br>
                    Para proteger tu información personal, tomamos precauciones razonables y seguimos las mejores prácticas de la industria para asegurarnos de que no se pierda, utilice indebidamente, acceda, divulgue, altere o destruya de manera inapropiada. La información de tu tarjeta de crédito se encripta mediante tecnología de capa de conexión segura (SSL) y se almacena con un cifrado AES-256.</p>

                    <p><strong>6. Cookies</strong><br>
                    Utilizamos cookies para mantener la sesión de tu usuario. No se utilizan para identificarte personalmente en otros sitios web.</p>

                    <p><strong>7. Cambios a esta Política de Privacidad</strong><br>
                    Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento, así que revísala con frecuencia. Los cambios y aclaraciones surtirán efecto inmediatamente después de su publicación en el sitio web.</p>
                `
            },
            legal: {
                title: 'AVISO LEGAL',
                content: `
                    <p><strong>Información Identificativa</strong><br>
                    En cumplimiento con el deber de información general contenido en las normativas vigentes, se reflejan los siguientes datos: La empresa titular de este sitio web es Alazan Store, con domicilio a estos efectos en Buenos Aires, Argentina. Correo electrónico de contacto: info@alazanstore.shop.</p>
                    
                    <p><strong>Usuarios</strong><br>
                    El acceso y/o uso de este portal de Alazan Store atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>

                    <p><strong>Propiedad Intelectual e Industrial</strong><br>
                    Alazan Store por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, etc.). Todos los derechos reservados.</p>

                    <p>Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Alazan Store.</p>

                    <p><strong>Exclusión de Garantías y Responsabilidad</strong><br>
                    Alazan Store no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
                `
            }
        };

        const openModal = (type) => {
            const data = legalContent[type];
            if (data && legalTitle && legalBody) {
                legalTitle.textContent = data.title;
                legalBody.innerHTML = data.content;
                modal.style.display = 'block';
                setTimeout(() => modal.classList.add('open'), 10);
                document.body.style.overflow = 'hidden';
            }
        };

        const closeModal = () => {
            modal.classList.remove('open');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 400);
        };

        document.getElementById('terms-link')?.addEventListener('click', () => openModal('terms'));
        document.getElementById('privacy-link')?.addEventListener('click', () => openModal('privacy'));
        document.getElementById('legal-notice-link')?.addEventListener('click', () => openModal('legal'));

        closeBtn?.addEventListener('click', closeModal);
        window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    }

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

            const typeTag = p.type === 'tshirt' ? t('tag_tshirt') : p.type === 'kids' ? t('tag_kids') : t('tag_heavy');
            const locale  = currentLang === 'pt' ? 'pt-BR' : 'en-US';

            if (p.comingSoon) {
                card.classList.add('coming-soon-card');
                card.innerHTML = `
                    <div class="zalando-gallery">
                        <div class="main-image">
                            <div class="t-shirt-composite coming-soon-overlay">
                                <img src="${p.baseImg}" class="fabric-texture" alt="Texture" loading="lazy" style="filter: grayscale(1) opacity(0.4);">
                                <div class="coming-soon-badge">COMING SOON</div>
                            </div>
                        </div>
                    </div>
                    <div class="product-info-container">
                        <div class="product-meta">
                            <div class="product-info">
                                <h4>${p.name}</h4>
                                <p>${typeTag}</p>
                            </div>
                            <div class="product-price" style="opacity:0.4;font-size:.65rem;letter-spacing:.12em;">PRÓXIMAMENTE</div>
                        </div>
                        <button class="add-to-cart-btn" disabled style="opacity:0.35;cursor:not-allowed;">COMING SOON</button>
                    </div>
                `;
            } else {
            card.innerHTML = `
                <div class="zalando-gallery">
                    <div class="main-image">
                        <div class="t-shirt-composite">
                            <img src="${p.baseImg}" class="fabric-texture" alt="Texture" loading="lazy">
                            <img src="${p.img}" class="shirt-graphic" style="transform: translate(-50%, -50%) ${graphicScale}; margin-top: ${graphicMargin};" alt="${p.name}" loading="lazy">
                        </div>
                    </div>
                    <div class="thumbnails">
                        <div class="thumb-item active" data-view="front">
                            <img src="${p.baseImg}" style="opacity: 0.5;" alt="Front" loading="lazy">
                        </div>
                        <div class="thumb-item" data-view="details">
                            <div class="thumb-color-sync"></div>
                        </div>
                    </div>
                </div>
                <div class="product-info-container">
                    <div class="product-meta">
                        <div class="product-info">
                            <h4>${p.name}</h4>
                            <p>${typeTag}</p>
                        </div>
                        <div class="product-price">${p.price.toLocaleString(locale)} ARS</div>
                    </div>
                    <div class="color-picker">
                        <div class="swatch active" style="background: #000;" data-color="#000000" title="${t('color_black')}"></div>
                        <div class="swatch" style="background: #ffffff;" data-color="#ffffff" title="${t('color_white')}"></div>
                        <div class="swatch" style="background: #f0f0f0;" data-color="#f0f0f0" title="${t('color_gray')}"></div>
                    </div>
                    <div class="size-picker">
                        ${(p.type === 'kids'
                            ? ['2', '4', '6', '8', '10', '12']
                            : ['XS', 'S', 'M', 'L', 'XL', 'XXL']
                        ).map((s, i) => `<button class="size-btn${i === 2 ? ' active' : ''}" data-size="${s}">${s}</button>`).join('')}
                    </div>
                    <button class="add-to-cart-btn">${t('btn_add')}</button>
                </div>
            `;
            }
            
            // Event Listeners — skip for coming soon cards
            if (!p.comingSoon) {
                card.querySelector('.add-to-cart-btn').addEventListener('click', function() { addToCart(this); });
                card.querySelectorAll('.size-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        card.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                    });
                });
                card.querySelectorAll('.thumb-item').forEach(thumb => {
                    thumb.addEventListener('click', function() {
                        changeView(p.id, this.getAttribute('data-view'), this);
                    });
                });
            }

            if (p.type === 'tshirt' && tshirtGrid) tshirtGrid.appendChild(card);
            else if (p.type === 'sweatshirt' && sweatshirtGrid) sweatshirtGrid.appendChild(card);
            else if (p.type === 'hoodie' && hoodieGrid) hoodieGrid.appendChild(card);
            else if (p.type === 'kids' && kidsGrid) kidsGrid.appendChild(card);

            // Populate roster
            if (p.type === 'tshirt' && mkRoster && sfRoster) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = "javascript:void(0)";
                a.textContent = p.fighter;
                a.addEventListener('click', () => filterByFighter(p.fighter));
                li.appendChild(a);
                if(p.cat === 'mk') mkRoster.appendChild(li);
                else if(p.cat === 'sf') sfRoster.appendChild(li);
            }
        });

        // Bind swatches
        document.querySelectorAll('.product-card').forEach(card => {
            const swatches = card.querySelectorAll('.swatch');
            const texture = card.querySelector('.fabric-texture');
            const colorSync = card.querySelector('.thumb-color-sync');
            const isHeavy = card.classList.contains('type-sweatshirt') || card.classList.contains('type-hoodie');
            
            if (isHeavy) texture.style.filter = 'brightness(0.12) contrast(1)';
            else texture.style.filter = 'brightness(0.15) contrast(1.2)';

            swatches.forEach(swatch => {
                swatch.addEventListener('click', (e) => {
                    e.stopPropagation();
                    swatches.forEach(s => s.classList.remove('active'));
                    swatch.classList.add('active');
                    
                    const color = swatch.getAttribute('data-color');
                    const composite = card.querySelector('.t-shirt-composite');
                    if (color === '#000000') {
                        texture.style.filter = isHeavy ? 'brightness(0.12) contrast(1)' : 'brightness(0.15) contrast(1.2)';
                        if (composite) composite.style.background = 'transparent';
                    } else if (color === '#ffffff') {
                        // Wash the knit texture to crisp white — same fabric feel as black but light
                        texture.style.filter = 'brightness(2.5) contrast(0.55) saturate(0)';
                        // Dark bg so white shirt silhouette is clearly visible
                        if (composite) composite.style.background = '#4a4a4a';
                    } else if (color === '#f0f0f0') {
                        texture.style.filter = isHeavy ? 'brightness(0.55) contrast(0.9)' : 'brightness(0.65) contrast(0.9)';
                        if (composite) composite.style.background = 'transparent';
                    }
                    if(colorSync) colorSync.style.backgroundColor = color;
                });
            });
        });
    }

    function initSearch() {
        const searchBtn = document.querySelector('[data-i18n="nav_search"]');
        if (!searchBtn) return;

        // Create search overlay
        const overlay = document.createElement('div');
        overlay.id = 'search-overlay';
        overlay.innerHTML = `
            <div class="search-inner">
                <button class="search-close" id="search-close" aria-label="Cerrar búsqueda">✕</button>
                <input type="text" id="search-input" placeholder="Buscar productos..." autocomplete="off" autofocus>
                <div id="search-results"></div>
            </div>`;
        overlay.style.cssText = `display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:9999;align-items:flex-start;justify-content:center;padding-top:100px;`;
        document.body.appendChild(overlay);

        const style = document.createElement('style');
        style.textContent = `
            #search-overlay { display:none; }
            #search-overlay.open { display:flex !important; }
            .search-inner { width:100%;max-width:600px;padding:0 20px;position:relative; }
            #search-input { width:100%;background:transparent;border:none;border-bottom:1px solid #fff;color:#fff;font-size:clamp(1.2rem,3vw,2rem);padding:12px 0;outline:none;font-family:inherit;letter-spacing:.05em; }
            #search-input::placeholder { color:#666; }
            .search-close { position:absolute;top:-50px;right:20px;background:none;border:none;color:#fff;font-size:1.5rem;cursor:pointer; }
            #search-results { margin-top:30px;display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:16px; }
            .search-result-card { background:#111;padding:12px;cursor:pointer;transition:background .2s; }
            .search-result-card:hover { background:#222; }
            .search-result-card img { width:100%;aspect-ratio:1;object-fit:cover;margin-bottom:8px; }
            .search-result-name { color:#fff;font-size:.75rem;letter-spacing:.05em; }
            .search-result-price { color:#999;font-size:.7rem;margin-top:4px; }
            .search-no-results { color:#666;font-size:.9rem;letter-spacing:.1em; }
        `;
        document.head.appendChild(style);

        searchBtn.addEventListener('click', (e) => { e.preventDefault(); overlay.classList.add('open'); document.getElementById('search-input').focus(); });
        document.getElementById('search-close').addEventListener('click', () => overlay.classList.remove('open'));
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') overlay.classList.remove('open'); });

        document.getElementById('search-input').addEventListener('input', (e) => {
            const q = e.target.value.trim().toLowerCase();
            const results = document.getElementById('search-results');
            if (!q) { results.innerHTML = ''; return; }
            const matches = characterData.filter(p => !p.comingSoon && (p.name.toLowerCase().includes(q) || (p.fighter && p.fighter.toLowerCase().includes(q))));
            if (!matches.length) { results.innerHTML = `<p class="search-no-results">Sin resultados para "${e.target.value}"</p>`; return; }
            results.innerHTML = matches.slice(0,12).map(p => `
                <div class="search-result-card" data-id="${p.id}">
                    <img src="${p.baseImg}" alt="${p.name}" loading="lazy">
                    <div class="search-result-name">${p.name}</div>
                    <div class="search-result-price">${p.price ? p.price.toLocaleString('es-AR') + ' ARS' : ''}</div>
                </div>`).join('');
            results.querySelectorAll('.search-result-card').forEach(card => {
                card.addEventListener('click', () => {
                    overlay.classList.remove('open');
                    const el = document.querySelector(`[data-product-id="${card.dataset.id}"]`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

        // Wire tab buttons (MUJER / HOMBRE / NIÑOS)
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabName = btn.getAttribute('data-tab');
                if (tabName) switchTab(tabName);
            });
        });

        document.querySelectorAll('.accordion-header').forEach(acc => {
            acc.addEventListener('click', function() {
                const body = this.nextElementSibling;
                const plus = this.querySelector('.plus');
                if(body && body.classList.contains('accordion-body')) {
                    const isOpen = body.classList.toggle('open');
                    plus.textContent = isOpen ? '-' : '+';
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
                    const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
                    zaraMenu?.classList.remove('open');
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

    // Exported to window only if necessary for HTML inline events (refactored most to listeners)
    window.switchTab = function(tabName) {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');
        const indicator = document.querySelector('.tab-indicator');
        
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        const activeBtn = Array.from(tabBtns).find(btn => btn.getAttribute('data-tab') === tabName);
        if(activeBtn) {
            activeBtn.classList.add('active');
            if (indicator) {
                indicator.style.left = activeBtn.offsetLeft + 'px';
                indicator.style.width = activeBtn.offsetWidth + 'px';
            }
        }
        
        const targetId = tabName === 'niños' ? 'tab-niños' : 'tab-adultos';
        document.getElementById(targetId)?.classList.add('active');
    };

    function changeView(productId, viewType, element) {
        const product = products.find(p => p.id === productId);
        const card = document.getElementById(productId);
        if (!product || !card) return;

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
                if (color === '#000000') { fabricTexture.style.filter = isHeavy ? 'brightness(0.12) contrast(1)' : 'brightness(0.15) contrast(1.2)'; composite.style.background = 'transparent'; }
                else if (color === '#ffffff') { fabricTexture.style.filter = 'brightness(2.5) contrast(0.55) saturate(0)'; composite.style.background = '#4a4a4a'; }
                else if (color === '#f0f0f0') { fabricTexture.style.filter = isHeavy ? 'brightness(0.55) contrast(0.9)' : 'brightness(0.65) contrast(0.9)'; composite.style.background = 'transparent'; }
            }
            graphic.style.transform = card.dataset.graphicScale
                ? `translate(-50%, -50%) ${card.dataset.graphicScale}`
                : 'translate(-50%, -50%) scale(1)';
            graphic.style.marginTop = card.dataset.graphicMargin || '-5%';
        } else if (viewType === 'details') {
            // Show graphic close-up — keep shirt as-is, zoom the graphic
            const activeSwatch = card.querySelector('.swatch.active');
            const color = activeSwatch?.getAttribute('data-color') || '#000000';
            const isH = card.classList.contains('type-sweatshirt') || card.classList.contains('type-hoodie');
            fabricTexture.src = product.baseImg;
            if (color === '#000000') fabricTexture.style.filter = isH ? 'brightness(0.12) contrast(1)' : 'brightness(0.15) contrast(1.2)';
            else if (color === '#ffffff') { fabricTexture.style.filter = 'brightness(2.5) contrast(0.55) saturate(0)'; composite.style.background = '#4a4a4a'; }
            else fabricTexture.style.filter = isH ? 'brightness(0.55) contrast(0.9)' : 'brightness(0.65) contrast(0.9)';
            graphic.style.transform = 'translate(-50%, -50%) scale(1.6)';
            graphic.style.marginTop = '0%';
        }
    }

    function addToCart(buttonElement) {
        const card = buttonElement.closest('.product-card');
        const product = products.find(p => p.id === card.id);
        if (!product) return;

        const activeColorSwatch = card.querySelector('.swatch.active');
        const colorName  = activeColorSwatch ? activeColorSwatch.getAttribute('title') : 'Negro';
        const colorHex   = activeColorSwatch ? activeColorSwatch.getAttribute('data-color') : '#000000';
        const activeSizeBtn = card.querySelector('.size-btn.active');
        const size = activeSizeBtn ? activeSizeBtn.getAttribute('data-size') : 'M';

        cart.push({
            id: product.id,
            title: product.name,
            type: product.type,
            color: colorName,
            colorHex,
            size,
            price: product.price,
            img: product.img
        });
        
        buttonElement.textContent = t('btn_added');
        setTimeout(() => { buttonElement.textContent = t('btn_add'); }, 1500);
        
        updateCartUI();
        document.getElementById('cart-menu')?.classList.add('open');
    }

    function updateCartUI() {
        const cartCount = document.getElementById('cart-count');
        const navCartCount = document.getElementById('nav-cart-count');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalPrice = document.getElementById('cart-total-price');
        const checkoutBtn = document.getElementById('checkout-btn');
        const payAmount = document.getElementById('pay-amount');
        
        if (cartCount) cartCount.textContent = cart.length;
        if (navCartCount) navCartCount.textContent = cart.length;
        
        if (!cartItemsContainer) return;

        const locale = currentLang === 'pt' ? 'pt-BR' : 'en-US';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p class="empty-cart-msg">${t('cart_empty')}</p>`;
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
                    <img src="${item.img}" class="cart-item-img" alt="${item.title}" loading="lazy">
                    <div class="cart-item-details">
                        <div>
                            <div class="cart-item-title">${item.title}</div>
                            <div class="cart-item-color">${item.color} · ${item.size}</div>
                            <div class="cart-item-price">${item.price.toLocaleString(locale)} ARS</div>
                        </div>
                        <div class="remove-item" data-index="${index}">${t('btn_remove')}</div>
                    </div>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = html;
        
        // Bind remove buttons
        cartItemsContainer.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1);
                updateCartUI();
            });
        });

        if (cartTotalPrice) cartTotalPrice.textContent = total.toLocaleString(locale) + ' ARS';
        if (payAmount) payAmount.textContent = total.toLocaleString(locale) + ' ARS';
        if (checkoutBtn) checkoutBtn.disabled = false;
    }

    function filterByFighter(fighterName) {
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
                const headerOffset = 100;
                const elementPosition = collection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: elementPosition - headerOffset - 20, behavior: 'smooth' });
            }
        }, 300);
    }

    function initCart() {
        const cartMenu        = document.getElementById('cart-menu');
        const openCartBtn     = document.getElementById('open-cart');
        const closeCartBtn    = document.getElementById('close-cart');
        const checkoutBtn     = document.getElementById('checkout-btn');
        const checkoutModal   = document.getElementById('checkout-modal');
        const closeCheckoutBtn = document.getElementById('close-checkout');

        if (openCartBtn)      openCartBtn.addEventListener('click', (e) => { e.preventDefault(); cartMenu?.classList.add('open'); });
        if (closeCartBtn)     closeCartBtn.addEventListener('click', () => cartMenu?.classList.remove('open'));
        if (checkoutBtn)      checkoutBtn.addEventListener('click', () => {
            cartMenu?.classList.remove('open');
            checkoutModal?.classList.add('open');
            loadPaymentProviders();
        });
        if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', () => checkoutModal?.classList.remove('open'));

        // Payment method tab selection
        const paymentMethods = document.querySelectorAll('.payment-method');
        paymentMethods.forEach(pm => {
            pm.addEventListener('click', () => {
                paymentMethods.forEach(m => m.classList.remove('active'));
                pm.classList.add('active');
            });
        });

        // ── Load available providers for user's country ─────────
        async function loadPaymentProviders() {
            try {
                const config  = await AlazanAPI.getPaymentConfig();
                const country = config.country;

                // Show/hide Stripe button
                const stripeBtn = document.querySelector('.payment-method[data-provider="stripe"]');
                if (stripeBtn) stripeBtn.style.display = config.providers.stripe?.available ? '' : 'none';

                // Show/hide MercadoPago button
                const mpBtn = document.querySelector('.payment-method[data-provider="mercadopago"]');
                if (mpBtn) mpBtn.style.display = config.providers.mercadopago?.available ? '' : 'none';

                // Store country on modal for use at payment time
                checkoutModal?.setAttribute('data-country', country);

                // CPF field: mandatory for Brazil (Correios label requirement)
                const cpfField = document.getElementById('cpf-field');
                if (cpfField) cpfField.style.display = country === 'BR' ? '' : 'none';

                // Country-aware placeholders
                const addrField = document.getElementById('checkout-address');
                const cityField = document.getElementById('checkout-city');
                const zipField  = document.getElementById('checkout-zip');
                const PH = {
                    AR: { addr: 'Av. Corrientes 1234, CABA',       city: 'Buenos Aires',      zip: '1425'      },
                    BR: { addr: 'Rua das Flores 123, Centro',       city: 'São Paulo',         zip: '01310-100' },
                    MX: { addr: 'Av. Insurgentes 500, Roma Norte',  city: 'Ciudad de México',  zip: '06600'     },
                    US: { addr: '123 Main St, Apt 4B',              city: 'New York',          zip: '10001'     },
                    CA: { addr: '123 Queen St W',                   city: 'Toronto',           zip: 'M5H 2M9'  }
                };
                const ph = PH[country] || PH['US'];
                if (addrField) addrField.placeholder = ph.addr;
                if (cityField) cityField.placeholder  = ph.city;
                if (zipField)  zipField.placeholder   = ph.zip;

                // Auto-select first available provider
                const firstVisible = document.querySelector('.payment-method:not([style*="none"])');
                if (firstVisible) {
                    paymentMethods.forEach(m => m.classList.remove('active'));
                    firstVisible.classList.add('active');
                }
            } catch (err) {
                console.warn('[Alazan] Could not load payment config:', err.message);
            }
        }

        // ── Confirm & Pay ───────────────────────────────────────
        const finalPayBtn = document.getElementById('final-pay-btn');
        if (finalPayBtn) {
            finalPayBtn.addEventListener('click', async () => {
                const nameField    = document.getElementById('checkout-name');
                const emailField   = document.getElementById('checkout-email');
                const addressField = document.getElementById('checkout-address');
                const cityField    = document.getElementById('checkout-city');
                const zipField     = document.getElementById('checkout-zip');

                // Basic validation
                const countryCode = checkoutModal?.getAttribute('data-country') || AlazanAPI.detectCountry();
                const cpfField   = document.getElementById('checkout-cpf');
                const cpfValue   = cpfField?.value.trim() || '';

                if (!nameField?.value || !emailField?.value || !addressField?.value || !cityField?.value || !zipField?.value) {
                    alert(t('err_required'));
                    return;
                }

                // CPF mandatory for Brazil
                if (countryCode === 'BR') {
                    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
                    if (!cpfRegex.test(cpfValue)) {
                        alert(t('err_cpf'));
                        cpfField?.focus();
                        return;
                    }
                }

                const customer = {
                    name:        nameField.value.trim(),
                    email:       emailField.value.trim(),
                    address:     addressField.value.trim(),
                    city:        cityField.value.trim(),
                    postalCode:  zipField.value.trim(),
                    countryCode,
                    ...(countryCode === 'BR' && cpfValue ? { cpf: cpfValue } : {})
                };

                // USD prices: ARS 34900 → ~$36.74 USD at 950 rate
                const RATE_ARS = 950;
                const cartItems = cart.map(item => ({
                    id:          item.id,
                    name:        item.title,
                    quantity:    1,
                    priceUSD:    parseFloat((item.price / RATE_ARS).toFixed(2)),
                    color:       item.color,
                    colorHex:    item.colorHex || '#000000',
                    size:        item.size || 'M',
                    garmentType: item.type === 'kids'  ? 'kids' :
                                 item.id.includes('hoodie') ? 'hoodie' :
                                 item.id.includes('sweat')  ? 'sweatshirt' : 'tshirt',
                    imageUrl:    item.img ? new URL(item.img, window.location.href).href : undefined,
                    graphicUrl:  item.img ? new URL(item.img, window.location.href).href : undefined
                }));

                // Determine selected provider
                const activeMethod = document.querySelector('.payment-method.active');
                const provider = activeMethod?.getAttribute('data-provider') || 'stripe';

                document.getElementById('payment-processing')?.classList.remove('hidden');
                finalPayBtn.classList.add('hidden');
                document.querySelector('.payment-methods')?.classList.add('hidden');
                document.getElementById('checkout-form')?.classList.add('hidden');

                try {
                    let result;

                    if (provider === 'mercadopago' && ['AR','BR','MX'].includes(countryCode)) {
                        result = await AlazanAPI.checkoutMercadoPago({ items: cartItems, customer, countryCode });
                        // Redirect to MercadoPago hosted checkout
                        window.location.href = result.redirectUrl;
                        return;
                    } else {
                        // Stripe — redirect to hosted checkout
                        result = await AlazanAPI.checkoutStripe({ items: cartItems, customer, countryCode });
                        window.location.href = result.redirectUrl;
                        return;
                    }

                } catch (err) {
                    console.error('[Alazan] Checkout error:', err.message);
                    document.getElementById('payment-processing')?.classList.add('hidden');
                    finalPayBtn.classList.remove('hidden');
                    document.querySelector('.payment-methods')?.classList.remove('hidden');
                    document.getElementById('checkout-form')?.classList.remove('hidden');
                    alert(`${t('err_payment')} ${err.message}`);
                }
            });
        }

        const continueShopping = document.getElementById('continue-shopping');
        if (continueShopping) {
            continueShopping.addEventListener('click', () => {
                checkoutModal?.classList.remove('open');
                setTimeout(() => {
                    document.getElementById('payment-success')?.classList.add('hidden');
                    document.getElementById('checkout-form')?.classList.remove('hidden');
                    if (finalPayBtn) finalPayBtn.classList.remove('hidden');
                    document.querySelector('.payment-methods')?.classList.remove('hidden');
                }, 500);
            });
        }
    }

})();
