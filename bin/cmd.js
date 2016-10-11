#!/usr/bin/env node
var highlight = require('../')
var concat = require('concat-stream')
var fs = require('fs')
var path = require('path')
var minimist = require('minimist')
var argv = minimist(process.argv.slice(2), {
  alias: { h: 'help', o: 'outfile', l: 'lang' },
  default: { outfile: '-' },
  boolean: ['help']
})

var infiles = [].concat(argv.infile, argv._).filter(Boolean)
var inputs = infiles.map(function (x) {
  return x === '-' ? process.stdin : fs.createReadStream(x)
})
var langs = infiles.map(function (x) {
  var ext = path.extname(x).replace(/^\./,'')
  return ext === '' ? 'sh' : ext
})
if (inputs.length === 0) {
  inputs.push(process.stdin)
  langs.push(argv.lang)
}
var output = argv.outfile === '-'
  ? process.stdout
  : fs.createWriteStream(argv.outfile)

;(function next (i) {
  if (i >= inputs.length) {
    if (argv.outfile === '-') output.write('\n')
    else output.end('\n')
    return
  }
  inputs[i].pipe(concat({ encoding: 'string' }, function (src) {
    output.write('<pre class="'+langs[i]+'">'
      + highlight(langs[i],src) + '</pre>\n')
    next(i+1)
  }))
})(0)
