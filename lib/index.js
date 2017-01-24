module.exports = { convert }

function convert(address, output, options = { }) {
  return new Promise( (resolve, reject) => {
    let settings = {
      paperSize: {
        format: 'A4',
        orientation: 'portrait',
        margin: '1cm'
      }
    }

    if (options) {
      settings = options
    }

    if (!address) {
      reject('You must give html source!')
      return
    }

    if(!output) {
      reject('You must give output pdf file path!')
      return
    }
    
    const fs = require('fs')
    let slimer = './node_modules/slimer-html-pdf/utils/slimer.js'
    let xvfb = './node_modules/slimer-html-pdf/utils/xvfb-run'
    if (!fs.existsSync(slimer)) {
      slimer = './utils/slimer.js'
      xvfb = './utils/xvfb-run'
    }

    const spawn = require('child_process').spawn,
          proc = spawn(xvfb, ['./node_modules/slimerjs/src/slimerjs', 
                       slimer, JSON.stringify(settings), address, output])

    proc.stdout.on('data', data => {
      if (options.debug) {
        console.log(data.toString())
      }
    })

    proc.stderr.on('data', data => {
      reject(data.toString())
      return
    })

    proc.on('close', code => {
      if (code === 0) {
        resolve('done')
        return;
      }
      if (code == 2 && options.debug) {
        console.log('set `$XVFB_DISPLAY_MAX` variable')
      }
      if (code == 3 && options.debug) {
        console.log('busy')
      }
      reject(code)
    })
  })
}

