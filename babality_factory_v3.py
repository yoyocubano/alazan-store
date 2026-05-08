import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

def create_babality_cloned_style(input_path, output_path, character_name):
    # 1. Cargar imagen y recorte
    img = Image.open(input_path).convert("RGBA")
    gray = ImageOps.grayscale(img)
    mask = gray.point(lambda p: 255 if p > 15 else 0).convert("L")
    img.putalpha(mask)
    
    # 2. Lienzo HD
    canvas = Image.new("RGBA", (2048, 2048), (0,0,0,0))
    
    # Escalar personaje
    char_w, char_h = img.size
    ratio = 1350 / char_h
    img = img.resize((int(char_w * ratio), 1350), Image.LANCZOS)
    canvas.paste(img, (1024 - img.width//2, 600), img)
    
    # 3. Crear capa de texto para aplicar inclinación (Shear)
    text_layer = Image.new("RGBA", (2048, 500), (0,0,0,0))
    draw = ImageDraw.Draw(text_layer)
    
    # Colores exactos de los bloques originales
    colors = ["#f52a5f", "#ffc800", "#4fb85e", "#ff8a00", "#00adef", "#ff4e00", "#8cc63f", "#9d29b2"]
    letters = "BABALITI"
    
    block_size = 155
    spacing = 15
    total_w = len(letters) * (block_size + spacing) - spacing
    start_x = 1024 - total_w // 2
    y_pos_blocks = 250
    
    for i, char in enumerate(letters):
        x = start_x + i * (block_size + spacing)
        # Bloque con borde grueso
        draw.rectangle([x, y_pos_blocks, x + block_size, y_pos_blocks + block_size], fill=colors[i], outline="black", width=8)
        # Letra con borde (Outline)
        # Dibujamos la letra en blanco con stroke negro
        draw.text((x + 38, y_pos_blocks + 12), char, fill="white", stroke_width=8, stroke_fill="black", font_size=115)

    # Texto de victoria inclinado
    wins_text = f"{character_name.upper()} WINS"
    draw.text((1024 - 350, 100), wins_text, fill="white", stroke_width=10, stroke_fill="black", font_size=140)
    
    # 4. Aplicar inclinación (Shear) al texto para que sea idéntico al original
    # (1, -0.1, 0, 0, 1, 0) es una matriz de transformación para inclinar a la derecha
    text_layer = text_layer.transform(text_layer.size, Image.AFFINE, (1, -0.15, 0, 0, 1, 0))
    
    # Pegar texto en el lienzo principal
    canvas.paste(text_layer, (0, 0), text_layer)

    canvas.save(output_path, "PNG")
    print(f"Style-cloned Babality graphic created for {character_name}")

if __name__ == "__main__":
    create_babality_cloned_style(sys.argv[1], sys.argv[2], sys.argv[3])
