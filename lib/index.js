function SlimerHtmlPdf(address, output, options) {
  return new Promise( (resolve, reject) => {
    var settings = {
      paperSize: {
        format: 'A4',
        orientation: 'portrait',
        margin: '1cm'
      }
    };

    if (options) {
      settings = options;
    }

    if (!address) {
      reject('You must give html source!');
      return;
    }
    if(!output) {
      reject('You must give output pdf file path!');
      return;
    }

    const
      spawn = require('child_process').spawn,
      proc = spawn('node_modules/slimerjs/src/slimerjs', ['utils/slimer.js', JSON.stringify(settings), address, output]);

    proc.stderr.on('data', data => {
      reject(data);
      return;
    });

    proc.on('close', code => {
      if (code === 0) {
        resolve();
      }
      else {
        reject('code: ', code);
      }
    });
  });
}

module.exports = SlimerHtmlPdf;
