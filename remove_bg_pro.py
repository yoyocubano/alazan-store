import sys
from PIL import Image, ImageOps, ImageFilter

def remove_bg_pro(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # 1. Crear máscara de luminancia inteligente
    gray = ImageOps.grayscale(img)
    
    # Detectar fondo (esquinas)
    corners = [img.getpixel((0,0)), img.getpixel((img.width-1, 0)), 
               img.getpixel((0, img.height-1)), img.getpixel((img.width-1, img.height-1))]
    avg_brightness = sum(sum(c[:3])/3 for c in corners) / 4
    
    if avg_brightness < 100:
        # Fondo oscuro (negro)
        mask = gray.point(lambda p: 255 if p > 20 else 0).convert("L")
    else:
        # Fondo claro (blanco/gris)
        inv = ImageOps.invert(gray)
        mask = inv.point(lambda p: 255 if p > 30 else 0).convert("L")
    
    # 2. Suavizar bordes de la máscara para evitar "dientes"
    mask = mask.filter(ImageFilter.GaussianBlur(radius=1))
    
    img.putalpha(mask)
    img.save(output_path, "PNG")
    print(f"Pro BG removal saved to {output_path}")

if __name__ == "__main__":
    remove_bg_pro(sys.argv[1], sys.argv[2])
