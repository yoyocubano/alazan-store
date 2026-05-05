import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

def create_babality_graphic_v2(input_path, output_path, character_name):
    # 1. Cargar imagen original
    img = Image.open(input_path).convert("RGBA")
    
    # 2. Recorte Pro (Más conservador para mantener brillos)
    gray = ImageOps.grayscale(img)
    mask = gray.point(lambda p: 255 if p > 15 else 0).convert("L")
    img.putalpha(mask)
    
    # 3. Lienzo HD (2048x2048 para nitidez total)
    canvas = Image.new("RGBA", (2048, 2048), (0,0,0,0))
    
    # Escalar personaje
    char_w, char_h = img.size
    ratio = 1400 / char_h
    img = img.resize((int(char_w * ratio), 1400), Image.LANCZOS)
    
    # Pegar personaje centrado abajo
    canvas.paste(img, (1024 - img.width//2, 550), img)
    
    # 4. Componer Logo BABALITY
    draw = ImageDraw.Draw(canvas)
    colors = ["#f83a6b", "#ffc107", "#4caf50", "#ff9800", "#03a9f4", "#ff5722", "#8bc34a", "#9c27b0"]
    letters = "BABALITI"
    
    block_size = 140
    spacing = 20
    total_w = len(letters) * (block_size + spacing) - spacing
    start_x = 1024 - total_w // 2
    y_pos = 300
    
    for i, char in enumerate(letters):
        x = start_x + i * (block_size + spacing)
        # Bloque con borde
        draw.rectangle([x, y_pos, x + block_size, y_pos + block_size], fill=colors[i % len(colors)], outline="black", width=5)
        # Letra grande (Simulada con rectángulos para que sea "bloque")
        # En un entorno ideal usaríamos una fuente Sans-Serif Bold
        draw.text((x + 35, y_pos + 10), char, fill="white", stroke_width=4, stroke_fill="black", font_size=100)

    # 5. Texto de Victoria "CHARACTER WINS"
    wins_text = f"{character_name.upper()} WINS"
    # Dibujar texto arriba de todo
    draw.text((1024 - 300, 180), wins_text, fill="white", stroke_width=6, stroke_fill="black", font_size=120)

    canvas.save(output_path, "PNG")
    print(f"v2 Babality graphic created for {character_name}")

if __name__ == "__main__":
    create_babality_graphic_v2(sys.argv[1], sys.argv[2], sys.argv[3])
