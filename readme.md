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

## var html = highlight(lang, src)

Turn a string of code `src` written in `lang` to a syntax-highlighted string of
html.

## var html = js(src)

Turn a string of javascript code `src` to a syntax-highlighted string of html.

## var html = sh(src)

Turn a string of shell code `src` to a syntax-highlighted string of html.

# install

```
npm install highlight-syntax
```

# license

BSD
