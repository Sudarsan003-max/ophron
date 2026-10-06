import os
import shutil
import zipfile

root_dir = os.path.abspath('.')
theme_dir = os.path.join(root_dir, 'ophron-theme')
public_images = os.path.join(root_dir, 'public', 'images')
target_images = os.path.join(theme_dir, 'images')
assets_images = os.path.join(theme_dir, 'assets', 'images')

# 1. Ensure CSS in assets/css is synced with latest assets/dist/css
dist_css = os.path.join(theme_dir, 'assets', 'dist', 'css', 'ophron-app.css')
assets_css = os.path.join(theme_dir, 'assets', 'css', 'ophron-style.css')
if os.path.exists(dist_css):
    os.makedirs(os.path.dirname(assets_css), exist_ok=True)
    shutil.copy2(dist_css, assets_css)
    print("Synced latest compiled CSS to assets/css/ophron-style.css")

# 2. Clean and synchronize target images folders
for img_dir in [target_images, assets_images]:
    if os.path.exists(img_dir):
        shutil.rmtree(img_dir)
    shutil.copytree(public_images, img_dir)
    print(f"Copied {len(os.listdir(img_dir))} items to {img_dir}")

# 3. Copy components images (portraits, brand assets)
src_components = os.path.join(root_dir, 'src', 'components')
for f in os.listdir(src_components):
    if f.lower().endswith(('.png', '.jpg', '.jpeg', '.svg', '.webp')):
        for img_dir in [target_images, assets_images]:
            shutil.copy2(os.path.join(src_components, f), os.path.join(img_dir, f))

# 4. Ensure high-quality screenshot.png exists
screenshot_src = os.path.join(target_images, 'hero', 'hero_marble_polish_desktop.jpg')
if not os.path.exists(screenshot_src):
    screenshot_src = os.path.join(target_images, 'photo-8629127.jpg')
if os.path.exists(screenshot_src):
    shutil.copy2(screenshot_src, os.path.join(theme_dir, 'screenshot.png'))
    print("Updated screenshot.png")

# 5. Package standard POSIX zip archive for WordPress
zip_output = os.path.join(root_dir, 'ophron-theme.zip')
if os.path.exists(zip_output):
    os.remove(zip_output)

with zipfile.ZipFile(zip_output, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(theme_dir):
        for file in files:
            file_path = os.path.join(root, file)
            rel_path = os.path.relpath(file_path, os.path.dirname(theme_dir))
            posix_path = rel_path.replace('\\', '/')
            zipf.write(file_path, posix_path)

size_mb = os.path.getsize(zip_output) / (1024 * 1024)
print(f"\n=======================================================")
print(f"SUCCESS: WordPress theme is 100% updated and packaged:")
print(f"Archive: ophron-theme.zip ({size_mb:.2f} MB)")
print(f"Directory: ophron-theme/")
print(f"=======================================================\n")
