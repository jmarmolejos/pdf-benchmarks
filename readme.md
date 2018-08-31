# Puppeteer

- Downloads a ~104 MB Chrome image (**~282MB** after installed on Linux)
- Spawns a Chrome process outside of the Node process
- Node process itself only takes **~8MB of ram
- Chrome process can take up to **~60MB of ram
- Duration to generate a .PDF from www.example.com: ~1500ms
- PDF size: 30KB

# pdfkit

- No extra download necessary
- No extra processes are spawned outside the Node process
- Node process takes **~18MB when idle, ~20MB** when generating the PDF
- Duration to render a sample PDF with drawings and text: 78ms
- PDF size: ~3KB
