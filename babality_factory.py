import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

def create_babality_graphic(input_path, output_path, character_name):
    # 1. Recorte Pro
    img = Image.open(input_path).convert("RGBA")
    gray = ImageOps.grayscale(img)
    mask = gray.point(lambda p: 255 if p > 20 else 0).convert("L")
    img.putalpha(mask)
    
    # 2. Crear lienzo para la composición (1024x1024)
    canvas = Image.new("RGBA", (1024, 1024), (0,0,0,0))
    
    # Redimensionar personaje para que quepa abajo
    char_w, char_h = img.size
    ratio = 700 / char_h
    img = img.resize((int(char_w * ratio), 700), Image.LANCZOS)
    
    # Pegar personaje en la parte inferior
    canvas.paste(img, (512 - img.width//2, 300), img)
    
    # 3. Añadir el logo BABALITY (Simulado con bloques de colores)
    draw = ImageDraw.Draw(canvas)
    colors = ["#e91e63", "#ffc107", "#4caf50", "#ff9800", "#03a9f4", "#f44336", "#8bc34a", "#9c27b0"]
    letters = "BABALITI"
    
    block_size = 60
    start_x = 512 - (len(letters) * (block_size + 10)) // 2
    y_pos = 120
    
    for i, char in enumerate(letters):
        x = start_x + i * (block_size + 10)
        # Dibujar bloque
        draw.rectangle([x, y_pos, x + block_size, y_pos + block_size], fill=colors[i % len(colors)])
        # Añadir letra (Simulada si no hay fuente, pero usaremos una básica)
        # Nota: En un entorno real cargaríamos una fuente específica
        draw.text((x + 15, y_pos + 10), char, fill="white", stroke_width=2, stroke_fill="black")

    # 4. Añadir texto "NAME WINS"
    wins_text = f"{character_name.upper()} WINS"
    draw.text((512 - 100, 60), wins_text, fill="white", stroke_width=2, stroke_fill="black")

    canvas.save(output_path, "PNG")
    print(f"Babality graphic created for {character_name}")

if __name__ == "__main__":
    create_babality_graphic(sys.argv[1], sys.argv[2], sys.argv[3])
