import os
import re

src_dir = 'src'
img_dir = 'public/images'
refs = set()

for r, d, fs in os.walk(src_dir):
    for f in fs:
        if f.endswith(('.ts', '.tsx', '.css', '.html')):
            content = open(os.path.join(r, f), encoding='utf-8', errors='ignore').read()
            matches = re.findall(r'[\'\"\(](?:/images/|images/)?([a-zA-Z0-9_\-\./]+\.(?:jpg|png|svg|webp|jpeg))[\'\"\)]', content)
            for m in matches:
                clean_m = m.replace('brand/', '').replace('services/', '').replace('test_replacements/', '')
                refs.add(m)
                refs.add(clean_m)

print(f"Total unique referenced image names: {len(refs)}")
found = []
for ref in refs:
    # check in public/images/
    direct = os.path.join(img_dir, ref)
    if os.path.exists(direct) and os.path.isfile(direct):
        found.append(direct)
    else:
        # check subdirs
        for r, d, fs in os.walk(img_dir):
            if os.path.basename(ref) in fs:
                found.append(os.path.join(r, os.path.basename(ref)))
                break

found = list(set(found))
print(f"Found files in public/images: {len(found)}")
total_size = sum(os.path.getsize(f) for f in found)
print(f"Total size of referenced images: {total_size / (1024*1024):.2f} MB")
