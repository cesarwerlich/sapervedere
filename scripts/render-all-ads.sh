#!/bin/bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ADS_DIR="$DIR/public/ads"
mkdir -p "$ADS_DIR"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
BASE_URL="http://localhost:3001/ads/render"

render_feed() {
  local id="$1"
  echo "Rendering Feed: $id..."
  "$CHROME" --headless --disable-gpu --window-size=1080,1080 --screenshot="$ADS_DIR/$id.png" "$BASE_URL/$id" 2>/dev/null
  sips -s format jpeg -s formatOptions 90 "$ADS_DIR/$id.png" --out "$ADS_DIR/$id.jpg" >/dev/null 2>&1
}

render_story() {
  local id="$1"
  echo "Rendering Story: $id..."
  "$CHROME" --headless --disable-gpu --window-size=1080,1920 --screenshot="$ADS_DIR/$id.png" "$BASE_URL/$id" 2>/dev/null
  sips -s format jpeg -s formatOptions 90 "$ADS_DIR/$id.png" --out "$ADS_DIR/$id.jpg" >/dev/null 2>&1
}

# Feed 1
render_feed "feed-1-v1"
render_feed "feed-1-v2"
render_feed "feed-1-v3"
cp "$ADS_DIR/feed-1-v1.png" "$ADS_DIR/feed-1.png"
cp "$ADS_DIR/feed-1-v1.jpg" "$ADS_DIR/feed-1.jpg"

# Feed 2
render_feed "feed-2-v1"
render_feed "feed-2-v2"
render_feed "feed-2-v3"
cp "$ADS_DIR/feed-2-v2.png" "$ADS_DIR/feed-2.png"
cp "$ADS_DIR/feed-2-v2.jpg" "$ADS_DIR/feed-2.jpg"

# Feed 3
render_feed "feed-3-v1"
render_feed "feed-3-v2"
render_feed "feed-3-v3"
cp "$ADS_DIR/feed-3-v1.png" "$ADS_DIR/feed-3.png"
cp "$ADS_DIR/feed-3-v1.jpg" "$ADS_DIR/feed-3.jpg"

# Stories
render_story "story-1-v1"
render_story "story-1-v2"
render_story "story-1-v3"
cp "$ADS_DIR/story-1-v1.png" "$ADS_DIR/story-1.png"
cp "$ADS_DIR/story-1-v1.jpg" "$ADS_DIR/story-1.jpg"

render_story "story-2-v1"
render_story "story-2-v2"
render_story "story-2-v3"
cp "$ADS_DIR/story-2-v2.png" "$ADS_DIR/story-2.png"
cp "$ADS_DIR/story-2-v2.jpg" "$ADS_DIR/story-2.jpg"

render_story "story-3-v1"
render_story "story-3-v2"
render_story "story-3-v3"
cp "$ADS_DIR/story-3-v1.png" "$ADS_DIR/story-3.png"
cp "$ADS_DIR/story-3-v1.jpg" "$ADS_DIR/story-3.jpg"

echo "All 18 ad variations successfully rendered to PNG and JPG in $ADS_DIR"
