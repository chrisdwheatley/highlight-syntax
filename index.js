var js = require('./js.js')
var sh = require('./sh.js')
var normalize = require('./normalize-lang.js')

module.exports = function (src, opts) {
  if (typeof opts === 'string') {
    opts = { lang: opts }
  }
  if (!opts) opts = {}
  var lang = normalize(opts.lang)
  if (opts.throw) return parse()
  try { return parse() }
  catch (err) { return esc(src) }
  function parse () {
    if (/^(js|javascript)$/i.test(lang)) return js(src)
    else if (/^(sh|bash)/.test(lang)) return sh(src)
    else return esc(src)
  }
}

function esc (s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}
