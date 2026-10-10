#!/usr/bin/env bash
# Copies Israel homepage assets into the US repo.
# Run from the repo root: bash copy-assets.sh "/path/to/Home - Terafence_files"
set -e
SRC="${1:-}"
[ -z "$SRC" ] && { echo "usage: bash copy-assets.sh \"/path/to/Home - Terafence_files\""; exit 1; }
[ -d "$SRC" ] || { echo "Not found: $SRC"; exit 1; }

mkdir -p public/images/home/devices public/images/home/sectors

cp "$SRC/city2.png"    public/images/home/city.png

i=1
for f in Camera-copy-5 Camera-copy-11 Camera-copy-8 Camera-copy-2 Camera \
         Camera-copy-14 Camera-copy-12 Camera-copy-15 Camera-copy-7 Camera-copy-4 \
         Camera-copy Camera-copy-13 Camera-copy-3 Camera-copy-6 Camera-copy-9 Camera-copy-10; do
  cp "$SRC/$f.png" "public/images/home/devices/$i.png"
  i=$((i+1))
done

j=1
for f in home-cat-1 home-cat-2 home-cat-3 home-cat-4 home-cat-5 home-cat-7 CPS-1; do
  cp "$SRC/$f.png" "public/images/home/sectors/$j.png"
  j=$((j+1))
done

echo "✓ city.png"
echo "✓ 16 device icons  → public/images/home/devices/"
echo "✓ 7 sector images  → public/images/home/sectors/"
ls public/images/home/devices | wc -l
