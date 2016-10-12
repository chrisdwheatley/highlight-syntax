var highlight = require('../')
var styles = require('../style')
var marked = require('marked')
var fs = require('fs')
var src = fs.readFileSync(__dirname+'/../readme.md','utf8')

var langs = []
var html = marked(src, { highlight: onhighlight })
styles({ theme: 'light', langs: langs }, function (err, css) {
  console.log('<style>' + css + '</style>' + html)
})

function onhighlight (src, lang) {
  langs.push(lang)
  return highlight(src, lang)
}
