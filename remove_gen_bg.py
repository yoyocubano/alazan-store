from PIL import Image, ImageOps

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # If the pixel is very close to white, make it transparent
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Background removed: {output_path}")

def remove_black_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # If the pixel is very close to black, make it transparent
        if item[0] < 15 and item[1] < 15 and item[2] < 15:
            newData.append((0, 0, 0, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Black background removed: {output_path}")

remove_white_bg("graphic_noob_elite_gen.png", "graphic_noob_elite_hifi.png")
remove_white_bg("graphic_erron_elite_gen.png", "graphic_erron_elite_hifi.png")
remove_white_bg("graphic_cammy_gen.png", "graphic_cammy_hifi.png")
remove_white_bg("graphic_ryu_elite_gen.png", "graphic_ryu_elite_hifi.png")
remove_white_bg("graphic_chunli_elite_gen.png", "graphic_chunli_elite_hifi.png")
remove_white_bg("graphic_kabal_elite_gen.png", "graphic_kabal_elite_hifi.png")
remove_white_bg("graphic_cassie_elite_gen.png", "graphic_cassie_elite_hifi.png")
remove_white_bg("graphic_nightwolf_elite_gen.png", "graphic_nightwolf_elite_hifi.png")
remove_white_bg("graphic_geras_elite_gen.png", "graphic_geras_elite_hifi.png")
remove_white_bg("graphic_cetrion_elite_gen.png", "graphic_cetrion_elite_hifi.png")
remove_white_bg("graphic_skarlet_elite_gen.png", "graphic_skarlet_elite_hifi.png")
remove_white_bg("graphic_terminator_elite_gen.png", "graphic_terminator_elite_hifi.png")
remove_white_bg("graphic_spawn_elite_gen.png", "graphic_spawn_elite_hifi.png")
remove_white_bg("graphic_baraka_elite_gen.png", "graphic_baraka_elite_hifi.png")
remove_white_bg("graphic_fujin_elite_gen.png", "graphic_fujin_elite_hifi.png")
remove_white_bg("graphic_jax_elite_gen.png", "graphic_jax_elite_hifi.png")
remove_white_bg("graphic_kollector_elite_gen.png", "graphic_kollector_elite_hifi.png")
remove_black_bg("graphic_robocop_elite_gen.jpg", "graphic_robocop_elite_hifi.png")
remove_black_bg("graphic_kitana_elite_gen.jpg", "graphic_kitana_elite_hifi.png")
def remove_dark_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # If the pixel is very dark (threshold 40), make it transparent
        if item[0] < 45 and item[1] < 45 and item[2] < 45:
            newData.append((0, 0, 0, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Dark background removed: {output_path}")

remove_dark_bg("graphic_sheeva_elite_gen.jpg", "graphic_sheeva_elite_hifi.png")
remove_dark_bg("graphic_rain_elite_gen.jpg", "graphic_rain_elite_hifi.png")
remove_dark_bg("graphic_dhalsim_elite_gen.jpg", "graphic_dhalsim_elite_hifi.png")
remove_dark_bg("graphic_guile_elite_nano_gen.jpg", "graphic_guile_elite_nano_hifi.png")
remove_dark_bg("graphic_akuma_elite_nano_gen.jpg", "graphic_akuma_elite_nano_hifi.png")
remove_dark_bg("graphic_blanka_elite_nano_gen.jpg", "graphic_blanka_elite_nano_hifi.png")
remove_dark_bg("graphic_sagat_elite_nano_gen.jpg", "graphic_sagat_elite_nano_hifi.png")
remove_dark_bg("graphic_kabal_elite_nano_gen.jpg", "graphic_kabal_elite_nano_hifi.png")
remove_dark_bg("graphic_dvorah_elite_gen.jpg", "graphic_dvorah_elite_hifi.png")
remove_dark_bg("graphic_quanchi_elite_gen.jpg", "graphic_quanchi_elite_hifi.png")
remove_dark_bg("graphic_vega_elite_nano_gen.png", "graphic_vega_elite_nano_hifi.png")
remove_dark_bg("graphic_mbison_elite_nano_gen.png", "graphic_mbison_elite_nano_hifi.png")
remove_dark_bg("graphic_cammy_elite_nano_gen.png", "graphic_cammy_elite_nano_hifi.png")
remove_dark_bg("graphic_joker_elite_nano_gen.png", "graphic_joker_elite_nano_hifi.png")
remove_dark_bg("graphic_cyrax_elite_gen.jpg", "graphic_cyrax_elite_hifi.png")
remove_dark_bg("graphic_smoke_elite_gen.jpg", "graphic_smoke_elite_hifi.png")
remove_dark_bg("graphic_sagat_elite_alt_gen.jpg", "graphic_sagat_elite_alt_hifi.png")
remove_dark_bg("graphic_goro_elite_gen.jpg", "graphic_goro_elite_hifi.png")
