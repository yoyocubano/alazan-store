import colorsys
from PIL import Image

def remove_cyan_hsv():
    img = Image.open('premium_cotton_back.png').convert("RGBA")
    pixels = img.load()
    width, height = img.size
    
    processed = 0
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            h, s, v = colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)
            
            # Cyan hue is around 0.45 to 0.65
            if 0.45 < h < 0.65 and s > 0.2:
                # Strong background
                if s > 0.5:
                    pixels[x, y] = (0, 0, 0, 0)
                else:
                    # Soft edge / shadow
                    alpha = int(255 * (1 - (s * 2)))
                    pixels[x, y] = (0, 0, 0, max(0, alpha))
                processed += 1

    img.save('zara_tshirt_back_transparent.png', "PNG")
    print(f"Processed {processed} pixels.")

remove_cyan_hsv()
