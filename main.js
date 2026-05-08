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


// --- LOGISTICS API ENVELOPE (BRIDGE) ---
/**
 * This service handles communication with external logistics providers.
 * Integration points: Shipping calculation, shipment creation, and tracking.
 */
const LogisticsService = {
    apiEndpoint: 'https://api.logistics-provider.com/v1', // Placeholder
    apiKey: null, // Should be set via environment or secure config

    async calculateShipping(zipCode, weight) {
        console.log(`Logistics: Calculating shipping for ZIP ${zipCode}...`);
        // Mock API call
        return new Promise(resolve => {
            setTimeout(() => {
                const basePrice = 5000; // Mock ARS
                resolve({ success: true, price: basePrice, currency: 'ARS', estDelivery: '3-5 business days' });
            }, 800);
        });
    },

    async createShipment(orderData) {
        console.log('Logistics: Creating shipment for order...', orderData);
        // Mock API call
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ success: true, trackingNumber: `ALZ-${Math.random().toString(36).toUpperCase().substr(2, 9)}`, status: 'PENDING' });
            }, 1500);
        });
    },

    async trackOrder(trackingNumber) {
        console.log(`Logistics: Tracking order ${trackingNumber}...`);
        // Mock API call
        return { status: 'IN_TRANSIT', location: 'Buenos Aires Distribution Center' };
    }
};

