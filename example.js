var slimerHtmlPdf = require('./lib/index');

slimerHtmlPdf('http://github.com', 'github.pdf')
  .then(() => {
    console.log('Done!');
  })
  .catch( err => {
    console.log('Error!', err);
  });
