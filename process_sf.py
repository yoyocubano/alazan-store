from PIL import Image
import sys

def split_and_clean_sf(input_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    part_width = width // 2
    part_height = height // 2
    
    names = ["ryu", "chunli", "blanka", "akuma"]
    
    idx = 0
    for y in range(2):
        for x in range(2):
            left = x * part_width
            top = y * part_height
            right = (x + 1) * part_width
            bottom = (y + 1) * part_height
            
            part = img.crop((left, top, right, bottom))
            
            datas = part.getdata()
            newData = []
            for item in datas:
                r, g, b, a = item
                if r < 35 and g < 35 and b < 35:
                    newData.append((0, 0, 0, 0))
                else:
                    newData.append(item)
            
            part.putdata(newData)
            bbox = part.getbbox()
            if bbox:
                part = part.crop(bbox)
                
            part.save(f"graphic_{names[idx]}.png", "PNG")
            idx += 1

if __name__ == "__main__":
    split_and_clean_sf("sf_pack.jpg")
