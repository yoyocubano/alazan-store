import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

def create_babality_true_reference(input_path, output_path, character_name):
    # 1. Cargar y Recortar
    img = Image.open(input_path).convert("RGBA")
    gray = ImageOps.grayscale(img)
    mask = gray.point(lambda p: 255 if p > 15 else 0).convert("L")
    img.putalpha(mask)
    
    # 2. Lienzo HD
    canvas = Image.new("RGBA", (2048, 2048), (0,0,0,0))
    
    # Personaje
    char_w, char_h = img.size
    ratio = 1300 / char_h
    img = img.resize((int(char_w * ratio), 1300), Image.LANCZOS)
    canvas.paste(img, (1024 - img.width//2, 680), img)
    
    # 3. Dibujar Diseño de Bloques de Referencia (PNGTree Style)
    draw = ImageDraw.Draw(canvas)
    
    # Paleta de colores vibrantes y variados para CADA bloque
    # Colores: Rojo, Azul, Verde, Naranja, Cyan, Púrpura, Lima, Rosa
    block_colors = ["#FF0000", "#0055FF", "#00B000", "#FF8800", "#00D4FF", "#9D00FF", "#88FF00", "#FF00AA"]
    letters = "BABALITI"
    
    block_size = 185
    border_width = 25
    spacing = 10
    total_w = len(letters) * (block_size + spacing) - spacing
    start_x = 1024 - total_w // 2
    y_pos_blocks = 420
    
    for i, char in enumerate(letters):
        x = start_x + i * (block_size + spacing)
        y = y_pos_blocks
        
        # A. Marco Exterior (Color)
        draw.rectangle([x, y, x + block_size, y + block_size], fill=block_colors[i])
        
        # B. Cara Interna (Blanca) con bisel sutil
        margin = border_width
        draw.rectangle([x + margin, y + margin, x + block_size - margin, y + block_size - margin], fill="white")
        
        # C. SOMBRA DE LA LETRA (Para dar efecto 3D)
        # Dibujamos la misma letra un poco desplazada en gris muy claro
        shadow_offset = 6
        draw.text((x + 46 + shadow_offset, y + 15 + shadow_offset), char, fill="#00000033", font_size=155)
        
        # D. LETRA PRINCIPAL (Color del marco, Fuente Serif clásica)
        # Usamos una posición centrada
        draw.text((x + 46, y + 15), char, fill=block_colors[i], font_size=155)

    # 4. Texto de Victoria "WINS" (Compacto y Bold)
    wins_text = f"{character_name.upper()} WINS"
    draw.text((1024 - 420, 270), wins_text, fill="white", stroke_width=22, stroke_fill="black", font_size=145)

    canvas.save(output_path, "PNG")
    print(f"True Reference Babality created for {character_name}")

if __name__ == "__main__":
    create_babality_true_reference(sys.argv[1], sys.argv[2], sys.argv[3])
