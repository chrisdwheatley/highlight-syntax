#!/usr/bin/env node
var highlight = require('../all.js')
var concat = require('concat-stream')
var fs = require('fs')
var path = require('path')
var minimist = require('minimist')
var argv = minimist(process.argv.slice(2), {
  alias: { h: 'help', o: 'outfile', l: 'lang', t: 'theme' },
  default: { outfile: '-' },
  boolean: ['help']
})
if (argv.help) {
  fs.readFile(path.join(__dirname,'usage.txt'), 'utf8', function (err, src) {
    if (err) exit(err)
    else console.log(src)
  })
  return
}

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
if (argv.outfile === '-') {
  process.stdout.on('error', function () {})
}

if (argv.theme) {
  var file = path.join(__dirname, '..', argv.theme + '.css')
  fs.readFile(file, function (err, css) {
    if (err) return exit(err)
    output.write('<style>\n'+css+'\n</style>\n')
    next(0)
  })
} else next(0)

function next (i) {
  if (i >= inputs.length) {
    if (argv.outfile === '-') output.write('\n')
    else output.end('\n')
    return
  }
  inputs[i].pipe(concat({ encoding: 'string' }, function (src) {
    output.write('<pre class="'+langs[i]+'">'
      + highlight(src, { lang: langs[i] }) + '</pre>\n')
    next(i+1)
  }))
}

function exit (err) {
  console.error(err)
  process.exit(1)
}
