var tokenize = require('tokenizer-array')

module.exports = function (rules) {
  var rrules = {}
  var matches = rules.map(function (r) { return RegExp(r.match) })
  return function (src, opts) {
    if (typeof opts === 'string') opts = { lang: opts }
    if (!opts) opts = {}
    var ri = getRule(opts.lang)
    if (ri < 0) return esc(src)
    var r = rules[ri]
    var kw0 = {}, kw1 = {}, kw2 = {}
    ;(r.kw0 || []).forEach(function (key) { kw0[key] = true })
    ;(r.kw1 || []).forEach(function (key) { kw1[key] = true })
    ;(r.kw2 || []).forEach(function (key) { kw2[key] = true })
    if (!rrules[ri]) {
      r = rrules[ri] = r.rules.map(function (x) {
        return { type: x[0], regex: RegExp(x[1]) }
      })
    }
    var tokens = tokenize(src, rrules[ri])
    return tokens.map(function (t) {
      var c = xclass(t.type)
      if (t.type === 'identifier') {
        if (kw0[t.source]) c += ' kw0 kw-' + xclass(t.source)
        else if (kw1[t.source]) c += ' kw1 kw-' + xclass(t.source)
        else if (kw2[t.source]) c += ' kw2 kw-' + xclass(t.source)
      }
      return '<span class="' + c + '">' + esc(t.source) + '</span>'
    }).join('')
  }
  function getRule (lang) {
    for (var i = 0; i < matches.length; i++) {
      if (matches[i].test(lang)) return i
    }
    return -1
  }
}

function xclass (s) { return s.replace(/[\s_]+/g,'-') }
function esc (s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}
