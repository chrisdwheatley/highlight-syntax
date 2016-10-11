var js = require('./js.js')
var sh = require('./sh.js')
var normalize = require('./normalize-lang.js')

module.exports = function (lang, src) {
  lang = normalize(lang)
  if (/^(js|javascript)$/i.test(lang)) return js(src)
  else if (/^(sh|bash)/.test(lang)) return sh(src)
  return esc(src)
}

function esc (s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}