// --- CORE APPLICATION LOGIC (REINFORCED) ---
(function() {
    'use strict';

    // Internal State
    let cart = [];

    // Initialization
    document.addEventListener('DOMContentLoaded', () => {
        try {
            initProducts();
            initUI();
            initCart();
            initCursor();
            initLegalModal();
            console.log('Alazan Store: Core initialized and reinforced.');
        } catch (error) {
            console.error('Alazan Store: Initialization failed:', error);
        }
    });

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
                    Nos reservamos el derecho en cualquier momento de modificar o discontinuar el Servicio ( (o cualquier parte o contenido del mismo) sin previo aviso.<br>
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

            const isHeavy = p.type === 'sweatshirt' || p.type === 'hoodie';
            
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
                            <img src="${p.baseImg}" class="fabric-texture" alt="Texture">
                            <img src="${p.img}" class="shirt-graphic" style="transform: translate(-50%, -50%) ${graphicScale}; margin-top: ${graphicMargin};" alt="${p.name}">
                        </div>
                    </div>
                    <div class="thumbnails">
                        <div class="thumb-item active" data-view="front">
                            <img src="${p.baseImg}" style="opacity: 0.5;" alt="Front">
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
                            <p>${p.type === 'tshirt' ? 'LIMITED ELITE SERIES · 240 GSM' : (p.type === 'kids' ? 'KIDS BABALITY SERIES · 100% COTTON' : 'PREMIUM HEAVYWEIGHT · 400 GSM')}</p>
                        </div>
                        <div class="product-price">${p.price.toLocaleString('es-AR')} ARS</div>
                    </div>
                    <div class="color-picker">
                        <div class="swatch active" style="background: #000;" data-color="#000000" title="Negro"></div>
                        <div class="swatch" style="background: #ffffff;" data-color="#ffffff" title="Blanco"></div>
                        <div class="swatch" style="background: #f0f0f0;" data-color="#f0f0f0" title="Gris"></div>
                    </div>
                    <button class="add-to-cart-btn">AÑADIR A LA CESTA</button>
                </div>
            `;
            
            // Event Listeners for the card
            card.querySelector('.add-to-cart-btn').addEventListener('click', function() { addToCart(this); });
            card.querySelectorAll('.thumb-item').forEach(thumb => {
                thumb.addEventListener('click', function() { 
                    changeView(p.id, this.getAttribute('data-view'), this); 
                });
            });

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
            
            const activeTab = document.querySelector('.tab-btn.active');
            const indicator = document.querySelector('.tab-indicator');
            if(activeTab && indicator) {
                indicator.style.left = activeTab.offsetLeft + 'px';
                indicator.style.width = activeTab.offsetWidth + 'px';
            }
        }

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

    // Exported to window only if necessary for HTML inline events (refactored most to listeners)
    window.switchTab = function(tabName) {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');
        const indicator = document.querySelector('.tab-indicator');
        
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        const activeBtn = Array.from(tabBtns).find(btn => btn.textContent.toLowerCase().includes(tabName));
        if(activeBtn && indicator) {
            activeBtn.classList.add('active');
            indicator.style.left = activeBtn.offsetLeft + 'px';
            indicator.style.width = activeBtn.offsetWidth + 'px';
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
    }

    function addToCart(buttonElement) {
        const card = buttonElement.closest('.product-card');
        const product = products.find(p => p.id === card.id);
        if (!product) return;

        const activeColorSwatch = card.querySelector('.swatch.active');
        const colorName = activeColorSwatch ? activeColorSwatch.getAttribute('title') : 'Negro';
        
        cart.push({ 
            id: product.id,
            title: product.name, 
            color: colorName, 
            price: product.price, 
            img: product.img 
        });
        
        buttonElement.textContent = '✓ AÑADIDO';
        setTimeout(() => buttonElement.textContent = 'AÑADIR A LA CESTA', 1500);
        
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
                    <img src="${item.img}" class="cart-item-img" alt="${item.title}">
                    <div class="cart-item-details">
                        <div>
                            <div class="cart-item-title">${item.title}</div>
                            <div class="cart-item-color">${item.color}</div>
                            <div class="cart-item-price">${item.price.toLocaleString('es-AR')} ARS</div>
                        </div>
                        <div class="remove-item" data-index="${index}">ELIMINAR</div>
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

        if (cartTotalPrice) cartTotalPrice.textContent = total.toLocaleString('es-AR') + ' ARS';
        if (payAmount) payAmount.textContent = total.toLocaleString('es-AR') + ' ARS';
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
        const cartMenu = document.getElementById('cart-menu');
        const openCartBtn = document.getElementById('open-cart');
        const closeCartBtn = document.getElementById('close-cart');
        const checkoutBtn = document.getElementById('checkout-btn');
        const checkoutModal = document.getElementById('checkout-modal');
        const closeCheckoutBtn = document.getElementById('close-checkout');
        
        if(openCartBtn) openCartBtn.addEventListener('click', (e) => { e.preventDefault(); cartMenu?.classList.add('open'); });
        if(closeCartBtn) closeCartBtn.addEventListener('click', () => cartMenu?.classList.remove('open'));
        if(checkoutBtn) checkoutBtn.addEventListener('click', () => { 
            cartMenu?.classList.remove('open'); 
            checkoutModal?.classList.add('open'); 
        });
        if(closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', () => checkoutModal?.classList.remove('open'));

        const paymentMethods = document.querySelectorAll('.payment-method');
        paymentMethods.forEach(pm => {
            pm.addEventListener('click', () => {
                paymentMethods.forEach(m => m.classList.remove('active'));
                pm.classList.add('active');
            });
        });

        const finalPayBtn = document.getElementById('final-pay-btn');
        if(finalPayBtn) {
            finalPayBtn.addEventListener('click', async () => {
                document.getElementById('payment-processing')?.classList.remove('hidden');
                finalPayBtn.classList.add('hidden');
                document.querySelector('.payment-methods')?.classList.add('hidden');
                
                // INTEGRATION POINT: Send order to Logistics Service
                const logisticsResult = await LogisticsService.createShipment({
                    items: cart,
                    timestamp: new Date().toISOString()
                });
                console.log('Logistics Shipment Created:', logisticsResult);

                setTimeout(() => {
                    document.getElementById('payment-processing')?.classList.add('hidden');
                    document.getElementById('payment-success')?.classList.remove('hidden');
                    // Clear cart after success
                    cart = [];
                    updateCartUI();
                }, 2000);
            });
        }
        
        const continueShopping = document.getElementById('continue-shopping');
        if(continueShopping) {
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

