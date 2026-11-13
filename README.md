# Africorn Inland Ocean website

Static website: no build step, no server code.

- `site/` is the website. Upload the contents of this folder to the web host for africorn-ios.co.za.
- `preview/` is a single-file copy for previewing. Rebuild it with `python3 build_preview.py`.

## Things to replace before going live
1. **Logo**: in `site/index.html`, search for `LOGO SLOT` and follow the comment.
2. **Brand colours**: the six values at the top of `site/css/styles.css` (marked PROVISIONAL).
   The illustration colours are the matching constants at the top of `site/js/app.js`.
3. **Stories and reviews**: the cards marked "Example shipment" and "Sample review" in `site/index.html`.

## How the forms work
The quote form emails sales@africorn-ios.co.za and the enquiry form emails info@africorn-ios.co.za
by opening the visitor's email app with the message filled in (a copy-and-send fallback is shown on the page).
