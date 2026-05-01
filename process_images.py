from PIL import Image

def remove_bg(input_path, output_path, bg_type='white'):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        newData = []
        for item in datas:
            if bg_type == 'white':
                if item[0] > 230 and item[1] > 230 and item[2] > 230:
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append(item)
            else: # black
                if item[0] < 25 and item[1] < 25 and item[2] < 25:
                    newData.append((0, 0, 0, 0))
                else:
                    newData.append(item)
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Processed {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

files = [
    ("/Users/ark/.gemini/antigravity/brain/ebea4afe-d234-46c2-8a35-1d8773386d4f/media__1777554918950.jpg", "graphic_1.png", "white"),
    ("/Users/ark/.gemini/antigravity/brain/ebea4afe-d234-46c2-8a35-1d8773386d4f/media__1777554930829.jpg", "graphic_4.png", "black"),
    ("/Users/ark/.gemini/antigravity/brain/ebea4afe-d234-46c2-8a35-1d8773386d4f/media__1777554930876.jpg", "graphic_2.png", "white"),
    ("/Users/ark/.gemini/antigravity/brain/ebea4afe-d234-46c2-8a35-1d8773386d4f/media__1777554930959.jpg", "graphic_3.png", "white"),
    ("/Users/ark/.gemini/antigravity/brain/ebea4afe-d234-46c2-8a35-1d8773386d4f/media__1777555778239.jpg", "graphic_5.png", "black"),
    ("/Users/ark/.gemini/antigravity/brain/ebea4afe-d234-46c2-8a35-1d8773386d4f/media__1777555778278.jpg", "graphic_6.png", "white"),
]

for in_p, out_p, bg in files:
    remove_bg(in_p, out_p, bg)
print("Done")
