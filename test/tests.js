const fs = require('fs')
const slimerHtmlPdf = require('../lib/index')

process.env.XVFB_DISPLAY_LIMIT = 10

exports.convertHtmlToPdf = function (test) {
  if (fs.existsSync('github.pdf')) {
    fs.unlinkSync('github.pdf')
  }
  const options = {
    debug: true
  }
  slimerHtmlPdf.convert('http://github.com', './github.pdf', options)
  .then(() => {
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
