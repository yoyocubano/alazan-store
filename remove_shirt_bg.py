import collections
from PIL import Image

def remove_bg():
    try:
        # We need the original image, not the corrupted one, so we open blank_tshirt.png
        img = Image.open('blank_tshirt.png').convert("RGBA")
        pixels = img.load()
        
        # We need an unmodified copy to read colors from, because we mutate pixels
        original_img = Image.open('blank_tshirt.png').convert("RGB")
        orig_pixels = original_img.load()
        
        width, height = img.size
        
        queue = collections.deque()
        visited = set()
        
        # Start from the perimeter
        for x in range(width):
            queue.append((x, 0))
            queue.append((x, height-1))
            visited.add((x, 0))
            visited.add((x, height-1))
        for y in range(height):
            queue.append((0, y))
            queue.append((width-1, y))
            visited.add((0, y))
            visited.add((width-1, y))
            
        def color_dist(c1, c2):
            return sum(abs(a - b) for a, b in zip(c1[:3], c2[:3]))

        processed = 0
        while queue:
            x, y = queue.popleft()
            curr_orig_color = orig_pixels[x, y]
            
            pixels[x, y] = (255, 255, 255, 0)
            processed += 1
            
            for dx, dy in [(0,1), (1,0), (0,-1), (-1,0)]:
                nx, ny = x+dx, y+dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        next_orig_color = orig_pixels[nx, ny]
                        # Is it part of the same continuous background?
                        if color_dist(next_orig_color, curr_orig_color) < 25:
                            # Also ensure we don't accidentally leak into pure white (the shirt)
                            if next_orig_color[0] < 240 and next_orig_color[1] < 240 and next_orig_color[2] < 240:
                                visited.add((nx, ny))
                                queue.append((nx, ny))
                            
        img.save('blank_tshirt_transparent.png', "PNG")
        print(f"Saved! Processed {processed} pixels to transparent.")
    except Exception as e:
        print(f"Error: {e}")

remove_bg()
