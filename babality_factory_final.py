import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

def create_babality_scorpion_style(input_path, output_path, character_name):
    # 1. Cargar imagen y recorte
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
    
    # 3. Capa de Texto (Sin inclinación excesiva, solo un toque sutil como la original)
    draw = ImageDraw.Draw(canvas)
    
    # Colores vibrantes exactos
    colors = ["#f52a5f", "#ffc800", "#4fb85e", "#ff8a00", "#00adef", "#ff4e00", "#8cc63f", "#9d29b2"]
    letters = "BABALITI"
    
    # Bloques más grandes y compactos
    block_size = 170
    spacing = 8
    total_w = len(letters) * (block_size + spacing) - spacing
    start_x = 1024 - total_w // 2
    y_pos_blocks = 380
    
    for i, char in enumerate(letters):
        x = start_x + i * (block_size + spacing)
        # Bloque con borde muy grueso (estilo sticker)
        draw.rectangle([x, y_pos_blocks, x + block_size, y_pos_blocks + block_size], fill=colors[i], outline="black", width=12)
        # Letra GIGANTE (llena el bloque) con outline negro pesado
        # Usamos un tamaño que casi toque los bordes (140)
        draw.text((x + 35, y_pos_blocks + 5), char, fill="white", stroke_width=12, stroke_fill="black", font_size=150)

    # Texto de victoria "CHARACTER WINS"
    # Usamos una tipografía muy pesada (Impact-style)
    wins_text = f"{character_name.upper()} WINS"
    # Centrado arriba de los bloques
    draw.text((1024 - 450, 220), wins_text, fill="white", stroke_width=12, stroke_fill="black", font_size=160)

    canvas.save(output_path, "PNG")
    print(f"Scorpion-cloned Babality graphic created for {character_name}")

if __name__ == "__main__":
    create_babality_scorpion_style(sys.argv[1], sys.argv[2], sys.argv[3])
