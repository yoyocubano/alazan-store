# Alazan Store — Backend API

## Stack
- **Runtime:** Node.js 18+ / Express
- **Pagos:** Stripe (US/CA/MX) + MercadoPago (AR/BR/MX)
- **POD:** Printful (US/CA/MX/BR — envía a AR)
- **Email:** Nodemailer (SMTP)
- **DB:** JSON file (reemplazable por PostgreSQL)

---

## Setup rápido

```bash
cd backend
cp .env.example .env   # editar con tus keys
npm install
npm run dev            # http://localhost:3001
```

---

## API Keys — Dónde conseguirlas

### 1. STRIPE
- Cuenta: https://dashboard.stripe.com
- Keys: Dashboard → Developers → API Keys
- Webhook: Dashboard → Webhooks → Add endpoint
  - URL: `https://tu-api.com/api/webhooks/stripe`
  - Eventos: `checkout.session.completed`, `payment_intent.payment_failed`
- Currencies soportadas: USD, CAD, MXN

### 2. MERCADO PAGO (por país)

**Argentina (AR)**
- Crear app: https://www.mercadopago.com.ar/developers/panel
- Copiar Access Token y Public Key de tu app

**Brasil (BR)**
- Crear app: https://www.mercadopago.com.br/developers/panel

**México (MX)**
- Crear app: https://www.mercadopago.com.mx/developers/panel

Webhook MP:
- URL: `https://tu-api.com/api/webhooks/mercadopago`
- Eventos: `payment`

### 3. PRINTFUL
- Cuenta: https://www.printful.com
- API Key: Settings → Stores → API Access → Generate Token
- Store ID: URL de tu store en Printful dashboard
- Webhook: Settings → Webhooks → Add
  - URL: `https://tu-api.com/api/webhooks/printful`
  - Eventos: `package_shipped`

### 4. PRINTFUL — IDs de productos base
Los variant IDs en `.env` son los Printful catalog IDs.
Para verificar/actualizar:
```
GET https://api.printful.com/products/{id}/variants
Authorization: Bearer TU_API_KEY
```
- T-Shirt (Bella+Canvas 3001): ID `71`
- Sweatshirt (Gildan 18000): ID `378`
- Hoodie (Gildan 18500): ID `146`
- Kids T-Shirt (Bella+Canvas 3001Y): ID `200`

---

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/health` | Estado del servidor y providers |
| GET | `/api/checkout/config?country=AR` | Providers disponibles para ese país |
| POST | `/api/checkout/stripe` | Crear sesión Stripe → redirect URL |
| POST | `/api/checkout/stripe/intent` | Crear PaymentIntent (Stripe Elements) |
| POST | `/api/checkout/mercadopago` | Crear Preference MP → redirect URL |
| POST | `/api/checkout/shipping` | Calcular envío Printful |
| GET | `/api/orders/:ref` | Estado de una orden (público) |
| GET | `/api/orders` | Listar órdenes (admin) |
| POST | `/api/orders/:ref/sync-printful` | Sync estado Printful (admin) |
| GET | `/api/pod/regions` | Regiones y providers disponibles |
| GET | `/api/pod/variants/:garmentType` | Tallas disponibles por tipo |
| GET | `/api/pod/products` | Productos en Printful store (admin) |
| POST | `/api/pod/products/sync` | Subir producto a Printful (admin) |
| POST | `/api/webhooks/stripe` | Webhook Stripe |
| POST | `/api/webhooks/mercadopago` | Webhook MercadoPago |
| POST | `/api/webhooks/printful` | Webhook Printful (envío) |

Admin endpoints requieren header: `x-admin-key: TU_ADMIN_KEY`

---

## Flujo de una orden

```
Usuario → Checkout form
       → Frontend detecta país (timezone)
       → GET /api/checkout/config?country=XX
       → Muestra Stripe o MercadoPago según país
       → POST /api/checkout/stripe OR /mercadopago
       → Backend crea Order en DB con status "pending_payment"
       → Redirect a Stripe/MP hosted checkout
       → Usuario paga
       → Webhook llega: stripe/mercadopago
       → Backend: Order → "paid"
       → Backend: crea orden en Printful
       → Printful envía a producción
       → Email de confirmación al cliente
       → Webhook Printful "package_shipped"
       → Backend: Order → "shipped"
       → Email de tracking al cliente
```

---

## Tipos de cambio

Los rates ARS/BRL/MXN en `.env` son estáticos.
Para producción, conectar a una API de rates:
- https://api.exchangerate-api.com (gratuita hasta 1500 req/mes)
- https://openexchangerates.org

---

## Deploy

### Railway / Render / Fly.io
```bash
# Variables de entorno: copiar todo el .env
# Start command: node server.js
# Port: 3001 (o PORT del provider)
```

### Con ngrok (desarrollo local + webhooks)
```bash
ngrok http 3001
# Copiar URL de ngrok a MP/Stripe/Printful webhook settings
```
