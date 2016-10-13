# highlight-syntax

highlight source code syntax with html

Works in node and the browser. Supported languages:

* javascript
* bash
* c

Very small:

``` sh
$ browserify . | uglifyjs -cm 2>/dev/null | gzip | wc -c
1776
$ browserify all.js | uglifyjs -cm 2>/dev/null | gzip | wc -c
3391
```

# example

* [example output with dark theme][1]
* [example output with light theme][2]

[1]: https://substack.neocities.org/highlight-syntax/dark.html
[2]: https://substack.neocities.org/highlight-syntax/light.html

## all languages

You can load all the languages:

``` js
var highlight = require('highlight-syntax/all')
var fs = require('fs')
var src = fs.readFileSync(process.argv[3],'utf8')
console.log(highlight(src, { lang: process.argv[2] }))
```

## subset of languages

Or you can load a subset of languages. This will make the bundle you deliver to
the browser smaller.

``` js
var highlight = require('highlight-syntax')([
  require('highlight-syntax/c'), require('highlight-syntax/sh')
])
var fs = require('fs')
var src = fs.readFileSync(process.argv[3],'utf8')
console.log(highlight(src, { lang: process.argv[2] }))
```

## example with marked

You can pass this module to [marked][3] to highlight code in a markdown file:

``` js
var highlight = require('highlight-syntax/all')
var marked = require('marked')
var fs = require('fs')
var src = fs.readFileSync('readme.md','utf8')
console.log(marked(src, { highlight: highlight }))
```

[3]: https://npmjs.com/package/marked

# api

``` js
var highlighter = require('highlight-syntax')
var highlight = require('highlight-syntax/all')
```

The css files in this distribution are:

* highlight-syntax/dark.css - combined dark themes for all languages
* highlight-syntax/light.css - combined linght themes for all languages

## var highlight = highlighter(rules)

Create a highlighter function from an array of `rules`. You can load the rules
explicitly from:

* `require('highlight-syntax/c')` - c
* `require('highlight-syntax/sh')` - bash
* `require('highlight-syntax/js')` - javascript

## var html = highlight(src, opts)

Turn a string of code `src` written in `opts.lang` to a syntax-highlighted
string of html. If `opts` is a string, it is interpreted as the `opts.lang`.

* `opts.lang` - string language name or file extension

# usage

```
highlight-syntax FILES... {OPTIONS}
  -o --outfile  Write output to a file. Default: - (stdout)
  -l --lang     Set a language explicitly for stdin input.
  -t --theme    Include an inline css theme. Example: dark

```

# install

To get the library:

``` sh
npm install highlight-syntax
```

To get the command:

``` sh
npm install -g highlight-syntax
```

# license

BSD
