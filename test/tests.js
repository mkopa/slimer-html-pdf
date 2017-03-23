const fs = require('fs')
const slimerHtmlPdf = require('../lib/index')

process.env.XVFB_DISPLAY_LIMIT = 10

exports.convertHtmlToPdf = function (test) {
  if (fs.existsSync('github.pdf')) {
    fs.unlinkSync('github.pdf')
  }
  const options = {
    debug: false
  }
  slimerHtmlPdf.convert('http://github.com', './github.pdf', options)
  .then((data) => {
    const dataObject = JSON.parse(data)
    console.log(dataObject.pdfBase64)
    test.ok(true, 'Successful')
    test.done()
  })
  .catch( err => {
    test.ok(false, err)
    test.done()
  })
}

exports.checkOutputFileExists = function (test) {
  let fileExists = fs.existsSync('github.pdf')
  test.ok(fileExists, 'Pdf file should have been created')
  test.done()
}

exports.removeOutputFile = function (test) {
  let fileExists = fs.existsSync('github.pdf')
  if (fileExists) {
    fs.unlinkSync('github.pdf')
  }
  test.ok(fileExists, 'Pdf file should have been removed')
  test.done()
}
