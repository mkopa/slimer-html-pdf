module.exports = { convert, convertXvfb }

function convertXvfb(address, output, options) {
  const spawn = require('child_process').spawn,
        proc= spawn('Xvfb', [':19', '-screen', '0', '1024x768x16'])
  process.env.DISPLAY = ':19'

  return convert(address, output, options)
    .then(() => {
      return new Promise((resolve) => {
        proc.kill()
        resolve('done with Xvfb')
      })
    })
    .catch( err => {
      return new Promise((resolve, reject) => {
        proc.kill()
        reject(err)
      })
    })
}

function convert(address, output, options) {
  return new Promise( (resolve, reject) => {
    var settings = {
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
    if (!fs.existsSync(slimer)) {
      slimer = './utils/slimer.js'
    }

    const spawn = require('child_process').spawn,
          proc = spawn('./node_modules/slimerjs/src/slimerjs', 
                       [slimer, JSON.stringify(settings), address, output])

    proc.stdout.on('data', function (data) {
      console.log(data.toString())
    })

    proc.stderr.on('data', data => {
      reject(data.toString())
      return
    })

    proc.on('close', code => {
      if (code === 0) {
        resolve('done')
      }
        else {
          reject('code: ', code)
      }
    })
  })
}
//}

