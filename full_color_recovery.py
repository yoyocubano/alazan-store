from PIL import Image, ImageFilter, ImageDraw
import os

def solid_reprocess(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    mask_img = img.convert("L").point(lambda x: 0 if x < 20 else 255)
    
    seed_points = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    for pt in seed_points:
        ImageDraw.floodfill(mask_img, pt, 0, thresh=10)
    
    mask_img = mask_img.filter(ImageFilter.MaxFilter(3))
    mask_img = mask_img.filter(ImageFilter.MinFilter(3))
    
    datas = img.getdata()
    mask_datas = mask_img.getdata()
    newData = []
    for i in range(len(datas)):
        if mask_datas[i] == 0:
            newData.append((0, 0, 0, 0))
        else:
            r, g, b, a = datas[i]
            newData.append((r, g, b, 255))
            
    img.putdata(newData)
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    img.save(output_path, "PNG")

def full_recovery():
    if os.path.exists("sf_pack.jpg"):
        img_sf = Image.open("sf_pack.jpg").convert("RGBA")
        w, h = img_sf.size
        pw, ph = w // 2, h // 2
        names = ["ryu", "chunli", "blanka", "akuma"]
        idx = 0
        for y in range(2):
            for x in range(2):
                part = img_sf.crop((x*pw, y*ph, (x+1)*pw, (y+1)*ph))
                part.save("temp_rec.png")
                solid_reprocess("temp_rec.png", f"graphic_{names[idx]}.png")
                idx += 1
            
    if os.path.exists("fighters_pack.jpg"):
        img_mk = Image.open("fighters_pack.jpg").convert("RGBA")
        w, h = img_mk.size
        pw = w // 3
        names_mk = ["subzero", "raiden", "liukang"]
        for i in range(3):
            part = img_mk.crop((i*pw, 0, (i+1)*pw, h))
            part.save("temp_rec.png")
            solid_reprocess("temp_rec.png", f"graphic_{names_mk[i]}.png")
        
    if os.path.exists("kunglao_original.jpg"):
        solid_reprocess("kunglao_original.jpg", "graphic_7.png")

if __name__ == "__main__":
    full_recovery()
