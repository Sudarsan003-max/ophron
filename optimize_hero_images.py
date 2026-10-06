import os
import shutil
from PIL import Image, ImageFilter, ImageEnhance

brain_dir = r"C:\Users\SUDARSANA NARAYANAN\.gemini\antigravity-ide\brain\1a883b47-64a0-45fe-8415-ef6d62006456"
public_hero_dir = r"c:\Users\SUDARSANA NARAYANAN\.gemini\antigravity\scratch\Medscale - Copy\public\images\hero"
theme_hero_dir = r"c:\Users\SUDARSANA NARAYANAN\.gemini\antigravity\scratch\Medscale - Copy\ophron-theme\images\hero"

os.makedirs(public_hero_dir, exist_ok=True)
os.makedirs(theme_hero_dir, exist_ok=True)

images_map = [
    {
        "src": "hero_marble_polish_desktop_4k_1791265226157.jpg",
        "desktop_name": "hero_marble_polish_desktop",
        "is_mobile": False,
        "target_size": (2752, 1536) # 2x native 16:9
    },
    {
        "src": "hero_event_venue_desktop_4k_1791265244814.jpg",
        "desktop_name": "hero_event_venue_desktop",
        "is_mobile": False,
        "target_size": (2752, 1536)
    },
    {
        "src": "hero_manpower_suite_desktop_4k_1791265267563.jpg",
        "desktop_name": "hero_manpower_suite_desktop",
        "is_mobile": False,
        "target_size": (2752, 1536)
    },
    {
        "src": "hero_tech_dashboard_desktop_4k_1791265287694.jpg",
        "desktop_name": "hero_tech_dashboard_desktop",
        "is_mobile": False,
        "target_size": (2752, 1536)
    },
    {
        "src": "hero_marble_polish_mobile_1791265315594.jpg",
        "desktop_name": "hero_marble_polish_mobile",
        "is_mobile": True,
        "target_size": (1792, 2400) # 2x native 3:4
    },
    {
        "src": "hero_event_venue_mobile_1791265335567.jpg",
        "desktop_name": "hero_event_venue_mobile",
        "is_mobile": True,
        "target_size": (1792, 2400)
    },
    {
        "src": "hero_manpower_suite_mobile_1791265371074.jpg",
        "desktop_name": "hero_manpower_suite_mobile",
        "is_mobile": True,
        "target_size": (1792, 2400)
    },
    {
        "src": "hero_tech_dashboard_mobile_1791265393428.jpg",
        "desktop_name": "hero_tech_dashboard_mobile",
        "is_mobile": True,
        "target_size": (1792, 2400)
    }
]

for item in images_map:
    src_path = os.path.join(brain_dir, item["src"])
    with Image.open(src_path) as img:
        img = img.convert("RGB")
        target_w, target_h = item["target_size"]
        
        # High quality Lanczos resize
        resized = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        # Subtle unsharp mask to preserve crisp edges without noise
        # radius=1.2, percent=110, threshold=3
        sharpened = resized.filter(ImageFilter.UnsharpMask(radius=1.2, percent=110, threshold=3))
        
        # Save both WebP and JPG
        for out_dir in [public_hero_dir, theme_hero_dir]:
            webp_path = os.path.join(out_dir, f"{item['desktop_name']}.webp")
            jpg_path = os.path.join(out_dir, f"{item['desktop_name']}.jpg")
            
            # WebP (lossy with quality 90, method 6 for highest compression quality)
            sharpened.save(webp_path, "WEBP", quality=90, method=6)
            
            # JPEG fallback (quality 92, subsampling 0 for maximum chroma quality)
            sharpened.save(jpg_path, "JPEG", quality=92, subsampling=0, optimize=True)
            
            print(f"Saved {webp_path} ({os.path.getsize(webp_path)} bytes)")
            print(f"Saved {jpg_path} ({os.path.getsize(jpg_path)} bytes)")

print("\nAll hero images processed and saved successfully!")
