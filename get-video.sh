#!/usr/bin/env bash
# Pulls the Terafence hero film into public/videos/ so the page serves
# it locally instead of streaming from Vimeo on every visit.
# Run from the repo root.
set -e
mkdir -p public/videos
URL="https://player.vimeo.com/external/307467562.hd.mp4?s=dcfa3471d05f00067c87ddd62df6c58b71e3191c&profile_id=175"
echo "→ downloading hero film…"
curl -L --fail -o public/videos/hero.mp4 "$URL"
ls -lh public/videos/hero.mp4
echo "✓ done — the page will now serve it locally"
