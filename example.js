const slimerHtmlPdf = require('./lib/index')

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
