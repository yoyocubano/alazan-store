import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

def create_babality_wood_blocks(input_path, output_path, character_name):
    # 1. Cargar y Recortar
    img = Image.open(input_path).convert("RGBA")
    gray = ImageOps.grayscale(img)
    mask = gray.point(lambda p: 255 if p > 15 else 0).convert("L")
    img.putalpha(mask)
    
    # 2. Lienzo HD
    canvas = Image.new("RGBA", (2048, 2048), (0,0,0,0))
    
    # Escalar personaje
    char_w, char_h = img.size
    ratio = 1300 / char_h
    img = img.resize((int(char_w * ratio), 1300), Image.LANCZOS)
    canvas.paste(img, (1024 - img.width//2, 650), img)
    
    # 3. Dibujar Diseño de Bloques de Madera (Referencia Usuario)
    draw = ImageDraw.Draw(canvas)
    
    # Paleta de colores para los marcos y letras
    colors = ["#e63946", "#457b9d", "#2a9d8f", "#f4a261", "#1d3557", "#e76f51", "#264653", "#6a4c93"]
    letters = "BABALITI"
    
    block_size = 180
    border_width = 25
    spacing = 10
    total_w = len(letters) * (block_size + spacing) - spacing
    start_x = 1024 - total_w // 2
    y_pos_blocks = 400
    
    for i, char in enumerate(letters):
        x = start_x + i * (block_size + spacing)
        
        # A. Dibujar el Marco de Color (El bloque base)
        draw.rectangle([x, y_pos_blocks, x + block_size, y_pos_blocks + block_size], fill=colors[i])
        
        # B. Dibujar el Fondo Blanco (La cara interna)
        # Dejamos un margen para el marco
        inner_margin = border_width
        draw.rectangle([x + inner_margin, y_pos_blocks + inner_margin, 
                        x + block_size - inner_margin, y_pos_blocks + block_size - inner_margin], 
                       fill="white")
        
        # C. Dibujar la Letra (Mismo color que el marco, con Serif)
        # Usamos stroke_width bajo porque el Serif ya le da cuerpo
        draw.text((x + 45, y_pos_blocks + 10), char, fill=colors[i], font_size=140)

    # 4. Texto de Victoria "WINS" (Estilo Clásico)
    wins_text = f"{character_name.upper()} WINS"
    draw.text((1024 - 450, 240), wins_text, fill="white", stroke_width=12, stroke_fill="black", font_size=160)

    canvas.save(output_path, "PNG")
    print(f"Wood-block Babality created for {character_name}")

if __name__ == "__main__":
    create_babality_wood_blocks(sys.argv[1], sys.argv[2], sys.argv[3])
