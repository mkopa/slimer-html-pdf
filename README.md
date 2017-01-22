# slimer-html-pdf - convert any HTML document to PDF format using slimerjs (Gecko)
![Travis-ci Build Status](https://api.travis-ci.org/mkopa/slimer-html-pdf.svg?branch=master)
<p>Full support for HTML5 (including FLEX)<p>
<p>More info: https://slimerjs.org/</p>
---
### Dependencies:
* Firefox - free and open-source web browser
* Xvfb - X virtual framebuffer
```
$ sudo apt-get install -y firefox xvfb
```
### Usage:
```
$ npm i slimer-html-pdf --save
```
```javascript
var slimerHtmlPdf = require('slimer-html-pdf')

var options = {
      paperSize: {
        format: 'A4',
        orientation: 'portrait',
        margin: '1cm'
      }
}

slimerHtmlPdf.convertXvfb('http://github.com', './github.pdf', options)
  .then( msg => {
    console.log('Successful', msg)
  })
  .catch( err => {
    console.log('Error!', err)
  })
```
```
slimerHtmlPdf.convert(source, output, options)
source - HTML source
output - save path
options - options (see more: http://docs.slimerjs.org/current/api/webpage.html)

slimerHtmlPdf.convertXvfb - for testing and production, uses Xvfb frame buffer
```
### Tip:
<small>How to break a page?</small>
```
use styles!

page-break-inside: auto|avoid|initial|inherit;

auto	Default. Automatic page breaks
avoid	Avoid page break inside the element (if possible)
initial	Sets this property to its default value.
inherit	Inherits this property from its parent element.
```
e.g.
```html
<div style="page-break-before:avoid;"><!-- content --></div>
```
