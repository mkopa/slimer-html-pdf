const slimerHtmlPdf = require('./lib/index')

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
    console.log('Error!', err)
  })
