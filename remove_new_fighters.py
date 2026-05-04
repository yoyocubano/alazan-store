import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find where Product 7 starts
start_idx = content.find('<!-- Product 7: Sub-Zero -->')

if start_idx != -1:
    # Find where the products-grid ends. 
    # It's right before <!-- Cart Offcanvas -->
    end_idx = content.find('<!-- Cart Offcanvas -->')
    
    # We want to keep the closing div of products-grid and the section.
    # The original structure before Cart Offcanvas is:
    #             </div>
    #         </section>
    #     <!-- Cart Offcanvas -->
    
    if end_idx != -1:
        # Get the part before Product 7
        before_product = content[:start_idx]
        # Append the closing tags for the grid
        closing_tags = '            </div>\n        </section>\n    \n    '
        # Get the part from Cart Offcanvas to the end
        after_grid = content[end_idx:]
        
        new_content = before_product + closing_tags + after_grid
        
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Removed new fighters.")
    else:
        print("Could not find Cart Offcanvas marker.")
else:
    print("Could not find Product 7 marker.")
