import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

def create_babality_exact_replica(input_path, output_path, character_name):
    # 1. Cargar y Recortar
    img = Image.open(input_path).convert("RGBA")
    gray = ImageOps.grayscale(img)
    mask = gray.point(lambda p: 255 if p > 15 else 0).convert("L")
    img.putalpha(mask)
    
    # 2. Lienzo HD
    canvas = Image.new("RGBA", (2048, 2048), (0,0,0,0))
    
    # Personaje (Posicionamiento y escala)
    char_w, char_h = img.size
    ratio = 1300 / char_h
    img = img.resize((int(char_w * ratio), 1300), Image.LANCZOS)
    canvas.paste(img, (1024 - img.width//2, 680), img)
    
    draw = ImageDraw.Draw(canvas)
    
    # 3. DISEÑO DE BLOQUES (Fiel a la referencia)
    # Colores exactos del asset: Rosa, Naranja, Verde, Amarillo, Turquesa, Naranja, Rojo, Morado
    colors = ["#D158A1", "#F7941E", "#72C0A5", "#FFD200", "#4EB895", "#F7941E", "#E62129", "#BA559F"]
    letters = "BABALITI"
    
    block_size = 180
    border_thick = 24
    spacing = 8
    total_w = len(letters) * (block_size + spacing) - spacing
    start_x = 1024 - total_w // 2
    y_pos = 420
    
    for i, char in enumerate(letters):
        x = start_x + i * (block_size + spacing)
        y = y_pos
        
        # A. Bloque con Esquinas Redondeadas (Marco de Color)
        # Usamos un radio de redondeo generoso
        draw.rounded_rectangle([x, y, x + block_size, y + block_size], radius=35, fill=colors[i])
        
        # B. Fondo Blanco Interno (También redondeado)
        margin = border_thick
        draw.rounded_rectangle([x + margin, y + margin, x + block_size - margin, y + block_size - margin], 
                               radius=25, fill="#F9F9F9")
        
        # C. Letra Slab Serif (Mismo color que el marco)
        # Ajustamos posición para centrado visual perfecto
        draw.text((x + 42, y + 15), char, fill=colors[i], font_size=150)

    # 4. TEXTO DE VICTORIA (Estilo Impact Italic)
    wins_text = f"{character_name.upper()} WINS"
    # El texto original es itálico y tiene un borde negro fino pero definido
    draw.text((1024 - 400, 260), wins_text, fill="white", stroke_width=12, stroke_fill="#222222", font_size=155)

    canvas.save(output_path, "PNG")
    print(f"Exact Replica Babality created for {character_name}")

if __name__ == "__main__":
    create_babality_exact_replica(sys.argv[1], sys.argv[2], sys.argv[3])
