from PIL import Image

def remove_bg(filepath, is_dark):
    img = Image.open(filepath).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    
    # Get corner colors to identify background
    corners = [
        img.getpixel((0, 0)),
        img.getpixel((img.width-1, 0)),
        img.getpixel((0, img.height-1)),
        img.getpixel((img.width-1, img.height-1))
    ]
    
    # Average the RGB of corners
    avg_r = sum(c[0] for c in corners) / 4
    avg_g = sum(c[1] for c in corners) / 4
    avg_b = sum(c[2] for c in corners) / 4
    
    tolerance = 30 # high tolerance for checkerboard variations
    
    for item in data:
        r, g, b, a = item
        # Calculate distance from background color
        dist = ((r - avg_r)**2 + (g - avg_g)**2 + (b - avg_b)**2)**0.5
        
        if dist < tolerance:
            new_data.append((r, g, b, 0)) # fully transparent
        elif dist < tolerance + 20:
            # edge blending
            alpha = int(((dist - tolerance) / 20) * 255)
            new_data.append((r, g, b, alpha))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(filepath, "PNG")
    print(f"Processed {filepath}")

remove_bg("alazan_subzero.png", True)
remove_bg("alazan_raiden.png", True)
remove_bg("alazan_kitana.png", False)
remove_bg("alazan_shaokahn.png", False)
