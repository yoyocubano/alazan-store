import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

def create_babality_perfect_replica(input_path, output_path, character_name):
    # 1. Cargar y Recortar
    img = Image.open(input_path).convert("RGBA")
    gray = ImageOps.grayscale(img)
    mask = gray.point(lambda p: 255 if p > 15 else 0).convert("L")
    img.putalpha(mask)
    
    # 2. Lienzo HD
    canvas = Image.new("RGBA", (2048, 2048), (0,0,0,0))
    
    # Personaje
    char_w, char_h = img.size
    ratio = 1350 / char_h
    img = img.resize((int(char_w * ratio), 1350), Image.LANCZOS)
    canvas.paste(img, (1024 - img.width//2, 650), img)
    
    # 3. Dibujar Bloques (Estilo Referencia)
    draw = ImageDraw.Draw(canvas)
    
    # Paleta de colores exacta: Rosa, Naranja, Verde Agua, Amarillo, Turquesa, Naranja, Rojo, Morado
    colors = ["#D158A1", "#F7941E", "#72C0A5", "#FFD200", "#4EB895", "#F7941E", "#E62129", "#BA559F"]
    letters = "BABALITI"
    
    block_size = 185
    border_thick = 26
    spacing = 10
    total_w = len(letters) * (block_size + spacing) - spacing
    start_x = 1024 - total_w // 2
    y_pos = 410
    
    for i, char in enumerate(letters):
        x = start_x + i * (block_size + spacing)
        y = y_pos
        
        # Bloque redondeado de color
        draw.rounded_rectangle([x, y, x + block_size, y + block_size], radius=45, fill=colors[i])
        
        # Centro blanco hueso
        margin = border_thick
        draw.rounded_rectangle([x + margin, y + margin, x + block_size - margin, y + block_size - margin], 
                               radius=30, fill="#F9F9F9")
        
        # Letra Slab Serif (Gruesa y del mismo color del marco)
        # Usamos un stroke ligero para engrosar la fuente
        draw.text((x + 40, y + 15), char, fill=colors[i], stroke_width=4, stroke_fill=colors[i], font_size=155)

    # 4. TEXTO DE VICTORIA (Itálico y Compacto con Transformación)
    # Creamos una capa aparte para el texto para poder inclinarlo
    txt_canvas = Image.new("RGBA", (2048, 400), (0,0,0,0))
    txt_draw = ImageDraw.Draw(txt_canvas)
    
    wins_text = f"{character_name.upper()} WINS"
    # Dibujamos en el centro de la capa de texto
    txt_draw.text((1024 - 400, 100), wins_text, fill="white", stroke_width=15, stroke_fill="#222222", font_size=150)
    
    # Aplicamos inclinación (Shear) de -0.15 para el efecto Itálico real
    txt_canvas = txt_canvas.transform(txt_canvas.size, Image.AFFINE, (1, -0.15, 0, 0, 1, 0))
    
    # Pegamos la capa de texto en el canvas principal
    canvas.paste(txt_canvas, (0, 140), txt_canvas)

    canvas.save(output_path, "PNG")
    print(f"Perfect Replica Babality created for {character_name}")

if __name__ == "__main__":
    create_babality_perfect_replica(sys.argv[1], sys.argv[2], sys.argv[3])
