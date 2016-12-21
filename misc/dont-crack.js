const log = require('debug')('dont-crack')

function dontCrack (opts, config, callback) {
  log('dont-crack arguments')
  log('opts', opts)
  log('commits')
  log(config.commits)
  log('last release was', config.lastRelease)
  log('next release is', config.nextRelease)

  if (config.nextRelease.type === 'major') {
    log('major release will crack dependents by definition')
    log('no need to check.')
    return callback()
  }
  callback(new Error('Not yet'))
}
module.exports = dontCrack
