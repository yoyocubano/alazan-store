import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

def create_babality_perfect_clone(input_path, output_path, character_name):
    # 1. Cargar y Recortar
    img = Image.open(input_path).convert("RGBA")
    gray = ImageOps.grayscale(img)
    mask = gray.point(lambda p: 255 if p > 15 else 0).convert("L")
    img.putalpha(mask)
    
    # 2. Lienzo HD (2048x2048)
    canvas = Image.new("RGBA", (2048, 2048), (0,0,0,0))
    
    # Escalar personaje
    char_w, char_h = img.size
    ratio = 1300 / char_h
    img = img.resize((int(char_w * ratio), 1300), Image.LANCZOS)
    canvas.paste(img, (1024 - img.width//2, 650), img)
    
    # 3. Dibujar Diseño de Marca
    draw = ImageDraw.Draw(canvas)
    
    # Colores de los bloques (Cajas)
    block_colors = ["#f52a5f", "#ffc800", "#4fb85e", "#ff8a00", "#00adef", "#ff4e00", "#8cc63f", "#9d29b2"]
    
    # COLORES DE LAS LETRAS (Para que sean distintas entre ellas como pide el usuario)
    # Seguiremos un patrón de colores primarios juguetones
    letter_colors = ["#ffffff", "#2196f3", "#ffffff", "#f44336", "#ffffff", "#ffeb3b", "#ffffff", "#4caf50"]
    
    letters = "BABALITI"
    
    # Configuración de Bloques
    block_size = 175
    spacing = 5
    total_w = len(letters) * (block_size + spacing) - spacing
    start_x = 1024 - total_w // 2
    y_pos_blocks = 400
    
    for i, char in enumerate(letters):
        x = start_x + i * (block_size + spacing)
        # Dibujar Bloque con borde grueso
        draw.rectangle([x, y_pos_blocks, x + block_size, y_pos_blocks + block_size], fill=block_colors[i], outline="black", width=15)
        
        # Dibujar Letra (Fuente Redondeada Simulada con grosor extremo)
        # Nota: Usamos stroke_width masivo para dar ese look "redondeado" y 3D
        draw.text((x + 35, y_pos_blocks - 5), char, fill=letter_colors[i], stroke_width=18, stroke_fill="black", font_size=165)

    # 4. Texto de Victoria "WINS"
    # Estilo Impact / Condensed ultra-pesado
    wins_text = f"{character_name.upper()} WINS"
    draw.text((1024 - 450, 240), wins_text, fill="white", stroke_width=15, stroke_fill="black", font_size=160)

    canvas.save(output_path, "PNG")
    print(f"Perfect Babality clone created for {character_name}")

if __name__ == "__main__":
    create_babality_perfect_clone(sys.argv[1], sys.argv[2], sys.argv[3])
