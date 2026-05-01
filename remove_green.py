from PIL import Image

def remove_green():
    img = Image.open('blank_tshirt_chroma.png').convert("RGBA")
    pixels = img.load()
    width, height = img.size
    
    processed = 0
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            
            # Simple green chroma key
            if g > 120 and g > r * 1.3 and g > b * 1.3:
                pixels[x, y] = (255, 255, 255, 0)
                processed += 1

    img.save('blank_tshirt_transparent.png', "PNG")
    print(f"Processed {processed} pixels.")

remove_green()
