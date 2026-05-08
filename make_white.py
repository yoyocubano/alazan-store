import sys
from PIL import Image, ImageOps

def make_technical_white(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    r, g, b, a = img.split()
    
    # Aumentamos la exposición para llevar el gris a blanco
    # pero manteniendo el detalle de las sombras
    def lighten(p):
        return min(255, int(p * 1.8)) 
        
    r = r.point(lighten)
    g = g.point(lighten)
    b = b.point(lighten)
    
    new_img = Image.merge("RGB", (r, g, b))
    new_img.putalpha(a)
    new_img.save(output_path, "PNG")
    print(f"Technical white base saved to {output_path}")

if __name__ == "__main__":
    make_technical_white(sys.argv[1], sys.argv[2])
