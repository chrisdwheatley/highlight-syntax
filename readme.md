# highlight-syntax

highlight source code syntax with html

* [javascript](https://npmjs.com/package/highlight-javascript-syntax)
* [bash](https://npmjs.com/package/highlight-bash-syntax)

# example

``` js
var highlight = require('highlight-syntax')
var fs = require('fs')
var src = fs.readFileSync(process.argv[3],'utf8')
console.log(highlight(process.argv[2],src))
```

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

## var html = highlight(lang, src)

Turn a string of code `src` written in `lang` to a syntax-highlighted string of
html.

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

```
npm install highlight-syntax
```

To get the command:

```
npm install -g highlight-syntax
```

# license

BSD
