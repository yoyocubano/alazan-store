import sys
from PIL import Image, ImageOps, ImageFilter

def master_img_pro(input_path, output_path):
    orig = Image.open(input_path).convert("RGBA")
    
    # 1. Máscara de recorte con umbral más alto y suavizado de bordes
    gray_orig = ImageOps.grayscale(orig)
    inv_orig = ImageOps.invert(gray_orig)
    # Subimos el umbral a 30 para ignorar el ruido del fondo "blanco"
    mask = inv_orig.point(lambda p: 255 if p > 30 else 0).convert("L")
    # Suavizamos los bordes de la máscara para evitar recortes dentados
    mask = mask.filter(ImageFilter.GaussianBlur(radius=1))
    
    # 2. Masterizar la imagen (suavizar textura)
    img = orig.convert("RGB")
    img = img.filter(ImageFilter.SMOOTH_MORE)
    
    # 3. Clamping de blancos internos
    r, g, b = img.split()
    r = r.point(lambda p: min(p, 230))
    g = g.point(lambda p: min(p, 230))
    b = b.point(lambda p: min(p, 230))
    img = Image.merge("RGB", (r, g, b))
    
    # 4. Aplicar máscara
    img.putalpha(mask)
    img.save(output_path, "PNG")
    print(f"Pro Mastered image saved to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python master_img_pro.py <input> <output>")
    else:
        master_img_pro(sys.argv[1], sys.argv[2])
