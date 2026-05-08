import sys
from PIL import Image

def remove_checkerboard(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Check if the pixel is part of the grey/white checkerboard
        # White: (255, 255, 255)
        # Grey: (204, 204, 204) or similar
        r, g, b, a = item
        if (r > 200 and g > 200 and b > 200) and abs(r-g) < 10 and abs(g-b) < 10:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_checkerboard(sys.argv[1], sys.argv[2])
