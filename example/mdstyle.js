var highlight = require('../')
var normalize = require('../normalize-lang')

var marked = require('marked')
var fs = require('fs')
var path = require('path')
var src = fs.readFileSync(path.join(__dirname,'../readme.md'),'utf8')

var theme = 'light', css = []
var html = marked(src, { highlight: onhighlight })
console.log('<style>'+css.join('\n')+'</style>'+html)

function onhighlight (src, lang) {
  try {
    var file = require.resolve(path.join('..',lang,theme+'.css'))
    css.push(fs.readFileSync(file,'utf8'))
  } catch (err) {}
  return highlight(src, lang)
}
