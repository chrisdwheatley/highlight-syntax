var fs = require('fs')
var path = require('path')

var normalize = require('./normalize-lang.js')
var known = ['js','sh']
function isknown (x) { return known.indexOf(x) >= 0 }

module.exports = function (opts, cb) {
  if (typeof opts === 'string') {
    opts = { theme: opts }
  }
  var theme = opts.theme || 'light'
  if (!cb) cb = noop
  var langs = (opts.langs || known).map(normalize)
  var files = {}, css = []
  langs.filter(isknown).forEach(function (lang) {
    files[path.join(__dirname,lang,theme+'.css')] = true
  })
  var pending = 1
  Object.keys(files).forEach(function (file) {
    pending++
    fs.readFile(file, 'utf8', function (err, src) {
      if (err) return cb(err)
      css.push(src)
      if (--pending === 0) cb(null, css.join('\n'))
    })
  })
  if (--pending === 0) cb(null, css.join('\n'))
}

function noop () {}
