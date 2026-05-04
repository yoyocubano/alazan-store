from PIL import Image
import sys

def split_and_clean(input_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    part_width = width // 3
    
    names = ["subzero", "raiden", "liukang"]
    
    for i in range(3):
        # Crop
        left = i * part_width
        right = (i + 1) * part_width
        part = img.crop((left, 0, right, height))
        
        # Remove black background
        datas = part.getdata()
        newData = []
        for item in datas:
            r, g, b, a = item
            # If the pixel is very dark (black), make it transparent
            if r < 30 and g < 30 and b < 30:
                newData.append((0, 0, 0, 0))
            else:
                newData.append(item)
        
        part.putdata(newData)
        # Trim transparency
        bbox = part.getbbox()
        if bbox:
            part = part.crop(bbox)
            
        part.save(f"graphic_{names[i]}.png", "PNG")

if __name__ == "__main__":
    split_and_clean("fighters_pack.jpg")
