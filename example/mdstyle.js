var highlight = require('../all')
var marked = require('marked')
var fs = require('fs')
var src = fs.readFileSync(__dirname+'/../readme.md','utf8')
var css = fs.readFileSync(__dirname+'/../light.css','utf8')

console.log('<style>'+css+'</style>'
  + marked(src, { highlight: highlight }))
