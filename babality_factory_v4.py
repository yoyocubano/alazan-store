import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

def create_babality_pixel_perfect(input_path, output_path, character_name):
    # 1. Cargar y Recortar
    img = Image.open(input_path).convert("RGBA")
    gray = ImageOps.grayscale(img)
    mask = gray.point(lambda p: 255 if p > 15 else 0).convert("L")
    img.putalpha(mask)
    
    # 2. Lienzo HD (2048x2048)
    canvas = Image.new("RGBA", (2048, 2048), (0,0,0,0))
    
    # Personaje (Escala y posición optimizada)
    char_w, char_h = img.size
    ratio = 1350 / char_h
    img = img.resize((int(char_w * ratio), 1350), Image.LANCZOS)
    canvas.paste(img, (1024 - img.width//2, 650), img)
    
    draw = ImageDraw.Draw(canvas)
    
    # 3. DISEÑO DE BLOQUES COMPACTOS
    colors = ["#D158A1", "#F7941E", "#72C0A5", "#FFD200", "#4EB895", "#F7941E", "#E62129", "#BA559F"]
    letters = "BABALITI"
    
    block_size = 190 # Un poco más grandes
    border_thick = 26
    spacing = 4 # CASI PEGADOS como en la referencia
    total_w = len(letters) * (block_size + spacing) - spacing
    start_x = 1024 - total_w // 2
    y_pos = 420
    
    for i, char in enumerate(letters):
        x = start_x + i * (block_size + spacing)
        y = y_pos
        
        # Bloque redondeado (Marco)
        draw.rounded_rectangle([x, y, x + block_size, y + block_size], radius=40, fill=colors[i])
        # Centro Blanco Hueso
        draw.rounded_rectangle([x+border_thick, y+border_thick, x+block_size-border_thick, y+block_size-border_thick], 
                               radius=25, fill="#F7F7F7")
        # Letra Slab Serif Ultra-Bold (Centrada quirúrgicamente)
        # Usamos stroke para que sea masiva
        draw.text((x + 44, y + 15), char, fill=colors[i], stroke_width=6, stroke_fill=colors[i], font_size=160)

    # 4. TEXTO DE VICTORIA (Solución al recorte + Itálico exacto)
    # Usamos un lienzo mucho más ancho para la transformación
    txt_canvas = Image.new("RGBA", (2048, 400), (0,0,0,0))
    txt_draw = ImageDraw.Draw(txt_canvas)
    
    wins_text = f"{character_name.upper()} WINS"
    # Dibujamos con margen para evitar recortes al inclinar
    txt_draw.text((1024 - 450, 150), wins_text, fill="white", stroke_width=16, stroke_fill="#1a1a1a", font_size=155)
    
    # Inclinación itálica (Shear) moderada para que no recorte
    txt_canvas = txt_canvas.transform(txt_canvas.size, Image.AFFINE, (1, -0.18, 0, 0, 1, 0))
    
    # Pegamos con ajuste de posición
    canvas.paste(txt_canvas, (0, 100), txt_canvas)

    canvas.save(output_path, "PNG")
    print(f"Pixel Perfect Babality created for {character_name}")

if __name__ == "__main__":
    create_babality_pixel_perfect(sys.argv[1], sys.argv[2], sys.argv[3])
