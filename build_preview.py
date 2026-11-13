"""Builds preview/africorn-inland-ocean.html: one self-contained file (CSS and JS inlined)
from site/index.html. The site/ folder itself is what gets uploaded to the web host."""
import pathlib, re

root = pathlib.Path(__file__).parent
html = (root / "site/index.html").read_text()
css = (root / "site/css/styles.css").read_text()
js = (root / "site/js/app.js").read_text()

body = re.search(r"<body>(.*)</body>", html, re.S).group(1)
body = body.replace('<script src="js/app.js"></script>', "<script>\n" + js + "\n</script>")
fonts = re.search(r'<link rel="stylesheet" href="https://fonts[^>]+>', html).group(0)
out = (
    "<title>Africorn Inland Ocean</title>\n"
    '<meta name="claude:viewport-fit-sides" content="cover">\n'
    + fonts + "\n<style>\n" + css + "\n</style>\n" + body
)
dest = root / "preview/africorn-inland-ocean.html"
dest.parent.mkdir(exist_ok=True)
dest.write_text(out)
print("wrote", dest, len(out), "bytes")
