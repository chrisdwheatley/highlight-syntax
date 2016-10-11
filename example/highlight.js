var highlight = require('../')
var fs = require('fs')
var src = fs.readFileSync(process.argv[3],'utf8')
console.log(highlight(process.argv[2],src))
