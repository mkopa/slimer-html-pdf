# slimer-html-pdf - convert any HTML document to PDF format using slimerjs (Gecko)
![Travis-ci Build Status](https://api.travis-ci.org/mkopa/slimer-html-pdf.svg?branch=master)

Full support for HTML5 (including FLEX), more info: https://slimerjs.org/

### Dependencies:
```
Firefox - free and open-source web browser
Xvfb - X virtual framebuffer
```
```
$ sudo apt-get install -y firefox xvfb
```
### Usage:
```
$ npm i slimer-html-pdf --save
```
```javascript
var slimerHtmlPdf = require('slimer-html-pdf')

//max parallel instances
process.env.XVFB_DISPLAY_LIMIT = 10

const options = {
  paperSize: {
    format: 'A4',
    orientation: 'portrait',
    margin: '1cm'
  },
  debug: true
}

slimerHtmlPdf.convert('http://github.com', './github.pdf', options)
  .then( msg => {
    console.log('Successful', msg)
  })
  .catch( err => {
    //(err == 2) No set XVFB_DISPLAY_LIMIT variable
    //(err == 3) Busy (XVFB_DISPLAY_LIMIT limit reached)
    console.log('Error!', err)
  })
```
```
slimerHtmlPdf.convert(source, output, options)
source - HTML source
output - save path
options - options (see more: http://docs.slimerjs.org/current/api/webpage.html)
```
### Tip:
<small>How to break a page?</small>
```
use styles!

page-break-after: auto|always|avoid|left|right|initial|inherit;

auto	Default. Automatic page breaks
always	Always insert a page break after the element
avoid	 Avoid page break after the element (if possible)
left	Insert page breaks after the element so that the next page is formatted as a left page
right	Insert page breaks after the element so that the next page is formatted as a right page
initial	Sets this property to its default value. Read about initial
inherit	Inherits this property from its parent element. Read about inherit
```
e.g.
```css
@media print {
    footer {page-break-after: always;}
}
```
or
```html
<p style="page-break-after: always ">&nbsp;</p>
```
