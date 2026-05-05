import sys
from PIL import Image, ImageOps

def remove_any_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # Detectamos si el fondo es predominantemente negro o blanco
    # Miramos los píxeles de las esquinas
    corners = [img.getpixel((0,0)), img.getpixel((img.width-1, 0)), 
               img.getpixel((0, img.height-1)), img.getpixel((img.width-1, img.height-1))]
    
    avg_brightness = sum(sum(c[:3])/3 for c in corners) / 4
    
    if avg_brightness < 128:
        # Fondo oscuro
        gray = ImageOps.grayscale(img)
        mask = gray.point(lambda p: 255 if p > 30 else 0).convert("L")
    else:
        # Fondo claro
        gray = ImageOps.grayscale(img)
        inv = ImageOps.invert(gray)
        mask = inv.point(lambda p: 255 if p > 30 else 0).convert("L")
    
    img.putalpha(mask)
    img.save(output_path, "PNG")
    print(f"Smart BG removal saved to {output_path}")

if __name__ == "__main__":
    remove_any_bg(sys.argv[1], sys.argv[2])
