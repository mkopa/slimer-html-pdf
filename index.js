'use strict';

var settings = {
  paperSize: {
    format: 'A4',
    orientation: 'portrait',
    margin: '1cm'
  }
};

var address = 'http://localhost:3000/pdf';
var output = 'mk.pdf';

const
  spawn = require( 'child_process' ).spawn,
  ls = spawn( 'node_modules/slimerjs/src/slimerjs', [ 'utils/slimer.js', JSON.stringify(settings), address, output] );

ls.stdout.on( 'data', data => {
  console.log( `stdout: ${data}` );
});

ls.stderr.on( 'data', data => {
  console.log( `stderr: ${data}` );
});

ls.on( 'close', code => {
  console.log( `child process exited with code ${code}` );
});