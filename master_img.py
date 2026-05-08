import sys
from PIL import Image, ImageOps, ImageFilter

def master_sweatshirt(input_path, output_path):
    orig = Image.open(input_path).convert("RGBA")
    
    # 1. Crear máscara de recorte PERFECTA sobre el original (blanco puro)
    gray_orig = ImageOps.grayscale(orig)
    inv_orig = ImageOps.invert(gray_orig)
    # Solo lo que NO es blanco puro es sudadera
    mask = inv_orig.point(lambda p: 255 if p > 5 else 0).convert("L")
    
    # 2. Masterizar la imagen (suavizar textura)
    img = orig.convert("RGB")
    # Blur leve para matar el granulado
    img = img.filter(ImageFilter.SMOOTH_MORE)
    img = img.filter(ImageFilter.SMOOTH)
    
    # 3. Clamping de blancos internos
    # Esto evita el "ruido" al oscurecer con CSS
    r, g, b = img.split()
    r = r.point(lambda p: min(p, 230))
    g = g.point(lambda p: min(p, 230))
    b = b.point(lambda p: min(p, 230))
    img = Image.merge("RGB", (r, g, b))
    
    # 4. Aplicar la máscara del original a la imagen suavizada
    img.putalpha(mask)
    img.save(output_path, "PNG")
    print(f"Mastered sharp image saved to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python master_img.py <input> <output>")
    else:
        master_sweatshirt(sys.argv[1], sys.argv[2])
