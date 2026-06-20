/**
 * SKU Map — Alazan Store
 *
 * Maps garment type + color + size → provider-specific product/variant IDs.
 *
 * HOW TO FILL THIS:
 *  Dimona:
 *    1. Log in to dimonatee.com → Products → find your blank
 *    2. API: GET /api/v2021/products → copy product_id
 *    3. API: GET /api/v2021/products/{id}/variants → copy variant_id per size+color
 *
 *  Printful:
 *    1. Log in to printful.com → Products → find blank
 *    2. API: GET https://api.printful.com/products → get id
 *    3. API: GET https://api.printful.com/products/{id} → get variant_id per size+color
 *
 *  Gelato:
 *    Product UIDs follow a structured format — see gelato.js PRODUCT_UID map.
 *    Variant is encoded in the UID string (size = gsi_s/m/l/xl etc.)
 *
 * COLOR CODES:
 *   '#000000' → 'black'
 *   '#ffffff' → 'white'
 *   '#f0f0f0' → 'gray'
 */

const SKU_MAP = {
  // ── T-SHIRT (240 GSM) ──────────────────────────────────────────
  tshirt: {
    dimona: {
      // product_id for the base blank t-shirt in Dimona catalog
      product_id: 'DIMONA_TSHIRT_PRODUCT_ID',    // ← fill after registering
      // variant_id per color+size combo
      variants: {
        black: {
          XS: 'DIMONA_VAR_TSHIRT_BLACK_XS',
          S:  'DIMONA_VAR_TSHIRT_BLACK_S',
          M:  'DIMONA_VAR_TSHIRT_BLACK_M',
          L:  'DIMONA_VAR_TSHIRT_BLACK_L',
          XL: 'DIMONA_VAR_TSHIRT_BLACK_XL',
          XXL:'DIMONA_VAR_TSHIRT_BLACK_XXL',
        },
        white: {
          XS: 'DIMONA_VAR_TSHIRT_WHITE_XS',
          S:  'DIMONA_VAR_TSHIRT_WHITE_S',
          M:  'DIMONA_VAR_TSHIRT_WHITE_M',
          L:  'DIMONA_VAR_TSHIRT_WHITE_L',
          XL: 'DIMONA_VAR_TSHIRT_WHITE_XL',
          XXL:'DIMONA_VAR_TSHIRT_WHITE_XXL',
        },
        gray: {
          XS: 'DIMONA_VAR_TSHIRT_GRAY_XS',
          S:  'DIMONA_VAR_TSHIRT_GRAY_S',
          M:  'DIMONA_VAR_TSHIRT_GRAY_M',
          L:  'DIMONA_VAR_TSHIRT_GRAY_L',
          XL: 'DIMONA_VAR_TSHIRT_GRAY_XL',
          XXL:'DIMONA_VAR_TSHIRT_GRAY_XXL',
        }
      }
    },
    printful: {
      // Bella+Canvas 3001 Unisex Jersey Short Sleeve Tee
      product_id: 71,
      variants: {
        black: { XS: 4011, S: 4012, M: 4013, L: 4014, XL: 4015, XXL: 4016 },
        white: { XS: 4017, S: 4018, M: 4019, L: 4020, XL: 4021, XXL: 4022 },
        gray:  { XS: 4023, S: 4024, M: 4025, L: 4026, XL: 4027, XXL: 4028 }
      }
    },
    gelato: {
      // Gelato UID encodes size directly — replace gsi_m with gsi_s, gsi_l, gsi_xl etc.
      uid_template: 'apparel_product_gca_t-shirt_gsc_crewneck_gcu_unisex_gqa_130_gsi_{size}_gco_{color}_gpr_4-4',
      size_map: { XS: 'xs', S: 's', M: 'm', L: 'l', XL: 'xl', XXL: '2xl' },
      color_map: { '#000000': 'black', '#ffffff': 'white', '#f0f0f0': 'heather-gray' }
    }
  },

  // ── SWEATSHIRT (400 GSM) ────────────────────────────────────────
  sweatshirt: {
    dimona: {
      product_id: 'DIMONA_SWEAT_PRODUCT_ID',
      variants: {
        black: { XS: 'DIMONA_VAR_SWEAT_BLACK_XS', S: 'DIMONA_VAR_SWEAT_BLACK_S', M: 'DIMONA_VAR_SWEAT_BLACK_M', L: 'DIMONA_VAR_SWEAT_BLACK_L', XL: 'DIMONA_VAR_SWEAT_BLACK_XL', XXL: 'DIMONA_VAR_SWEAT_BLACK_XXL' },
        white: { XS: 'DIMONA_VAR_SWEAT_WHITE_XS', S: 'DIMONA_VAR_SWEAT_WHITE_S', M: 'DIMONA_VAR_SWEAT_WHITE_M', L: 'DIMONA_VAR_SWEAT_WHITE_L', XL: 'DIMONA_VAR_SWEAT_WHITE_XL', XXL: 'DIMONA_VAR_SWEAT_WHITE_XXL' },
        gray:  { XS: 'DIMONA_VAR_SWEAT_GRAY_XS',  S: 'DIMONA_VAR_SWEAT_GRAY_S',  M: 'DIMONA_VAR_SWEAT_GRAY_M',  L: 'DIMONA_VAR_SWEAT_GRAY_L',  XL: 'DIMONA_VAR_SWEAT_GRAY_XL',  XXL: 'DIMONA_VAR_SWEAT_GRAY_XXL' }
      }
    },
    printful: {
      product_id: 382, // Gildan 18000 Heavy Blend Crewneck Sweatshirt
      variants: {
        black: { XS: 9400, S: 9401, M: 9402, L: 9403, XL: 9404, XXL: 9405 },
        white: { XS: 9406, S: 9407, M: 9408, L: 9409, XL: 9410, XXL: 9411 },
        gray:  { XS: 9412, S: 9413, M: 9414, L: 9415, XL: 9416, XXL: 9417 }
      }
    }
  },

  // ── HOODIE (400 GSM) ────────────────────────────────────────────
  hoodie: {
    dimona: {
      product_id: 'DIMONA_HOODIE_PRODUCT_ID',
      variants: {
        black: { XS: 'DIMONA_VAR_HOODIE_BLACK_XS', S: 'DIMONA_VAR_HOODIE_BLACK_S', M: 'DIMONA_VAR_HOODIE_BLACK_M', L: 'DIMONA_VAR_HOODIE_BLACK_L', XL: 'DIMONA_VAR_HOODIE_BLACK_XL', XXL: 'DIMONA_VAR_HOODIE_BLACK_XXL' },
        white: { XS: 'DIMONA_VAR_HOODIE_WHITE_XS', S: 'DIMONA_VAR_HOODIE_WHITE_S', M: 'DIMONA_VAR_HOODIE_WHITE_M', L: 'DIMONA_VAR_HOODIE_WHITE_L', XL: 'DIMONA_VAR_HOODIE_WHITE_XL', XXL: 'DIMONA_VAR_HOODIE_WHITE_XXL' },
        gray:  { XS: 'DIMONA_VAR_HOODIE_GRAY_XS',  S: 'DIMONA_VAR_HOODIE_GRAY_S',  M: 'DIMONA_VAR_HOODIE_GRAY_M',  L: 'DIMONA_VAR_HOODIE_GRAY_L',  XL: 'DIMONA_VAR_HOODIE_GRAY_XL',  XXL: 'DIMONA_VAR_HOODIE_GRAY_XXL' }
      }
    },
    printful: {
      product_id: 146, // Gildan 18500 Heavy Blend Hooded Sweatshirt
      variants: {
        black: { XS: 5300, S: 5301, M: 5302, L: 5303, XL: 5304, XXL: 5305 },
        white: { XS: 5306, S: 5307, M: 5308, L: 5309, XL: 5310, XXL: 5311 },
        gray:  { XS: 5312, S: 5313, M: 5314, L: 5315, XL: 5316, XXL: 5317 }
      }
    }
  },

  // ── KIDS T-SHIRT ────────────────────────────────────────────────
  kids: {
    dimona: {
      product_id: 'DIMONA_KIDS_PRODUCT_ID',
      variants: {
        black: { '2': 'DIMONA_KIDS_BLACK_2', '4': 'DIMONA_KIDS_BLACK_4', '6': 'DIMONA_KIDS_BLACK_6', '8': 'DIMONA_KIDS_BLACK_8', '10': 'DIMONA_KIDS_BLACK_10', '12': 'DIMONA_KIDS_BLACK_12' },
        white: { '2': 'DIMONA_KIDS_WHITE_2', '4': 'DIMONA_KIDS_WHITE_4', '6': 'DIMONA_KIDS_WHITE_6', '8': 'DIMONA_KIDS_WHITE_8', '10': 'DIMONA_KIDS_WHITE_10', '12': 'DIMONA_KIDS_WHITE_12' },
        gray:  { '2': 'DIMONA_KIDS_GRAY_2',  '4': 'DIMONA_KIDS_GRAY_4',  '6': 'DIMONA_KIDS_GRAY_6',  '8': 'DIMONA_KIDS_GRAY_8',  '10': 'DIMONA_KIDS_GRAY_10',  '12': 'DIMONA_KIDS_GRAY_12' }
      }
    },
    printful: {
      product_id: 200, // Bella+Canvas 3001Y Youth Short Sleeve Tee
      variants: {
        black: { '2': 7100, '4': 7101, '6': 7102, '8': 7103, '10': 7104, '12': 7105 },
        white: { '2': 7106, '4': 7107, '6': 7108, '8': 7109, '10': 7110, '12': 7111 },
        gray:  { '2': 7112, '4': 7113, '6': 7114, '8': 7115, '10': 7116, '12': 7117 }
      }
    }
  }
};

