fs = require('fs')
PDFDocument = require('pdfkit')

let used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} MB`);

console.time('generate_pdf')

doc = new PDFDocument
 
doc.pipe(fs.createWriteStream('output.pdf'))
 
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus ut purus non gravida. Suspendisse pharetra, nisl quis luctus molestie, neque nisl consectetur risus, id molestie risus arcu ac neque. Cras faucibus placerat sem in faucibus. Pellentesque vitae dictum tellus, ac pretium velit. Nulla convallis sollicitudin massa. Quisque ac faucibus tellus, in fringilla dolor. Proin quis eleifend ligula, id porta velit. Phasellus pharetra, neque at gravida facilisis, urna lacus tincidunt mi, et iaculis urna purus sit amet nisl. Suspendisse potenti. Aenean dapibus dui non tempor pellentesque. Aliquam ultricies consequat risus, at condimentum tellus accumsan in. Mauris aliquet efficitur enim. Maecenas non tortor ultricies, blandit lectus sit amet, volutpat dui. Maecenas vestibulum congue nisi in lacinia. Aenean in erat ut lacus elementum ultricies. Pellentesque ut nibh mi.

Phasellus egestas id tortor non iaculis. Donec turpis ex, scelerisque eget enim in, ultricies posuere ipsum. Vivamus mattis, diam at porta vulputate, dolor sapien aliquet magna, eget porta sapien velit ac leo. Vestibulum ullamcorper condimentum tincidunt. Sed vehicula, magna ac porta dictum, arcu eros mollis tellus, ut faucibus justo diam vel odio. Sed molestie ligula quis quam laoreet volutpat. Curabitur mattis diam ut augue semper, sit amet ullamcorper libero varius. Maecenas mattis eros vitae elit pretium varius. Pellentesque faucibus venenatis arcu.

Fusce eu augue nibh. Sed in libero lacus. Aliquam justo nunc, pellentesque ac sodales in, finibus a turpis. Aliquam faucibus rutrum justo ac luctus. Duis vel hendrerit turpis. Nam dapibus lacus in tellus vehicula, quis finibus erat varius. Praesent sed nibh in sem euismod hendrerit a ac sapien.

Aliquam eu nisl elementum, accumsan mauris eget, tincidunt est. Aliquam pharetra sagittis finibus. Vestibulum rutrum aliquam diam ut pharetra. Aenean id nisi eget lectus scelerisque iaculis at quis metus. Nulla at justo ut ipsum tristique vulputate. Phasellus quis bibendum ipsum, nec consectetur justo. Sed viverra eget lacus facilisis rhoncus. Donec vel gravida metus, sed condimentum lectus.

Sed rutrum, leo non aliquet vestibulum, ante sapien pellentesque dolor, eget dapibus neque quam a tellus. Integer at bibendum massa. Nullam sit amet neque vitae tortor consectetur pretium. Integer pharetra dui eu enim aliquet, ut tincidunt lorem eleifend. Nam tempor ante euismod nibh cursus faucibus. Duis cursus consequat elit quis iaculis. Curabitur ullamcorper diam tortor, ut eleifend enim laoreet et. Nulla tellus neque, consectetur at lacus varius, viverra posuere urna.
`

// draw some text
doc.fontSize(25)
   .text('Here is some vector graphics...', 100, 80);
   
// some vector graphics
doc.save()
   .moveTo(100, 150)
   .lineTo(100, 250)
   .lineTo(200, 250)
   .fill("#FF3300");
   
doc.circle(280, 200, 50)
   .fill("#6600FF");
   
// an SVG path
doc.scale(0.6)
   .translate(470, 130)
   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
   .fill('red', 'even-odd')
   .restore();
   
// and some justified text wrapped into columns
doc.text('And here is some wrapped text...', 100, 300)
   .font('Times-Roman', 13)
   .moveDown()
   .text(lorem, {
     width: 412,
     align: 'justify',
     indent: 30,
     columns: 2,
     height: 300,
     ellipsis: true
   });

doc.end()

console.timeEnd('generate_pdf')

used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} MB`);
