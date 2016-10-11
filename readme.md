# highlight-syntax

highlight source code syntax with html

* [javascript](https://npmjs.com/package/highlight-javascript-syntax)
* [bash](https://npmjs.com/package/highlight-bash-syntax)

# example

* [example output with dark theme][1]
* [example output with light theme][2]

[1]: https://substack.neocities.org/highlight-syntax/dark.html
[2]: https://substack.neocities.org/highlight-syntax/light.html

``` js
var highlight = require('highlight-syntax')
var fs = require('fs')
var src = fs.readFileSync(process.argv[3],'utf8')
console.log(highlight(src, { lang: process.argv[2] }))
```

## example with marked

kou can pass this module to [marked][3] to highlight code in a markdown file:

``` js
var highlight = require('highlight-syntax')
var marked = require('marked')
var fs = require('fs')
var src = fs.readFileSync('readme.md','utf8')
console.log(marked(src, { highlight: highlight }))
```

[3]: https://npmjs.com/package/marked

# api

``` js
var highlight = require('highlight-syntax')
var js = require('highlight-syntax/js')
var sh = require('highlight-syntax/sh')
```

The css files in this distribution are:

* highlight-syntax/dark.css - combined dark themes for all languages
* highlight-syntax/light.css - combined linght themes for all languages
* highlight-syntax/js/dark.css - javascript dark theme
* highlight-syntax/js/light.css - javascript light theme
* highlight-syntax/sh/dark.css - bash dark theme
* highlight-syntax/sh/light.css - bash light theme

## var html = highlight(src, opts)

Turn a string of code `src` written in `opts.lang` to a syntax-highlighted
string of html. If `opts` is a string, it is interpreted as the `opts.lang`.

* `opts.lang` - string language name or file extension
* `opts.throw` - when `true`, throw on syntax errors. Otherwise return an
un-highlighted but escaped code string.

## var html = js(src)

Turn a string of javascript code `src` to a syntax-highlighted string of html.

## var html = sh(src)

Turn a string of shell code `src` to a syntax-highlighted string of html.

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
