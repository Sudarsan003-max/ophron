import os
import shutil
import zipfile

theme_dir = os.path.abspath('ophron-theme')
public_images = os.path.abspath('public/images')
target_images = os.path.join(theme_dir, 'images')

# Clean target images folder first
if os.path.exists(target_images):
    shutil.rmtree(target_images)

# Copy all images recursively from public/images to ophron-theme/images
shutil.copytree(public_images, target_images)
print(f"Copied {len(os.listdir(target_images))} items to {target_images}")

# Also copy portraits and logos from src/components if any
src_components = os.path.abspath('src/components')
for f in os.listdir(src_components):
    if f.lower().endswith(('.png', '.jpg', '.jpeg', '.svg', '.webp')):
        shutil.copy2(os.path.join(src_components, f), os.path.join(target_images, f))

# Also ensure screenshot.png exists
screenshot_src = os.path.join(target_images, 'photo-8629127.jpg')
if os.path.exists(screenshot_src):
    shutil.copy2(screenshot_src, os.path.join(theme_dir, 'screenshot.png'))

# Package standard POSIX zip archive
zip_output = os.path.abspath('ophron-theme.zip')
if os.path.exists(zip_output):
    os.remove(zip_output)

with zipfile.ZipFile(zip_output, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(theme_dir):
        # Ignore git or scratch dirs if any
        for file in files:
            file_path = os.path.join(root, file)
            rel_path = os.path.relpath(file_path, os.path.dirname(theme_dir))
            posix_path = rel_path.replace('\\', '/')
            zipf.write(file_path, posix_path)

size_mb = os.path.getsize(zip_output) / (1024 * 1024)
print(f"Successfully created complete WordPress theme archive with all assets: ophron-theme.zip ({size_mb:.2f} MB)")
