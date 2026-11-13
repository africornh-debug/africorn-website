# Africorn Inland Ocean website

Static website: no build step, no server code.

- `site/` is the website. Upload the contents of this folder to the web host for africorn-ios.co.za.
- `preview/` is a single-file copy for previewing. Rebuild it with `python3 build_preview.py`.

## Brand
- Logo: `site/assets/logo.svg` (vector tracing of `site/assets/logo-original.png`); an inline copy sits in the header of `site/index.html`.
- Colours come from the logo: the tokens at the top of `site/css/styles.css`, and the matching constants at the top of `site/js/app.js` for the illustrations.

## Still to replace before going live
- The cards marked "Example shipment" and "Sample review" in `site/index.html`.

## How the forms work
The quote form emails sales@africorn-ios.co.za and the enquiry form emails info@africorn-ios.co.za
by opening the visitor's email app with the message filled in (a copy-and-send fallback is shown on the page).
