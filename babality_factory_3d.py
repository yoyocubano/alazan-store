import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps, ImageColor

def draw_3d_cube(draw, x, y, size, color, letter):
    # Definimos los colores para las caras (Base, Top y Side para profundidad)
    base_color = ImageColor.getrgb(color)
    top_color = tuple(int(c * 1.2) for c in base_color) # Más claro
    side_color = tuple(int(c * 0.8) for c in base_color) # Más oscuro
    
    # 1. Cara Lateral (Derecha)
    side_depth = 30
    draw.polygon([
        (x + size, y), 
        (x + size + side_depth, y - side_depth), 
        (x + size + side_depth, y + size - side_depth), 
        (x + size, y + size)
    ], fill=side_color, outline="black", width=2)
    
    # 2. Cara Superior
    draw.polygon([
        (x, y), 
        (x + side_depth, y - side_depth), 
        (x + size + side_depth, y - side_depth), 
        (x + size, y)
    ], fill=top_color, outline="black", width=2)
    
    # 3. Cara Frontal (Principal)
    draw.rectangle([x, y, x + size, y + size], fill=base_color, outline="black", width=2)
    
    # 4. Inserción Blanca (Cara hundida)
    margin = 25
    draw.rectangle([x + margin, y + margin, x + size - margin, y + size - margin], fill="white")
    
    # 5. Letra con Estilo Bodoni/Baskerville (Alto contraste)
    # Sombra de la letra
    draw.text((x + 55, y + 15), letter, fill="#00000022", font_size=155)
    # Letra principal (Mismo color que el marco)
    draw.text((x + 50, y + 10), letter, fill=base_color, font_size=155)

def create_babality_3d_masterpiece(input_path, output_path, character_name):
    img = Image.open(input_path).convert("RGBA")
    gray = ImageOps.grayscale(img)
    mask = gray.point(lambda p: 255 if p > 15 else 0).convert("L")
    img.putalpha(mask)
    
    canvas = Image.new("RGBA", (2048, 2048), (0,0,0,0))
    
    # Personaje
    char_w, char_h = img.size
    ratio = 1250 / char_h
    img = img.resize((int(char_w * ratio), 1250), Image.LANCZOS)
    canvas.paste(img, (1024 - img.width//2, 720), img)
    
    draw = ImageDraw.Draw(canvas)
    
    # Colores exactos de bloques de juguete
    block_colors = ["#E63946", "#1D3557", "#2A9D8F", "#F4A261", "#457B9D", "#E76F51", "#264653", "#6A4C93"]
    letters = "BABALITI"
    
    block_size = 180
    spacing = 15
    total_w = len(letters) * (block_size + 30) - 30 # +30 por la profundidad lateral
    start_x = 1024 - total_w // 2
    y_pos = 450
    
    for i, char in enumerate(letters):
        draw_3d_cube(draw, start_x + i * (block_size + 35), y_pos, block_size, block_colors[i], char)

    # Texto de victoria corregido (Bold & Compact)
    wins_text = f"{character_name.upper()} WINS"
    draw.text((1024 - 420, 260), wins_text, fill="white", stroke_width=22, stroke_fill="black", font_size=150)

    canvas.save(output_path, "PNG")
    print(f"3D Masterpiece Babality created for {character_name}")

if __name__ == "__main__":
    create_babality_3d_masterpiece(sys.argv[1], sys.argv[2], sys.argv[3])
