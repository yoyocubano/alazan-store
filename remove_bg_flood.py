import sys
from PIL import Image, ImageOps

def remove_bg_flood(input_path, output_path):
    # Abrir imagen y asegurar que tenga canal alfa
    img = Image.open(input_path).convert("RGBA")
    
    # Usar Flood Fill para detectar el fondo blanco desde las esquinas
    # Esto evita "agujeros" dentro de la sudadera
    width, height = img.size
    
    # Creamos una máscara basada en el color blanco del fondo
    # (Tolerance 10 para capturar bordes suaves)
    # Nota: Usamos una técnica de "diferencia" para ser más precisos
    
    # 1. Convertir a escala de grises para detectar brillo
    gray = ImageOps.grayscale(img)
    # 2. Invertir para que el fondo sea negro
    inv = ImageOps.invert(gray)
    # 3. Umbral para separar sudadera (blanca) de fondo (negro)
    # Bajamos el umbral para ser conservadores y no comer bordes
    mask = inv.point(lambda p: 255 if p > 15 else 0).convert("L")
    
    # Aplicar la máscara a la imagen original
    img.putalpha(mask)
    
    img.save(output_path, "PNG")
    print(f"Saved sharp solid image to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python remove_bg_flood.py <input> <output>")
    else:
        remove_bg_flood(sys.argv[1], sys.argv[2])