/**
 * Resolve color hex → color key
 */
function hexToColorKey(hex) {
  if (hex === '#000000') return 'black';
  if (hex === '#ffffff') return 'white';
  return 'gray';
}

/**
 * Get Dimona variant_id for an order item
 */
function getDimonaVariant(type, colorHex, size) {
  const colorKey = hexToColorKey(colorHex);
  return SKU_MAP[type]?.dimona?.variants?.[colorKey]?.[size] || null;
}

/**
 * Get Dimona product_id for a garment type
 */
function getDimonaProductId(type) {
  return SKU_MAP[type]?.dimona?.product_id || null;
}

/**
 * Get Printful variant_id for an order item
 */
function getPrintfulVariant(type, colorHex, size) {
  const colorKey = hexToColorKey(colorHex);
  return SKU_MAP[type]?.printful?.variants?.[colorKey]?.[size] || null;
}

/**
 * Get Gelato productUid for an order item
 */
function getGelatoUid(type, colorHex, size) {
  const gelatoConf = SKU_MAP[type]?.gelato;
  if (!gelatoConf) return null;
  const sizeKey  = gelatoConf.size_map[size]  || 'm';
  const colorKey = gelatoConf.color_map[colorHex] || 'black';
  return gelatoConf.uid_template
    .replace('{size}', sizeKey)
    .replace('{color}', colorKey);
}

module.exports = { SKU_MAP, getDimonaVariant, getDimonaProductId, getPrintfulVariant, getGelatoUid, hexToColorKey };
