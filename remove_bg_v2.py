import sys
from PIL import Image, ImageFilter

def remove_bg_advanced(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # Create a mask of pixels that are NOT white
    # We use a lower threshold to be more aggressive
    # and we look for pixels that are NOT close to white
    datas = img.getdata()
    new_data = []
    
    for item in datas:
        # If the pixel is very bright (sum of R,G,B > 720) 
        # and balanced (small difference between channels)
        # it's likely background.
        r, g, b, a = item
        if r > 235 and g > 235 and b > 235:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Smooth the edges a bit
    # (Optional: can be done by blurring the alpha channel)
    
    img.save(output_path, "PNG")
    print(f"Saved advanced transparent image to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python remove_bg_v2.py <input> <output>")
    else:
        remove_bg_advanced(sys.argv[1], sys.argv[2])
