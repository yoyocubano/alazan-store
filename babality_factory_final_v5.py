import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

def create_babality_final_exact(input_path, output_path, character_name):
    # 1. Cargar y Recortar
    img = Image.open(input_path).convert("RGBA")
    gray = ImageOps.grayscale(img)
    mask = gray.point(lambda p: 255 if p > 15 else 0).convert("L")
    img.putalpha(mask)
    
    # 2. Lienzo HD
    canvas = Image.new("RGBA", (2048, 2048), (0,0,0,0))
    
    # Personaje (Posición y escala fiel al original)
    char_w, char_h = img.size
    ratio = 1350 / char_h
    img = img.resize((int(char_w * ratio), 1350), Image.LANCZOS)
    canvas.paste(img, (1024 - img.width//2, 650), img)
    
    draw = ImageDraw.Draw(canvas)
    
    # 3. BLOQUES BABALITI (Réplica quirúrgica)
    # Colores exactos: Magenta-Pink, Orange, Teal, Yellow, Green, Orange, Red, Purple
    colors = ["#E83E8C", "#FD7E14", "#20C997", "#FFC107", "#28A745", "#FD7E14", "#DC3545", "#6F42C1"]
    letters = "BABALITI"
    
    block_size = 195 # Más grandes
    border_thick = 32 # Borde MUCHO más grueso
    spacing = 6
    total_w = len(letters) * (block_size + spacing) - spacing
    start_x = 1024 - total_w // 2
    y_pos = 410
    
    for i, char in enumerate(letters):
        x = start_x + i * (block_size + spacing)
        y = y_pos
        
        # Bloque de color con esquinas muy suaves
        draw.rounded_rectangle([x, y, x + block_size, y + block_size], radius=50, fill=colors[i])
        
        # El área blanca es más pequeña (Marco más grueso)
        inner_m = border_thick
        draw.rounded_rectangle([x+inner_m, y+inner_m, x+block_size-inner_m, y+block_size-inner_m], 
                               radius=30, fill="#FFFFFF")
        
        # Letra Slab Serif con extra de grosor (Stroke) para que llene el espacio
        # Posicionamiento centrado absoluto
        draw.text((x + 40, y + 15), char, fill=colors[i], stroke_width=8, stroke_fill=colors[i], font_size=165)

    # 4. NOMBRE WINS (Ultra-Condensado e Itálico)
    txt_canvas = Image.new("RGBA", (2048, 500), (0,0,0,0))
    txt_draw = ImageDraw.Draw(txt_canvas)
    
    wins_text = f"{character_name.upper()} WINS"
    # Dibujamos con un borde negro muy contundente
    txt_draw.text((1024 - 480, 150), wins_text, fill="white", stroke_width=24, stroke_fill="#111111", font_size=160)
    
    # Inclinación itálica exacta
    txt_canvas = txt_canvas.transform(txt_canvas.size, Image.AFFINE, (1, -0.22, 0, 0, 1, 0))
    
    # Pegamos la capa de texto
    canvas.paste(txt_canvas, (0, 80), txt_canvas)

    canvas.save(output_path, "PNG")
    print(f"Final Exact Replica created for {character_name}")

if __name__ == "__main__":
    create_babality_final_exact(sys.argv[1], sys.argv[2], sys.argv[3])
