import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

def create_babality_luxury_blocks(input_path, output_path, character_name):
    # 1. Cargar y Recortar personaje
    img = Image.open(input_path).convert("RGBA")
    gray = ImageOps.grayscale(img)
    mask = gray.point(lambda p: 255 if p > 15 else 0).convert("L")
    img.putalpha(mask)
    
    # 2. Lienzo HD (2048x2048)
    canvas = Image.new("RGBA", (2048, 2048), (0,0,0,0))
    
    # Escalar y posicionar personaje (abajo)
    char_w, char_h = img.size
    ratio = 1300 / char_h
    img = img.resize((int(char_w * ratio), 1300), Image.LANCZOS)
    canvas.paste(img, (1024 - img.width//2, 680), img)
    
    # 3. Dibujar Bloques estilo Referencia
    draw = ImageDraw.Draw(canvas)
    
    # Colores vibrantes para los marcos
    colors = ["#D00000", "#0077B6", "#38B000", "#FF8800", "#023E8A", "#E85D04", "#2D6A4F", "#7209B7"]
    letters = "BABALITI"
    
    block_size = 185
    border_thick = 28
    inner_shadow = 4 # Para el efecto de profundidad
    spacing = 12
    total_w = len(letters) * (block_size + spacing) - spacing
    start_x = 1024 - total_w // 2
    y_pos_blocks = 420
    
    for i, char in enumerate(letters):
        x = start_x + i * (block_size + spacing)
        y = y_pos_blocks
        
        # A. Marco exterior (Color principal)
        draw.rectangle([x, y, x + block_size, y + block_size], fill=colors[i])
        
        # B. Efecto de profundidad (Sombra interna)
        draw.rectangle([x + border_thick - inner_shadow, y + border_thick - inner_shadow, 
                        x + block_size - border_thick + inner_shadow, y + block_size - border_thick + inner_shadow], 
                       fill="#00000033")
        
        # C. Cara interna (Blanco)
        draw.rectangle([x + border_thick, y + border_thick, 
                        x + block_size - border_thick, y + block_size - border_thick], 
                       fill="white")
        
        # D. Letra Serif (Mismo color del marco pero intenso)
        # Posicionamiento manual para centrado visual
        draw.text((x + 52, y + 22), char, fill=colors[i], font_size=135)

    # 4. Texto "WINS" (Estilo Mortal Kombat Victory)
    wins_text = f"{character_name.upper()} WINS"
    draw.text((1024 - 450, 250), wins_text, fill="white", stroke_width=15, stroke_fill="black", font_size=165)

    canvas.save(output_path, "PNG")
    print(f"Luxury Wood-block created for {character_name}")

if __name__ == "__main__":
    create_babality_luxury_blocks(sys.argv[1], sys.argv[2], sys.argv[3])
