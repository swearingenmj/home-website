# Missy & Barley

Private personal site for friends and family.

## Pages
- `index.html` — password login
- `home.html` — homepage with upcoming event info
- `wishlist.html` — new home wishlist
- `recipes.html` — recipe collection (in progress)

## Changing the password
Open `generate-hash.html` locally, type your new password, copy the hash, and paste it into the `HASH_GUEST` or `HASH_MISSY` variable in `index.html`. There are two passwords — one for guests, one for Missy. Don't upload `generate-hash.html` to GitHub.

## JSONBin — shared wishlist claims
Claimed items on the wishlist are stored in a JSONBin bin (a tiny cloud database) so that claims made by guests are visible to everyone, not just the person who clicked. The Bin ID and API key live in `wishlist.html`. If the key ever needs to be regenerated, go to jsonbin.io, create a new key, and replace `API_KEY` in `wishlist.html`.

## Microlink — item and room photos
Microlink (microlink.io) is a free API that takes any URL and returns metadata including the preview image. The wishlist uses it to pull product photos from item links, and room/section photos from the Redfin listing. No account or API key needed — it's a free public API. If photos stop loading, check microlink.io for any service changes.

## Hosting
Deployed via GitHub Pages (Settings → Pages → main → / root).

## Files not to upload
- `generate-hash.html` — local password tool only