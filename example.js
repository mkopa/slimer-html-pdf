var slimerHtmlPdf = require('./lib/index')

slimerHtmlPdf.convertXvfb('http://github.com', './github.pdf')
  .then( msg => {
    console.log('Successful', msg)
  })
  .catch( err => {
    console.log('Error!', err)
  })
