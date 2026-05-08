from PIL import Image

def sample(img_path):
    img = Image.open(img_path).convert("RGB")
    print(f"--- {img_path} ---")
    # Sample top left corner area
    for y in range(0, 10, 2):
        for x in range(0, 10, 2):
            print(img.getpixel((x, y)), end=" ")
        print()

sample("alazan_raiden.png")
sample("alazan_kitana.png")
sample("alazan_shaokahn.png")
