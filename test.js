var slimerHtmlPdf = require('./index');

slimerHtmlPdf('http://wp.pl', 'wp.pdf')
  .then(() => {
    console.log('Done!');
  })
  .catch( err => {
    console.log('Error!', err);
  });
