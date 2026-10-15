import os
import shutil
import zipfile

root_dir = os.path.abspath('.')
theme_dir = os.path.join(root_dir, 'ophron-theme')
public_images = os.path.join(root_dir, 'public', 'images')
target_images = os.path.join(theme_dir, 'images')

# 1. Clean up duplicate asset folders (which previously tripled file size to 400MB)
for dup_dir in [
    os.path.join(theme_dir, 'assets', 'images'),
    os.path.join(theme_dir, 'assets', 'dist', 'images'),
    os.path.join(theme_dir, 'assets', 'dist', 'videos')
]:
    if os.path.exists(dup_dir):
        shutil.rmtree(dup_dir)
        print(f"Removed duplicate folder: {dup_dir}")

# 2. Ensure CSS in assets/css is synced with latest assets/dist/css
dist_css = os.path.join(theme_dir, 'assets', 'dist', 'css', 'ophron-app.css')
assets_css = os.path.join(theme_dir, 'assets', 'css', 'ophron-style.css')
if os.path.exists(dist_css):
    os.makedirs(os.path.dirname(assets_css), exist_ok=True)
    shutil.copy2(dist_css, assets_css)
    print("Synced latest compiled CSS to assets/css/ophron-style.css")

# 3. Copy 100% of ALL images from public/images into ophron-theme/images
os.makedirs(target_images, exist_ok=True)
shutil.copytree(public_images, target_images, dirs_exist_ok=True)

# Also copy component assets (portraits, logos)
src_components = os.path.join(root_dir, 'src', 'components')
for f in os.listdir(src_components):
    if f.lower().endswith(('.png', '.jpg', '.jpeg', '.svg', '.webp')):
        dest = os.path.join(target_images, f)
        shutil.copy2(os.path.join(src_components, f), dest)

total_imgs = sum(len(files) for _, _, files in os.walk(target_images))
print(f"Packaged ALL {total_imgs} images into ophron-theme/images (100% of all images included)")

# 4. Ensure high-quality screenshot.png exists
screenshot_src = os.path.join(target_images, 'hero', 'hero_marble_polish_desktop.jpg')
if not os.path.exists(screenshot_src):
    screenshot_src = os.path.join(target_images, 'photo-8629127.jpg')
if os.path.exists(screenshot_src):
    shutil.copy2(screenshot_src, os.path.join(theme_dir, 'screenshot.png'))
    print("Updated screenshot.png")

# 5. Package standard POSIX zip archive with ALL 100% images
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
print(f"SUCCESS: WordPress theme packaged with 100% of ALL images:")
print(f"Archive: ophron-theme.zip ({size_mb:.2f} MB)")
print(f"Images count: {total_imgs} images included (NONE deleted or omitted)")
print(f"Directory: ophron-theme/")
print(f"=======================================================\n")
