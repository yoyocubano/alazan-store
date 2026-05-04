from PIL import Image, ImageDraw
import sys

def sophisticated_clean(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Use flood fill to identify background
    # We'll try from the 4 corners to be sure
    seed_points = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    mask = Image.new("L", (width, height), 0)
    
    for pt in seed_points:
        ImageDraw.floodfill(img, pt, (0, 0, 0, 0), thresh=40)

    # Now anything that was background is transparent.
    # But let's ensure the character itself is fully opaque.
    datas = img.getdata()
    newData = []
    for item in datas:
        r, g, b, a = item
        if a == 0: # Background
            newData.append((0, 0, 0, 0))
        else: # Character - Make it fully opaque
            newData.append((r, g, b, 255))
            
    img.putdata(newData)
    
    # Crop to content
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")

def process_all():
    # Process SF Pack
    img_sf = Image.open("sf_pack.jpg").convert("RGBA")
    w, h = img_sf.size
    pw, ph = w // 2, h // 2
    names = ["ryu", "chunli", "blanka", "akuma"]
    idx = 0
    for y in range(2):
        for x in range(2):
            part = img_sf.crop((x*pw, y*ph, (x+1)*pw, (y+1)*ph))
            part.save("temp.png")
            sophisticated_clean("temp.png", f"graphic_{names[idx]}.png")
            idx += 1
            
    # Process MK Pack (the 3-fighter one)
    img_mk = Image.open("fighters_pack.jpg").convert("RGBA")
    w, h = img_mk.size
    pw = w // 3
    names_mk = ["subzero", "raiden", "liukang"]
    for i in range(3):
        part = img_mk.crop((i*pw, 0, (i+1)*pw, h))
        part.save("temp.png")
        sophisticated_clean("temp.png", f"graphic_{names_mk[i]}.png")

if __name__ == "__main__":
    process_all()
